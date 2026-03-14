"use client";

import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      // TODO: Implement form submission
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      setError("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    updateField,
    submitForm,
  };
};