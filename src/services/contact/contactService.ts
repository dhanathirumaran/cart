import api from '../api/axios';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const contactService = {
  submitForm: async (form: ContactForm): Promise<void> => {
    await api.post('/contact', form);
  },
};