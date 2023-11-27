import { Collection } from 'discord.js';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_BASE_ENDPOINT: string;
      API_KEY: string;
    }
  }
}

declare module 'discord.js' {
  export interface Client {
    commands: Collection<unknown, unknown>;
  }
}
