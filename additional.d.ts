declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AWS_CONTACT_FORM_ENDPOINT: string;
    }
  }
}

export {};
