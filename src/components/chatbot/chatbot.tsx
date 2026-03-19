"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, Bot } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Step = "greeting" | "service" | "location" | "phone" | "done";

interface Message {
  from: "bot" | "user";
  text: string;
}

const SERVICE_OPTIONS = [
  "Car Lockout",
  "Key Replacement",
  "House Lockout",
  "Lock Rekey",
  "Commercial Lockout",
  "Smart Lock Install",
  "Other",
];

const BOT_FLOW: Record<Step, string> = {
  greeting: `Hi! I'm the InstaKey Pro assistant 🔑\n\nI can help you get connected with a locksmith fast. What type of service do you need?`,
  service: "Got it! Which city are you located in?",
  location: "Almost there! What's your phone number so we can call you back?",
  phone: "",
  done: "",
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("greeting");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState<{ service?: string; location?: string; phone?: string }>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize chat when opened
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: BOT_FLOW.greeting }]);
    }
  }, [open, messages.length]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  function addMessage(from: "bot" | "user", text: string) {
    setMessages((prev) => [...prev, { from, text }]);
  }

  function handleSend(value?: string) {
    const text = (value ?? input).trim();
    if (!text) return;

    addMessage("user", text);
    setInput("");

    setTimeout(() => {
      if (step === "greeting") {
        setUserData((d) => ({ ...d, service: text }));
        addMessage("bot", BOT_FLOW.service);
        setStep("service");
      } else if (step === "service") {
        setUserData((d) => ({ ...d, location: text }));
        addMessage("bot", BOT_FLOW.location);
        setStep("location");
      } else if (step === "location") {
        setUserData((d) => ({ ...d, phone: text }));
        const service = userData.service ?? "locksmith service";
        const location = userData.location ?? text;
        addMessage(
          "bot",
          `Perfect! I've noted your request for ${service} in ${location}. A technician will call you at ${text} shortly.\n\nFor the fastest response, you can also call us directly:`
        );
        setStep("done");
      }
    }, 600);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  function handleReset() {
    setMessages([]);
    setStep("greeting");
    setUserData({});
    setInput("");
    setTimeout(() => {
      setMessages([{ from: "bot", text: BOT_FLOW.greeting }]);
    }, 100);
  }

  return (
    <>
      {/* Toggle button */}
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

        {/* Unread badge */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-orange rounded-full text-xs font-bold flex items-center justify-center">
            1
          </span>
        )}
      </button>

      {/* Chat window */}
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
        style={{ maxHeight: "500px" }}
      >
        {/* Header */}
        <div className="bg-brand-blue text-white rounded-t-2xl p-4 flex items-center gap-3">
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
                {msg.from === "bot" && step === "done" && i === messages.length - 1 && (
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

          {/* Service quick-select buttons (first step) */}
          {step === "greeting" && messages.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {SERVICE_OPTIONS.map((opt) => (
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

        {/* Input */}
        {step !== "done" && (
          <div className="p-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type={step === "location" ? "tel" : "text"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  step === "greeting"
                    ? "Type your service need..."
                    : step === "service"
                    ? "Enter your city..."
                    : "Enter your phone number..."
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
