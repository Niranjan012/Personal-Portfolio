// lib/validations/index.ts
// ✅ ADD the function directly here instead
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validation result interface
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Validate required field
 * @param value - Value to validate
 * @param fieldName - Name of the field for error message
 * @returns Validation result
 */
export function validateRequired(value: any, fieldName: string): ValidationResult {
  const errors: string[] = [];

  if (value === null || value === undefined || value === '') {
    errors.push(`${fieldName} is required`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate email field
 * @param email - Email to validate
 * @returns Validation result
 */
export function validateEmail(email: string): ValidationResult {
  const errors: string[] = [];

  if (!email) {
    errors.push('Email is required');
  } else if (!isValidEmail(email)) {
    errors.push('Please enter a valid email address');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate string length
 * @param value - String to validate
 * @param fieldName - Name of the field
 * @param minLength - Minimum length
 * @param maxLength - Maximum length
 * @returns Validation result
 */
export function validateLength(
  value: string,
  fieldName: string,
  minLength?: number,
  maxLength?: number
): ValidationResult {
  const errors: string[] = [];

  if (minLength && value.length < minLength) {
    errors.push(`${fieldName} must be at least ${minLength} characters`);
  }

  if (maxLength && value.length > maxLength) {
    errors.push(`${fieldName} must be no more than ${maxLength} characters`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate URL
 * @param url - URL to validate
 * @param fieldName - Name of the field
 * @returns Validation result
 */
export function validateUrl(url: string, fieldName: string = 'URL'): ValidationResult {
  const errors: string[] = [];

  try {
    new URL(url);
  } catch {
    errors.push(`${fieldName} must be a valid URL`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Combine multiple validation results
 * @param results - Array of validation results
 * @returns Combined validation result
 */
export function combineValidations(...results: ValidationResult[]): ValidationResult {
  const allErrors = results.flatMap(result => result.errors);
  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
  };
}

/**
 * Validate contact form
 * @param data - Form data
 * @returns Validation result
 */
export function validateContactForm(data: {
  name: string;
  email: string;
  message: string;
}): ValidationResult {
  const nameValidation = combineValidations(
    validateRequired(data.name, 'Name'),
    validateLength(data.name, 'Name', 2, 50)
  );

  const emailValidation = validateEmail(data.email);

  const messageValidation = combineValidations(
    validateRequired(data.message, 'Message'),
    validateLength(data.message, 'Message', 10, 1000)
  );

  return combineValidations(nameValidation, emailValidation, messageValidation);
}