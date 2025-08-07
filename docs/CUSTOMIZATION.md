# Personalización con Variables CSS

MLZ Components utiliza variables CSS que te permiten personalizar completamente el aspecto de los componentes desde tu proyecto.

## 🎨 Personalización Básica

```css
/* En tu archivo CSS global */
:root {
  /* Colores primarios */
  --mlz-primary-500: #10b981;
  --mlz-primary-600: #059669;
  --mlz-primary-700: #047857;
  
  /* Espaciado */
  --mlz-spacing-sm: 0.75rem;
  --mlz-spacing-md: 1.25rem;
  --mlz-spacing-lg: 2rem;
  
  /* Border radius */
  --mlz-border-radius-md: 0.5rem;
  
  /* Tamaños de fuente */
  --mlz-font-size-base: 1.125rem;
}
```

## 📋 Variables Disponibles

### Colores

#### Paleta Primaria
```css
--mlz-primary-50: #f0fdf4;
--mlz-primary-100: #dcfce7;
--mlz-primary-200: #bbf7d0;
--mlz-primary-300: #86efac;
--mlz-primary-400: #4ade80;
--mlz-primary-500: #22c55e;  /* Color principal */
--mlz-primary-600: #16a34a;
--mlz-primary-700: #15803d;
--mlz-primary-800: #166534;
--mlz-primary-900: #14532d;
--mlz-primary-950: #052e16;
```

#### Paleta Secundaria
```css
--mlz-secondary-50: #f8fafc;
--mlz-secondary-100: #f1f5f9;
--mlz-secondary-200: #e2e8f0;
--mlz-secondary-300: #cbd5e1;
--mlz-secondary-400: #94a3b8;
--mlz-secondary-500: #64748b;  /* Color principal */
--mlz-secondary-600: #475569;
--mlz-secondary-700: #334155;
--mlz-secondary-800: #1e293b;
--mlz-secondary-900: #0f172a;
--mlz-secondary-950: #020617;
```

#### Estados
```css
--mlz-error-500: #ef4444;
--mlz-error-600: #dc2626;
--mlz-success-500: #22c55e;
--mlz-success-600: #16a34a;
--mlz-warning-500: #f59e0b;
--mlz-warning-600: #d97706;
```

### Espaciado

```css
--mlz-spacing-xs: 0.25rem;    /* 4px */
--mlz-spacing-sm: 0.5rem;     /* 8px */
--mlz-spacing-md: 1rem;       /* 16px */
--mlz-spacing-lg: 1.5rem;     /* 24px */
--mlz-spacing-xl: 2rem;       /* 32px */
--mlz-spacing-2xl: 3rem;      /* 48px */
```

### Border Radius

```css
--mlz-border-radius-sm: 0.25rem;   /* 4px */
--mlz-border-radius-md: 0.375rem;  /* 6px */
--mlz-border-radius-lg: 0.5rem;    /* 8px */
--mlz-border-radius-xl: 0.75rem;   /* 12px */
--mlz-border-radius-2xl: 1rem;     /* 16px */
```

### Tamaños de Fuente

```css
--mlz-font-size-xs: 0.75rem;    /* 12px */
--mlz-font-size-sm: 0.875rem;   /* 14px */
--mlz-font-size-base: 1rem;     /* 16px */
--mlz-font-size-lg: 1.125rem;   /* 18px */
--mlz-font-size-xl: 1.25rem;    /* 20px */
--mlz-font-size-2xl: 1.5rem;    /* 24px */
```

### Variables Específicas de Componentes

#### Button
```css
/* Padding */
--mlz-button-padding-x-sm: 0.75rem;
--mlz-button-padding-y-sm: 0.375rem;
--mlz-button-padding-x-md: 1rem;
--mlz-button-padding-y-md: 0.5rem;
--mlz-button-padding-x-lg: 1.25rem;
--mlz-button-padding-y-lg: 0.75rem;

/* Height */
--mlz-button-height-sm: 2rem;
--mlz-button-height-md: 2.5rem;
--mlz-button-height-lg: 3rem;

/* Font sizes */
--mlz-button-font-size-sm: 0.875rem;
--mlz-button-font-size-md: 1rem;
--mlz-button-font-size-lg: 1.125rem;
```

#### Input
```css
/* Padding */
--mlz-input-padding-x-sm: 0.75rem;
--mlz-input-padding-y-sm: 0.375rem;
--mlz-input-padding-x-md: 1rem;
--mlz-input-padding-y-md: 0.5rem;
--mlz-input-padding-x-lg: 1.25rem;
--mlz-input-padding-y-lg: 0.75rem;

/* Height */
--mlz-input-height-sm: 2rem;
--mlz-input-height-md: 2.5rem;
--mlz-input-height-lg: 3rem;

/* Font sizes */
--mlz-input-font-size-sm: 0.875rem;
--mlz-input-font-size-md: 1rem;
--mlz-input-font-size-lg: 1.125rem;

/* Colors */
--mlz-input-border-color: #d1d5db;
--mlz-input-label-color: #374151;
--mlz-input-helper-color: #6b7280;
```

## 🌙 Modo Oscuro

Los componentes incluyen soporte automático para modo oscuro usando `dark:` de Tailwind CSS. Puedes sobrescribir los colores para el modo oscuro:

```css
/* Modo oscuro */
@media (prefers-color-scheme: dark) {
  :root {
    --mlz-primary-500: #34d399;
    --mlz-secondary-500: #94a3b8;
    --mlz-input-border-color: #4b5563;
    --mlz-input-label-color: #d1d5db;
  }
}

/* O usando la clase dark: */
.dark {
  --mlz-primary-500: #34d399;
  --mlz-secondary-500: #94a3b8;
  --mlz-input-border-color: #4b5563;
  --mlz-input-label-color: #d1d5db;
}
```

## 🎨 Ejemplos de Temas

### Tema Azul
```css
:root {
  --mlz-primary-500: #3b82f6;
  --mlz-primary-600: #2563eb;
  --mlz-primary-700: #1d4ed8;
}
```

### Tema Morado
```css
:root {
  --mlz-primary-500: #8b5cf6;
  --mlz-primary-600: #7c3aed;
  --mlz-primary-700: #6d28d9;
}
```

### Tema Corporativo
```css
:root {
  --mlz-primary-500: #059669;
  --mlz-primary-600: #047857;
  --mlz-border-radius-md: 0.25rem;
  --mlz-font-size-base: 0.875rem;
}
```

## 🔧 Integración con Frameworks

### Next.js
```css
/* styles/globals.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  /* Tus variables personalizadas */
  --mlz-primary-500: #10b981;
}
```

### Vite + React
```css
/* src/index.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  /* Tus variables personalizadas */
  --mlz-primary-500: #10b981;
}
```

## 📱 Responsive Design

Las variables CSS también funcionan con responsive design:

```css
/* Mobile */
@media (max-width: 640px) {
  :root {
    --mlz-button-padding-x-md: 0.75rem;
    --mlz-font-size-base: 0.875rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  :root {
    --mlz-button-padding-x-md: 1.5rem;
    --mlz-font-size-base: 1.125rem;
  }
}
```
