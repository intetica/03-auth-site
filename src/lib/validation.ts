export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_PASSWORD = 8;

export function isValidEmail(v: string): boolean {
  return EMAIL_REGEX.test(v.trim());
}

export function isValidPassword(v: string): boolean {
  return v.length >= MIN_PASSWORD;
}
