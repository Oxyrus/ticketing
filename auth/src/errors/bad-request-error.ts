import { ApplicationError } from "./application-error";

export class BadRequestError extends ApplicationError {
  public readonly statusCode = 400;

  constructor(public readonly reason: string) {
    super(reason);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  public serializeErrors() {
    return [{ message: this.reason }];
  }
}
