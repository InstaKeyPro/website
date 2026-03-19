# Contributing to InstaKey Pro Website

## Branch Strategy (Git Flow)

```
master          ← production (live site)
  └── develop   ← integration (staging)
        ├── feature/my-feature   ← new features
        ├── bugfix/issue-123     ← non-critical bug fixes
        └── release/v1.2.0       ← release prep
hotfix/urgent   ← critical prod fixes (branches from master)
```

## Workflow

### Starting a new feature
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
# ... make changes ...
git push -u origin feature/your-feature-name
# Open PR → develop
```

### Releasing a new version
```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.2.0
# bump version in package.json, update CHANGELOG
git push -u origin release/v1.2.0
# Open PR → master  (also merge back → develop after release)
# Tag master: git tag v1.2.0 && git push --tags
```

### Hotfixing production
```bash
git checkout master
git pull origin master
git checkout -b hotfix/critical-fix
# ... fix the issue ...
git push -u origin hotfix/critical-fix
# Open PR → master  (also merge back → develop)
```

## Commit Convention (Conventional Commits)

```
feat:     new feature
fix:      bug fix
perf:     performance improvement
style:    UI/CSS change, no logic change
refactor: code change without feature or fix
docs:     documentation only
chore:    build, deps, config, tooling
ci:       CI/CD changes
```

Examples:
```
feat: add new service area page for Brandon FL
fix: correct phone number click-to-call on iOS
perf: lazy-load testimonials section
style: update hero CTA button color
```

## Pull Request Rules

- All PRs must target `develop` (or `master` for hotfixes/releases)
- CI must pass (lint + type-check + build)
- At least 1 approval required before merging
- Squash merge into `develop`, merge commit into `master`

## Versioning (SemVer)

```
v1.0.0  →  MAJOR.MINOR.PATCH
            │     │     └── bug fix / hotfix
            │     └── new page, section, or feature
            └── breaking redesign or stack change
```
