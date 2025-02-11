import { useMutation } from '@tanstack/react-query';
import { contactService } from '../services/contact/contactService';

export const useContactForm = () => {
  return useMutation({
    mutationFn: contactService.submitForm,
  });
};