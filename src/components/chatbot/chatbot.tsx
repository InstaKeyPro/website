"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, Bot } from "lucide-react";
import { SITE, SERVICE_NAMES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  AddressAutocomplete,
  type AddressAutocompleteHandle,
  type PlaceResult,
} from "@/components/ui/address-autocomplete";

type Step =
  | "greeting"
  | "name"
  | "phone"
  | "address"
  | "notes"
  | "confirmation"
  | "submitted";

interface Message {
  from: "bot" | "user";
  text: string;
  type?: "confirmation" | "cta";
}

interface ChatData {
  service_type?: string;
  name?: string;
  phone?: string;
  address?: string;
  lat?: number;
  lng?: number;
  place_id?: string;
  notes?: string;
}

// Quick-select buttons for the greeting step — subset of SERVICE_NAMES
const CHAT_QUICK_OPTIONS: Array<(typeof SERVICE_NAMES)[number]> = [
  "Car Lockout",
  "Lost Car Key / Key Replacement",
  "House Lockout",
  "Lock Rekey",
  "Commercial Lockout",
  "Smart Lock Installation",
  "Other",
];

const GREETING = `Hi! I'm the InstaKey Pro assistant 🔑\n\nI can get a technician to you fast. What type of service do you need?`;

function buildConfirmation(d: ChatData): string {
  return (
    `Here's your request:\n\n` +
    `🔑 Service: ${d.service_type}\n` +
    `👤 Name: ${d.name}\n` +
    `📱 Phone: ${d.phone}\n` +
    `📍 Address: ${d.address}` +
    (d.notes ? `\n📝 Notes: ${d.notes}` : "") +
    `\n\nShall I submit this?`
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("greeting");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [chatData, setChatData] = useState<ChatData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<AddressAutocompleteHandle>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: GREETING }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && step !== "address" && step !== "confirmation" && step !== "submitted") {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, step]);

  function addMessage(from: "bot" | "user", text: string, type?: Message["type"]) {
    setMessages((prev) => [...prev, { from, text, type }]);
  }

  // Batches bot message + optional step transition into one timer to avoid race conditions
  function botReply(text: string, nextStep?: Step, type?: Message["type"]) {
    setTimeout(() => {
      addMessage("bot", text, type);
      if (nextStep) setStep(nextStep);
    }, 600);
  }

  function handleSend(value?: string) {
    const text = (value ?? input).trim();
    if (!text) return;
    setInput("");
    addMessage("user", text);

    if (step === "greeting") {
      setChatData((d) => ({ ...d, service_type: text }));
      botReply("Got it! What's your name?", "name");
    } else if (step === "name") {
      setChatData((d) => ({ ...d, name: text }));
      botReply(`Nice to meet you, ${text}! What's the best phone number to reach you?`, "phone");
    } else if (step === "phone") {
      setChatData((d) => ({ ...d, phone: text }));
      botReply("What's the address where you need service?", "address");
    }
  }

  function handleAddressSelect(result: PlaceResult) {
    setChatData((prev) => ({
      ...prev,
      address: result.address,
      lat: result.lat,
      lng: result.lng,
      place_id: result.place_id,
    }));
    addMessage("user", result.address);
    botReply("Any additional details? (e.g. car model, type of lock) — or tap Skip.", "notes");
  }

  function handleAddressSend() {
    const val = addressRef.current?.getValue()?.trim();
    if (!val) return;
    addressRef.current?.clear();
    setChatData((prev) => ({ ...prev, address: val }));
    addMessage("user", val);
    botReply("Any additional details? (e.g. car model, type of lock) — or tap Skip.", "notes");
  }

  function handleNotesSend(skip: boolean) {
    const text = skip ? "" : input.trim();
    if (!skip && !text) return;
    setInput("");
    const notes = skip ? undefined : text;
    // Need chatData synchronously here to build the confirmation message
    const updated: ChatData = { ...chatData, notes };
    setChatData(updated);
    addMessage("user", skip ? "Skip" : text);
    botReply(buildConfirmation(updated), "confirmation", "confirmation");
  }

  async function handleConfirm() {
    if (isSubmitting) return;
    setIsSubmitting(true);
    addMessage("user", "Yes, submit it!");

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...chatData, source: "chat" }),
      });

      const json = await res.json();

      if (res.ok) {
        botReply(
          `✅ Request confirmed! We'll call you at ${chatData.phone} shortly.\n\nFor immediate help, call us:`,
          "submitted",
          "cta"
        );
      } else {
        botReply(
          json.error ?? "Something went wrong. Please call us directly.",
          "submitted",
          "cta"
        );
      }
    } catch {
      botReply("Connection error. Please call us directly.", "submitted", "cta");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setMessages([{ from: "bot", text: GREETING }]);
    setStep("greeting");
    setChatData({});
    setInput("");
    setIsSubmitting(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (step === "notes") handleNotesSend(false);
      else handleSend();
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label={open ? "Close chat" : "Open chat assistant"}
        aria-expanded={open}
        aria-controls="chatbot-window"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        )}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-orange rounded-full text-xs font-bold flex items-center justify-center">
            1
          </span>
        )}
      </button>

      <div
        id="chatbot-window"
        role="dialog"
        aria-label="Chat with InstaKey Pro"
        aria-hidden={!open}
        className={cn(
          "fixed bottom-24 left-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 origin-bottom-left",
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-90 opacity-0 pointer-events-none"
        )}
        style={{ maxHeight: "520px" }}
      >
        {/* Header */}
        <div className="bg-brand-blue text-white rounded-t-2xl p-4 flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
            <Bot className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm">InstaKey Pro Assistant</div>
            <div className="text-blue-200 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Online – Typically replies instantly
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-blue-200 hover:text-white transition-colors p-1 rounded"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex gap-2",
                msg.from === "user" ? "justify-end" : "justify-start"
              )}
            >
              {msg.from === "bot" && (
                <div className="w-7 h-7 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 self-end">
                  <Bot className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line",
                  msg.from === "user"
                    ? "bg-brand-blue text-white rounded-br-sm"
                    : "bg-gray-100 text-gray-800 rounded-bl-sm"
                )}
              >
                {msg.text}

                {msg.type === "confirmation" && (
                  <div className="mt-3 space-y-2">
                    <button
                      onClick={handleConfirm}
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover disabled:opacity-50 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors"
                    >
                      {isSubmitting ? "Submitting..." : "✓ Yes, Submit Request"}
                    </button>
                    <button
                      onClick={handleReset}
                      className="text-xs text-gray-400 hover:text-brand-blue transition-colors w-full text-center"
                    >
                      ← Start over
                    </button>
                  </div>
                )}

                {msg.type === "cta" && (
                  <div className="mt-3 space-y-2">
                    <a
                      href={SITE.phoneTel}
                      className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors w-full"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      Call {SITE.phone}
                    </a>
                    <button
                      onClick={handleReset}
                      className="text-xs text-gray-400 hover:text-brand-blue transition-colors w-full text-center"
                    >
                      Start over
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {step === "greeting" && messages.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {CHAT_QUICK_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSend(opt)}
                  className="text-xs bg-brand-blue-lighter text-brand-blue font-medium px-3 py-1.5 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} aria-hidden="true" />
        </div>

        {/* Address input */}
        {step === "address" && (
          <div className="p-3 border-t border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-2">
              <AddressAutocomplete
                ref={addressRef}
                onSelect={handleAddressSelect}
                placeholder="Enter service address..."
                className="flex-1 text-sm px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-light"
              />
              <button
                onClick={handleAddressSend}
                className="w-9 h-9 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Send address"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1.5 px-1">
              Start typing to see address suggestions
            </p>
          </div>
        )}

        {/* Notes input */}
        {step === "notes" && (
          <div className="p-3 border-t border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Additional details..."
                className="flex-1 text-sm px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-light"
                aria-label="Additional details"
              />
              <button
                onClick={() => handleNotesSend(true)}
                className="text-xs text-gray-500 hover:text-brand-blue px-2 py-1 rounded-lg transition-colors whitespace-nowrap"
              >
                Skip
              </button>
              <button
                onClick={() => handleNotesSend(false)}
                disabled={!input.trim()}
                className="w-9 h-9 bg-brand-orange hover:bg-brand-orange-hover disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Send"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {/* Text / tel input */}
        {(step === "greeting" || step === "name" || step === "phone") && (
          <div className="p-3 border-t border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type={step === "phone" ? "tel" : "text"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  step === "greeting"
                    ? "Type your service need..."
                    : step === "name"
                    ? "Your full name..."
                    : "Your phone number..."
                }
                className="flex-1 text-sm px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-light"
                aria-label="Chat message input"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="w-9 h-9 bg-brand-orange hover:bg-brand-orange-hover disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
