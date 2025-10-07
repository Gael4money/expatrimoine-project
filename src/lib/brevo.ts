import axios from 'axios';

const API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const LIST_ID = 5; // Replace with your actual list ID

if (!API_KEY) {
  throw new Error('Missing Brevo API key');
}

export const subscribeToNewsletter = async (email: string) => {
  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        listIds: [LIST_ID],
        updateEnabled: true
      },
      {
        headers: {
          'api-key': API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('API called successfully. Contact created:', response.data);
    return true;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
};