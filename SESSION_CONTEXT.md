# OpsMira Session Context

This file keeps a lightweight record of project context so future sessions can resume quickly.

## Project Identity

- Project name: OpsMira Project Web
- Local path: `C:\Users\adria\OneDrive\OpsMira Project Web`
- GitHub repository: `https://github.com/adclara/opsmira-web`
- Main branch: `main`

## Current Setup

- The local project is connected to GitHub as `origin`.
- The repository has already been initialized and pushed.
- Local helper tools were installed under `.tools/` for Git and GitHub CLI support.
- `.tools/` is ignored by Git and should not be committed.

## Resume Instructions

When starting a new session, share this summary:

`We are continuing work in C:\Users\adria\OneDrive\OpsMira Project Web. The repo is adclara/opsmira-web on branch main. Please read SESSION_CONTEXT.md first and continue from there.`

## Workflow Notes

- Check repo state before changes: `git status --short --branch`
- Verify remote if needed: `git remote -v`
- Verify GitHub CLI auth if push access seems broken: `gh auth status`
- Keep this file updated when major milestones or workflow changes happen.

## Session Log

### 2026-05-13

- Connected the local project to GitHub.
- Created the repository `adclara/opsmira-web`.
- Pushed the initial project commit to `main`.
- Added this continuity file so future sessions can resume with context.
- Reworked the landing page toward a more premium/editorial direction while keeping the OpsMira brand and operations-focused messaging.
- Added static export support and a GitHub Pages workflow for temporary deployment from `main`.
- Pushed the landing redesign and Pages setup to GitHub in commit `1f88c60`.
- Temporary Pages target should be `https://adclara.github.io/opsmira-web/` once GitHub Actions/Pages finishes publishing.
- Next session should expect a new user-provided design direction using PNG references and templates; follow those assets closely instead of extending the current landing direction creatively.
- Reframed the landing page around premium AI operational infrastructure for SMBs with stronger Adrian Clara positioning, enterprise-to-SMB savings messaging, and an interactive ROI calculator.
