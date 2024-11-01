export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class InsufficientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InsufficientStockError';
  }
}