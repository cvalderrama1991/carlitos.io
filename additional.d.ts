declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTACT_FORM_ENDPOINT: string;
    }
  }
}

export {};
