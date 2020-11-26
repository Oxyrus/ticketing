import { ApplicationError } from "./application-error";

export class NotFoundError extends ApplicationError {
  public statusCode = 404;

  constructor() {
    super("Route not found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serializeErrors() {
    return [{ message: "Not found" }];
  }
}
