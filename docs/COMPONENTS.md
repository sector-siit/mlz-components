# Guía de Componentes

Esta guía detalla todos los componentes disponibles en MLZ Components con ejemplos completos de uso.

## 📚 Componentes Disponibles

### Button

Un componente de botón versatil con múltiples variantes y tamaños.

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Variante visual del botón |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del botón |
| `children` | `React.ReactNode` | - | Contenido del botón |
| `disabled` | `boolean` | `false` | Estado deshabilitado |
| `onClick` | `(event: MouseEvent) => void` | - | Función de click |

#### Ejemplos

```tsx
// Variantes
<Button variant="primary">Primario</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Tamaños
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>

// Estados
<Button disabled>Deshabilitado</Button>
```

### Input

Componente de input con validación, estados y personalización completa.

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'default' \| 'error' \| 'success'` | `'default'` | Estado visual del input |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del input |
| `label` | `string` | - | Texto del label |
| `helperText` | `string` | - | Texto de ayuda |
| `errorText` | `string` | - | Texto de error (sobrescribe helperText) |
| `fullWidth` | `boolean` | `false` | Si el input ocupa todo el ancho |

#### Ejemplos

```tsx
// Básico
<Input placeholder="Ingresa tu nombre" />

// Con label y ayuda
<Input 
  label="Email"
  placeholder="usuario@ejemplo.com"
  helperText="Te enviaremos notificaciones aquí"
/>

// Con error
<Input 
  label="Password"
  type="password"
  variant="error"
  errorText="La contraseña debe tener al menos 8 caracteres"
/>

// Tamaños
<Input size="sm" placeholder="Input pequeño" />
<Input size="lg" placeholder="Input grande" />

// Ancho completo
<Input fullWidth placeholder="Ocupa todo el ancho" />
```

### DateTimeRange

Componente para seleccionar un rango de fecha y hora con estilo consistente al Input.

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'default' \| 'error' \| 'success'` | `'default'` | Estado visual del componente |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del componente |
| `type` | `'date' \| 'datetime-local' \| 'time'` | `'datetime-local'` | Tipo de input para fecha/hora |
| `label` | `string` | - | Texto del label |
| `helperText` | `string` | - | Texto de ayuda |
| `errorText` | `string` | - | Texto de error (sobrescribe helperText) |
| `fullWidth` | `boolean` | `false` | Si el componente ocupa todo el ancho |
| `disabled` | `boolean` | `false` | Si el componente está deshabilitado |
| `defaultStartDate` | `string` | `''` | Fecha inicial por defecto |
| `defaultEndDate` | `string` | `''` | Fecha final por defecto |
| `startPlaceholder` | `string` | `'Fecha inicial'` | Placeholder para fecha inicial |
| `endPlaceholder` | `string` | `'Fecha final'` | Placeholder para fecha final |
| `onRangeChange` | `(start: string, end: string) => void` | - | Callback cuando cambia el rango |

#### Ejemplos

```tsx
// Básico con fecha y hora
<DateTimeRange 
  label="Período de trabajo"
  type="datetime-local"
  helperText="Selecciona tu horario"
/>

// Solo fechas
<DateTimeRange 
  label="Vacaciones"
  type="date"
  startPlaceholder="Fecha de salida"
  endPlaceholder="Fecha de regreso"
/>

// Con valores por defecto
<DateTimeRange 
  label="Horario laboral"
  type="datetime-local"
  defaultStartDate="2024-01-15T09:00"
  defaultEndDate="2024-01-15T17:00"
/>

// Con error
<DateTimeRange 
  label="Reserva de sala"
  variant="error"
  errorText="La fecha de inicio debe ser anterior a la fecha de fin"
/>

// Con éxito
<DateTimeRange 
  label="Período seleccionado"
  variant="success"
  helperText="Fechas válidas y disponibles"
/>

// Ancho completo
<DateTimeRange 
  fullWidth
  label="Período completo"
  helperText="Componente de ancho completo"
/>

// Con callback
<DateTimeRange 
  label="Selección interactiva"
  onRangeChange={(start, end) => {
    console.log(`Desde: ${start}, Hasta: ${end}`);
  }}
/>
```

## 🎨 Variables CSS

Para más información sobre personalización con variables CSS, consulta [CUSTOMIZATION.md](./CUSTOMIZATION.md).

## 📚 Storybook

Para ejemplos interactivos de todos los componentes, visita nuestra [documentación en Storybook](https://sector-siit.github.io/mlz-components/).
