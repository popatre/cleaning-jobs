const getMockInvokeCommandOutput = (payload = {}) => {
  const mockInvokeCommandOutput = {
    $metadata: {
      httpStatusCode: 200,
      requestId: '1-2-3-4-5',
      extendedRequestId: undefined,
      cfId: undefined,
      attempts: 1,
      totalRetryDelay: 0,
    },
    ExecutedVersion: '$LATEST',
    Payload: JSON.stringify(payload),
    StatusCode: 200,
  };

  return mockInvokeCommandOutput;
};

export default getMockInvokeCommandOutput;
