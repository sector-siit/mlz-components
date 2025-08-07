# 🚀 Quick Start: Conventional Commits

## ✅ ¿Cómo hacer commits ahora?

### Opción 1: Asistente Interactivo (Recomendado)
```bash
bun run commit
```
Te guía paso a paso para crear commits perfectos.

### Opción 2: Manual
```bash
git commit -m "tipo: descripción"
```

## 📝 Tipos más comunes:

| Comando | Cuándo usar | Versión |
|---------|-------------|---------|
| `feat: descripción` | Nueva funcionalidad | Minor (1.1.0) |
| `fix: descripción` | Corrección de bug | Patch (1.0.1) |
| `docs: descripción` | Solo documentación | Patch (1.0.1) |
| `style: descripción` | Formato, espacios | Patch (1.0.1) |
| `refactor: descripción` | Refactoring | Patch (1.0.1) |
| `chore: descripción` | Build, deps | Patch (1.0.1) |

## 💥 Breaking Changes (Major)
```bash
# Opción 1
git commit -m "feat!: remove old API"

# Opción 2
git commit -m "feat: new API

BREAKING CHANGE: removes support for old format"
```

## ✅ Ejemplos Válidos
```bash
feat: add DateTimeRange component
fix: resolve button click issue
docs: update README
feat(input): add validation
fix(button): correct styling
chore: update dependencies
```

## ❌ Ejemplos Inválidos
```bash
Add new component        ❌ Falta tipo
feat Add component       ❌ Falta :
FEAT: add component      ❌ Mayúsculas
feat: Add component.     ❌ Punto final
```

## 🔄 Workflow Automático

### Push a `develop` → Release Candidate
- Crea versión `1.2.0-rc.1`
- Publica a NPM con tag `@rc`
- GitHub Prerelease

### Push a `main` → Production Release
- Calcula nueva versión automáticamente
- Publica a NPM (stable)
- Despliega Storybook
- Crea GitHub Release
- Genera changelog

## 🚨 Si falla la validación
La validación ahora se hace automáticamente en los PRs usando GitHub Actions.

Si falla, verás:
- ❌ Check fallido en el PR
- 💬 Comentario automático con instrucciones
- 📋 Lista de commits que necesitan ser corregidos

Para corregir:
```bash
# Usar asistente para nuevo commit
bun run commit

# O hacer amend del último commit
git commit --amend -m "feat: new commit message"
git push --force-with-lease
```

## 🎯 ¡Nunca más versiones manuales!
El sistema calcula automáticamente:
- `feat:` → Version 1.1.0 (minor)
- `fix:` → Version 1.0.1 (patch)  
- `feat!:` → Version 2.0.0 (major)
