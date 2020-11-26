export abstract class ApplicationError extends Error {
  public abstract readonly statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, ApplicationError.prototype);
  }

  public abstract serializeErrors(): { message: string; field?: string }[];
}
