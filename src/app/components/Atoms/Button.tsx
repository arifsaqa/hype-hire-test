'use client'
import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'filled-dogger' | 'outlined';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant: ButtonVariant;
}
const Button = (props: ButtonProps) => {
  const { children, className, variant } = props;

  const variantClassNames: { [key: string]: string } = {
    'filled-dogger': 'bg-white text-[#4A77FF]',
    outlined: 'border border-gray-600 text-gray-600',
  };

  return <button className={`rounded-lg ${variantClassNames[variant]} ${className}`}>{children}</button>;
};

export default Button;
