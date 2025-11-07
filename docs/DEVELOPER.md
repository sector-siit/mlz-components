# 🛠️ Developer Guide

Guía completa para desarrolladores que quieran contribuir o extender MLZ Components.

## 📋 Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración del Entorno](#configuración-del-entorno)
- [Desarrollo de Componentes](#desarrollo-de-componentes)
- [Testing](#testing)
- [Contribución](#contribución)
- [Best Practices](#best-practices)

## 🏗️ Estructura del Proyecto

```
mlz-components/
├── 📁 .github/
│   └── 📁 workflows/          # GitHub Actions
│       ├── ci-cd.yml         # Orchestrator principal
│       ├── build.yml         # Build y testing
│       ├── deploy-storybook.yml
│       ├── publish-npm.yml
│       ├── create-release.yml
│       ├── release-candidate.yml
│       └── quick-release.yml
├── 📁 .storybook/            # Configuración de Storybook
│   ├── main.ts
│   ├── preview.ts
│   └── manager.ts
├── 📁 docs/                  # Documentación
│   ├── CI-CD.md
│   └── DEVELOPER.md
├── 📁 src/
│   ├── 📁 components/        # Componentes React
│   │   ├── 📁 Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── 📁 Input/
│   │       ├── Input.tsx
│   │       ├── Input.stories.tsx
│   │       └── index.ts
│   ├── styles.css           # Variables CSS globales
│   └── index.ts            # Exports principales
├── 📁 dist/                 # Build output (generado)
├── package.json
├── rollup.config.js         # Configuración de build
├── tailwind.config.js       # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
└── README.md
```

## ⚙️ Configuración del Entorno

### Prerrequisitos

- Node.js 18+ 
- Bun 1.0+ (recomendado) o npm/yarn
- Git

### Setup Inicial

```bash
# 1. Clonar el repositorio
git clone https://github.com/sector-siit/mlz-components.git
cd mlz-components

# 2. Instalar dependencias
bun install

# 3. Verificar que todo funciona
bun run typecheck
bun run lint
bun run build

# 4. Iniciar Storybook para desarrollo
bun run storybook
```

### Variables de Entorno

No se requieren variables de entorno para desarrollo local.

## 🎨 Desarrollo de Componentes

### 1. Crear un Nuevo Componente

```bash
# Crear estructura de directorios
mkdir src/components/NewComponent
```

### 2. Estructura de Archivos

Cada componente debe seguir esta estructura:

```typescript
// src/components/NewComponent/NewComponent.tsx
import React from 'react';

export interface NewComponentProps {
  /** Descripción de la prop */
  variant?: 'default' | 'alternative';
  /** Si el componente está deshabilitado */
  disabled?: boolean;
  /** Contenido del componente */
  children?: React.ReactNode;
}

/**
 * Descripción del componente
 */
export const NewComponent: React.FC<NewComponentProps> = ({
  variant = 'default',
  disabled = false,
  children,
  ...props
}) => {
  // Lógica del componente
  const baseClasses = 'base-styling';
  const variantClasses = {
    default: 'default-styling',
    alternative: 'alternative-styling'
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default NewComponent;
```

### 3. Archivo de Exportación

```typescript
// src/components/NewComponent/index.ts
export { NewComponent, type NewComponentProps } from './NewComponent';
export { default } from './NewComponent';
```

### 4. Stories de Storybook

```typescript
// src/components/NewComponent/NewComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { NewComponent } from './NewComponent';

const meta = {
  title: 'Components/NewComponent',
  component: NewComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'alternative'],
    },
  },
} satisfies Meta<typeof NewComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'New Component',
  },
};

export const Alternative: Story = {
  args: {
    variant: 'alternative',
    children: 'Alternative Style',
  },
};
```

### 5. Actualizar Exports Principales

```typescript
// src/index.ts
export { NewComponent } from './components/NewComponent';
export type { NewComponentProps } from './components/NewComponent';
```

## 🎨 Sistema de Estilos

### CSS Variables

Sigue el patrón de nomenclatura establecido:

```css
/* Variables para el nuevo componente */
:root {
  /* Colores específicos */
  --mlz-newcomponent-bg: #ffffff;
  --mlz-newcomponent-border: #e5e7eb;
  --mlz-newcomponent-text: #374151;
  
  /* Tamaños específicos */
  --mlz-newcomponent-padding: 1rem;
  --mlz-newcomponent-border-radius: 0.375rem;
}
```

### Clases de Tailwind

Utiliza clases de Tailwind con fallbacks a variables CSS:

```typescript
const classes = [
  'bg-white border border-gray-200 text-gray-700',
  // CSS Variables con fallbacks
  'bg-(--mlz-newcomponent-bg,#ffffff)',
  'border-(--mlz-newcomponent-border,#e5e7eb)',
  'text-(--mlz-newcomponent-text,#374151)'
].join(' ');
```

## 🧪 Testing

### Estructura de Tests

```typescript
// src/components/NewComponent/NewComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { NewComponent } from './NewComponent';

describe('NewComponent', () => {
  it('renders correctly', () => {
    render(<NewComponent>Test content</NewComponent>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<NewComponent variant="alternative">Test</NewComponent>);
    // Assertions específicas
  });
});
```

### Comandos de Testing

```bash
# Ejecutar tests
bun test

# Tests en modo watch
bun test --watch

# Coverage
bun test --coverage
```

## 🚀 Build y Release

### Comandos de Build

```bash
# Build de la librería
bun run build

# Build de Storybook
bun run build-storybook

# Verificación completa
bun run typecheck && bun run lint && bun run build
```

### Workflow de Release

1. **Feature Development** (develop branch):
   ```bash
   git checkout develop
   git checkout -b feature/new-component
   # Desarrollo
   git commit -m "feat: add NewComponent"
   git push origin feature/new-component
   # PR to develop → Genera Release Candidate
   ```

2. **Production Release** (main branch):
   ```bash
   # Actualizar versión
   npm version minor  # o major/patch
   git checkout main
   git merge develop
   git push origin main  # Genera release en producción
   ```

## 📝 Best Practices

### Componentes

✅ **Hacer**:
- Usar TypeScript con tipos explícitos
- Documentar props con JSDoc
- Implementar variants y sizes consistentes
- Usar CSS variables para personalización
- Incluir fallbacks de Tailwind
- Crear stories completas en Storybook

❌ **Evitar**:
- Hardcodear valores de color/tamaño
- Props inconsistentes entre componentes
- Falta de documentación
- Breaking changes sin bump de major version

### CSS y Estilos

✅ **Hacer**:
- Usar el sistema de naming `--mlz-component-property`
- Proporcionar valores por defecto razonables
- Documentar variables CSS en Storybook
- Mantener consistencia con el design system

❌ **Evitar**:
- Estilos inline sin variables CSS
- Clases CSS globales que puedan colisionar
- !important innecesarios

### Git y Commits

Seguir [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add new component
fix: resolve styling issue
docs: update component documentation
refactor: improve component structure
test: add missing test cases
```

### Documentación

- Actualizar README.md con nuevos componentes
- Crear stories comprehensivas
- Documentar breaking changes
- Incluir ejemplos de uso

## 🤝 Contribución

### Pull Request Process

1. Fork el proyecto
2. Crear feature branch desde `develop`
3. Desarrollar siguiendo las best practices
4. Escribir/actualizar tests
5. Actualizar documentación
6. Crear PR hacia `develop`
7. Pasar review de código
8. Merge → Genera Release Candidate automáticamente
9. **Contributors**: Al mergear a `main`, serás automáticamente agregado a la lista de contributors

### Reconocimiento de Contribuciones

El proyecto reconoce automáticamente las contribuciones:

- **Contributors visual**: Tu avatar aparece en el README
- **Estadísticas**: Commits y actividad registrados en `docs/CONTRIBUTORS_STATS.md`
- **Automático**: No necesitas solicitar ser agregado manualmente
- **Inclusivo**: Reconoce todo tipo de contribuciones (código, docs, tests, etc.)

### Code Review Checklist

- [ ] TypeScript sin errores
- [ ] Tests incluidos y pasando
- [ ] Storybook stories completas
- [ ] Documentación actualizada
- [ ] CSS variables implementadas
- [ ] Responsive design verificado
- [ ] Accesibilidad considerada

---

¿Preguntas? Abre un issue en GitHub! 🚀
