import { ErrorHandler } from ".";

export class ValidationError extends ErrorHandler {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}