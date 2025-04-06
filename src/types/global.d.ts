// Create this file if it doesn't exist

interface Window {
  gtag?: (
    command: string,
    action: string,
    params?: {
      [key: string]: any;
    }
  ) => void;
}