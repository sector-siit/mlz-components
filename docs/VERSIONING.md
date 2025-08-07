# Versionado Automático

Este documento explica las opciones para implementar versionado automático en el proyecto.

## 🎯 Problema Actual

- Hay que recordar actualizar la versión en `package.json` manualmente
- Si se olvida, el pipeline falla o no se ejecuta
- Proceso manual propenso a errores

## 🛠️ Opciones de Solución

### Opción 1: Build Number + Timestamp (Simple)

**Ventajas:**
- ✅ Automático al 100%
- ✅ Nunca falla por versión duplicada
- ✅ Fácil de implementar

**Desventajas:**
- ❌ Versiones no semánticas
- ❌ No comunica tipo de cambio (major/minor/patch)

**Formato:** `1.0.0-build.20250807.1430` o `1.0.0-${buildNumber}`

### Opción 2: Semantic Release (Profesional)

**Ventajas:**
- ✅ Versionado semántico automático
- ✅ Changelog automático
- ✅ Estándar de la industria
- ✅ Detecta tipo de cambio por commits

**Desventajas:**
- ❌ Requiere formato específico de commits
- ❌ Más complejo de configurar

**Formato:** `1.2.3` (automático basado en commits)

### Opción 3: Git Tag + Build Number (Híbrido)

**Ventajas:**
- ✅ Control manual cuando se desea
- ✅ Automático para RC
- ✅ Flexibilidad

**Desventajas:**
- ❌ Aún requiere acción manual para releases

**Formato:** Manual para main, automático para develop

## 📋 Recomendación

**Semantic Release** es la mejor opción a largo plazo porque:

1. **Automatización completa** - Nunca más te olvidas de actualizar versiones
2. **Changelogs automáticos** - Se generan automáticamente
3. **Versionado inteligente** - Incrementa major/minor/patch según el tipo de cambio
4. **Estándar de la industria** - Usado por proyectos como React, Vue, Angular

## 🚀 Implementación Recomendada

### Fase 1: Semantic Release Básico
- Configurar semantic-release
- Formato de commits: `feat:`, `fix:`, `docs:`, `BREAKING CHANGE:`
- Versionado automático en main

### Fase 2: RC Automático  
- Mantener build number para develop
- Semantic release solo para main

### Fase 3: Optimización
- Changelog automático
- Release notes mejoradas

## 🔧 Implementación Inmediata

¿Qué opción prefieres implementar primero?

1. **Build Number** (30 segundos, funciona inmediatamente)
2. **Semantic Release** (5 minutos, más profesional)
3. **Híbrido** (3 minutos, flexible)
