import type { APIGatewayEvent } from 'aws-lambda';

const getMockAPIGatewayEvent = (
  body = {},
  overrides: Partial<APIGatewayEvent> = {},
) => {
  const mockAPIGatewayEvent = {
    body: JSON.stringify(body),
    headers: {},
    multiValueHeaders: {},
    httpMethod: 'POST',
    isBase64Encoded: false,
    path: '/',
    pathParameters: null,
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    stageVariables: null,
    requestContext: {} as any,
    resource: '',
    ...overrides,
  };

  return mockAPIGatewayEvent;
};

export default getMockAPIGatewayEvent;
