// import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
// import { middyfy } from "@libs/lambda";
import { formatJSONResponse } from "@libs/api-gateway";

import db from "../../../db/connection";

export const handler = async () => {
    const response = await db.company.findMany();

    return formatJSONResponse({
        data: { companies: response },
    });
};
