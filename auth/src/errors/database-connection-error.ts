import { ApplicationError } from "./application-error";

export class DatabaseConnectionError extends ApplicationError {
  public readonly statusCode = 500;
  private readonly reason = "Error connecting to the database";

  constructor() {
    super("Error connecting to the database");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  public serializeErrors() {
    return [{ message: this.reason }];
  }
}
