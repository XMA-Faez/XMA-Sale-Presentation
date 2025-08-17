# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Code Style Guidelines
- **TypeScript**: Use strict typing with proper interfaces/types
- **Vue Components**: Use script setup syntax with Composition API
- **Imports**: Framework imports first, then project imports
- **Tailwind**: Compose utility classes using `cn()` from `lib/utils.ts`
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Error Handling**: Use specific error messages in try/catch blocks
- **Path Aliases**: Use `@/*` or `~/*` for imports from project root
- **Formatting**: Code formatted with Prettier (use `npm run format`)
- **Types**: Export types using `export type` syntax

## Project Structure
The project is a Slidev presentation with Vue 3 components for XMA presentations.



- Prioritize using tailwind color and then hsl. Never use rgb or hex
- don't use emoji's only icons