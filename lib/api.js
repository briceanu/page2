export const sendContactForm = async (formdata) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formdata),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
