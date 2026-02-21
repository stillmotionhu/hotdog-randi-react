export interface FetchError {
  code: string;
  message: string;
  from: "firebase" | "unknown";
}
