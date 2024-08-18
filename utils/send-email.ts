import { FormData } from '@/app/components/Contact';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((err) => {
          throw new Error(err.error || 'Something went wrong');
        });
      }
      return res.json();
    })
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      console.error('Error sending email:', err);
      alert('Failed to send message. Please try again later.');
    });
}
