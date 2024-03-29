// import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
// import { middyfy } from "@libs/lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import type { APIGatewayEvent } from "aws-lambda";

// import schema from "./schema";

// export const handler: ValidatedEventAPIGatewayProxyEvent<
//     typeof schema
// > = async (event) => {
//     return formatJSONResponse({
//         message: `Hello, these are the companies`,
//         event,
//     });
// };

// export const main = middyfy(handler);

export const handler = async (event: APIGatewayEvent) => {
    return formatJSONResponse({
        message: `Hello, these are the companies`,
        event,
    });
};
