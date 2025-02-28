export const env = {
  API_URL: import.meta.env.VITE_API_URL as string,
  FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY as string,
  FIREBASE_AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  PROJECT_ID: import.meta.env.VITE_PROJECT_ID as string,
  STORAGE_BUCKET: import.meta.env.VITE_STORAGE_BUCKET as string,
  MESSAGING_SENDER_ID: import.meta.env.VITE_MESSAGING_SENDER_ID as string,
  APP_ID: import.meta.env.VITE_APP_ID as string,
}