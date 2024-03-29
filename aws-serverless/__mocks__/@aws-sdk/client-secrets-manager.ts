/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
export const mockGetSecret = jest
  .fn()
  .mockResolvedValue({ SecretString: JSON.stringify({ TOKEN: 'ABC123' }) });

export class SecretsManagerClient {
  async send(...args) {
    const secret = await mockGetSecret(...args);
    return secret;
  }
}

export class GetSecretValueCommand {}
