/**
 * Form Input component with label, error state, and helper text
 * Integrates with react-hook-form for validation
 */

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the Input component
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label text for the input */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text shown below input */
  helperText?: string;
  /** Additional wrapper CSS classes */
  wrapperClassName?: string;
  /** Make the field required (shows asterisk) */
  isRequired?: boolean;
}

/**
 * Input component with label, validation states, and helper text
 *
 * @example
 * // Basic usage
 * <Input label="Email" type="email" placeholder="you@example.com" />
 *
 * // With error
 * <Input label="Phone" error="Please enter a valid phone number" />
 *
 * // With react-hook-form
 * <Input label="Name" {...register('name')} error={errors.name?.message} />
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      wrapperClassName,
      className,
      isRequired = false,
      id,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div className={cn('w-full', wrapperClassName)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none',
            'text-gray-900 placeholder:text-gray-400',
            error
              ? 'border-red-300 bg-red-50 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100',
            'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />

        {/* Error message */}
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Helper text (only show if no error) */}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
