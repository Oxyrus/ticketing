import { ValidationError } from "express-validator";
import { ApplicationError } from "./application-error";

export class RequestValidationError extends ApplicationError {
  public readonly statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  public serializeErrors() {
    return this.errors.map((error) => {
      return {
        message: error.msg,
        field: error.param,
      };
    });
  }
}
