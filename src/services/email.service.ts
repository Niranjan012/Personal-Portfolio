interface EmailData {
  to: string;
  subject: string;
  body: string;
}

class EmailService {
  async sendEmail(data: EmailData): Promise<void> {
    // TODO: Implement email sending logic
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

export const emailService = new EmailService();