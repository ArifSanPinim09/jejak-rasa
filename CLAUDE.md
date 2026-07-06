@AGENTS.md

---

## Claude-Obsidian Vault Integration

**Vault Path**: `~/Documents/claude-obsidian/`

This project is connected to a claude-obsidian knowledge vault. Use it for:

- **Session persistence**: Every session is auto-saved to the vault on stop
- **Knowledge retrieval**: Before answering, check `wiki/hot.md` for recent context
- **Save important findings**: Use `/save` skill or write directly to vault wiki pages
- **Cross-session continuity**: The vault maintains context across all sessions

### Auto-Save Hooks (Configured)

1. **SessionStart**: Loads hot.md from vault for recent context
2. **Stop**: Auto-saves session summary to vault wiki/sessions/
3. **PostToolUse**: Auto-commits vault changes after Write/Edit

### How to Use

- Ask "what do you know about X?" to query the vault
- Say "save this to the wiki" to persist important information
- The vault automatically maintains a hot cache (`hot.md`) for session continuity
