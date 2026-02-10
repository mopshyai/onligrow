/**
 * Form Textarea component with label, error state, and helper text
 * Integrates with react-hook-form for validation
 */

import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the Textarea component
 */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text for the textarea */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text shown below textarea */
  helperText?: string;
  /** Additional wrapper CSS classes */
  wrapperClassName?: string;
  /** Make the field required (shows asterisk) */
  isRequired?: boolean;
}

/**
 * Textarea component with label, validation states, and helper text
 *
 * @example
 * // Basic usage
 * <Textarea label="Message" placeholder="Tell us more..." rows={4} />
 *
 * // With error
 * <Textarea label="Message" error="Message is too short" />
 *
 * // With react-hook-form
 * <Textarea label="Message" {...register('message')} error={errors.message?.message} />
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      wrapperClassName,
      className,
      isRequired = false,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const textareaId = id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div className={cn('w-full', wrapperClassName)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Textarea */}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            'w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none',
            'text-gray-900 placeholder:text-gray-400 resize-none h-32',
            error
              ? 'border-red-300 bg-red-50 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100',
            'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
                ? `${textareaId}-helper`
                : undefined
          }
          {...props}
        />

        {/* Error message */}
        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Helper text (only show if no error) */}
        {!error && helperText && (
          <p id={`${textareaId}-helper`} className="mt-1.5 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
