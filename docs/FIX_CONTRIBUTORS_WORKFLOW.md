# Fix: Update Contributors Workflow

## Problema
El workflow `update-contributors.yml` estaba fallando con el siguiente error:
```
Error: Parameter token or opts.auth is required
```

## Causa
La action `akhilmhdh/contributors-readme-action@v2.3.6` requiere autenticación para acceder a la API de GitHub, pero no se estaba proporcionando el token `GITHUB_TOKEN`.

## Solución

### 1. Agregar GITHUB_TOKEN
Se agregó la variable de entorno `GITHUB_TOKEN` en el step de "Update Contributors":

```yaml
- name: Update Contributors
  uses: akhilmhdh/contributors-readme-action@v2.3.6
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # ← Agregado
  with:
    # ... resto de configuración
```

### 2. Corregir rama de push
Se corrigió la rama de destino de `develop` a `main` en el step de actualización de estadísticas:

```yaml
git push origin main || true  # Antes era: git push origin develop
```

## Validación
- ✅ El workflow ya no fallará por falta de autenticación
- ✅ Los contributors se actualizarán correctamente en el README.md
- ✅ Las estadísticas se guardarán en `docs/CONTRIBUTORS_STATS.md`
- ✅ Los commits se harán a la rama `main` correcta

## Permisos Requeridos
El workflow ya tiene los permisos necesarios configurados:
```yaml
permissions:
  contents: write
  pull-requests: write
```

El `GITHUB_TOKEN` se proporciona automáticamente por GitHub Actions y tiene acceso a estos permisos.
