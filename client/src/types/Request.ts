export type RequestTypes<T> = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  onSuccess: (args: T) => void;
}