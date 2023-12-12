import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'seiyaookura',
  apiKey: process.env.API_KEY,
});