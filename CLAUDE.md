@AGENTS.md

## Rules
- **Never commit** — All git commits are handled by the user only. Never create commits automatically or ask for permission.
- **No hardcoded text** — Always use localization strings from `/locales` instead of hardcoding text. Every user-facing string must be translatable.
- **Handle RTL/LTR** — Always design for both text directions. Use logical properties (margin-inline, padding-inline, etc.) instead of left/right. Test layouts in both English and Arabic.
