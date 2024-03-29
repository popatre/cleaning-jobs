// import type { FailedConnectionEvent } from '../../src/types/events';

// export const mockFailedConnectionEvent = {
//   type: 'FAILED_CONNECTION_EVENT',
//   service: 'SLACK#FRESHERS',
//   connectionId: '123456',
//   userEmail: 'user@example.com',
//   errorCode: 'UNKNOWN_ERROR',
//   triggeredBy: 'TEAM_JOIN',
//   timestamp: new Date().toISOString(),
// };

// const getMockSNSEvent = (
//   msgOverrides: Partial<FailedConnectionEvent> = {},
//   additionalRecords = [],
// ) => {
//   const mockSNSEvent = {
//     Records: [
//       {
//         EventVersion: '123',
//         EventSubscriptionArn: '123',
//         EventSource: '123',
//         Sns: {
//           SignatureVersion: '123',
//           Timestamp: '123',
//           Signature: '123',
//           SigningCertUrl: '123',
//           MessageId: '123',
//           Message: JSON.stringify({
//             ...mockFailedConnectionEvent,
//             ...msgOverrides,
//           }),
//           MessageAttributes: { event: { Type: '123', Value: '123' } },
//           Type: '123',
//           UnsubscribeUrl: '123',
//           TopicArn: '123',
//           Subject: '123',
//         },
//       },
//       ...additionalRecords,
//     ],
//   };

//   return mockSNSEvent;
// };

// export default getMockSNSEvent;
