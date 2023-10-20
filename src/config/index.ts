import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

export const config = {
  port: env.PORT ?? 4000,
  ssl: {
    file: {
      cert: env.SSL_CERT_FILE ?? null,
      key: env.SSL_KEY_FILE ?? null
    }
  }
  // Add other environment variables here...
};