/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
export const mockLambdaSend = jest.fn();

export class LambdaClient {
  async send(...args) {
    const response = await mockLambdaSend(...args);
    return response;
  }
}

export class InvokeCommand {}
