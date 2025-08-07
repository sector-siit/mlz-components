import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Contenido del botón
   */
  children: React.ReactNode;
  /**
   * Variante del botón
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * Tamaño del botón
   */
  size?: 'sm' | 'md' | 'lg';
}

const buttonVariants = {
  primary: 'mlz-btn-primary',
  secondary: 'mlz-btn-secondary', 
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 bg-transparent',
  ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500 bg-transparent'
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = buttonVariants[variant as keyof typeof buttonVariants];
  const sizeClasses = buttonSizes[size as keyof typeof buttonSizes];
  
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
