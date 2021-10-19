export const Keys = {
  access_token: "access_token",
} as const;
// eslint-disable-next-line
export type Keys = typeof Keys[keyof typeof Keys];
// eslint-disable-next-line
export const getItem = (Keys: Keys) => {
  const value: string | null = localStorage.getItem(Keys);
  if (value !== null) {
    return value;
  };
  return "";
};
// eslint-disable-next-line
export const removeItem = (Keys: Keys) => {
  localStorage.removeItem(Keys);
};
// eslint-disable-next-line
export const setItem = (Keys: Keys, value: string,) => {
  localStorage.setItem(Keys, value);
};
