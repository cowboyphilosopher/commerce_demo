const url = 'https://api.commerce.coinbase.com/charges';

const requestBody = {
  local_price: {
    amount: '1.50', // price of charge
    currency: 'USD', // currency
  },
  pricing_type: 'fixed_price',

  name: 'Name of the charge',
  description: 'Small description',
  redirect_url: 'https:/google.com', // optional redirect URL

  metadata: {
    // optional charge metadata
    id: 'Customer id',
    email: 'bobby@axecapital.com',
    address: '123 Satoshi Lane',
  },
};

// Ensure that the API key is present
const apiKey = '4eb0652e-9c7b-48f1-ba80-17ec7c0e2f0b'; // process.env.COMMERCE_API_KEY;
if (!apiKey) {
  throw new Error('COMMERCE_API_KEY is not defined');
}

const payload = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CC-Api-Key': apiKey, // API key from Commerce
  },
  body: JSON.stringify(requestBody),
};

async function createCharge() {
  try {
    const response = await fetch(url, payload);
    if (!response.ok) {
      throw new Error(`HTTP error Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating charge:', error);
    return undefined; // or return a custom error message
  }
}

export { createCharge };
