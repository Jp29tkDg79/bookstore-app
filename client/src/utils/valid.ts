export const isEmpty = (v: string) => !v && v.trim() === "";

export const isEmail = (v: string) => !isEmpty(v) && v.includes("@");

export const isPassword = (v: string) => !isEmpty(v) && v.trim().length >= 6;
