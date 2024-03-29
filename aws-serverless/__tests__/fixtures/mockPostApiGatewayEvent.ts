import querystring from 'node:querystring';

const getMockPostAPIGatewayEvent = (body = {}, overrides = {}) => {
  const mockPostAPIGatewayEvent = {
    body: Buffer.from(querystring.encode(body)).toString('base64'),
    version: '2.0',
    routeKey: 'POST /workspace-register',
    rawPath: '/workspace-register',
    rawQueryString: '',
    headers: {},
    requestContext: {} as any,
    multiValueHeaders: {},
    httpMethod: 'POST',
    isBase64Encoded: true,
    path: '/',
    pathParameters: null,
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    stageVariables: null,
    resource: '',
    ...overrides,
  };

  return mockPostAPIGatewayEvent;
};

export default getMockPostAPIGatewayEvent;
