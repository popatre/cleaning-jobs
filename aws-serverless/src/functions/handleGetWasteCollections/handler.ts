// import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
// import { middyfy } from "@libs/lambda";
import { formatJSONResponse } from "@libs/api-gateway";

import db from "../../../db/connection";

export const handler = async () => {
    const response = await db.wasteCollection.findMany({
        include: {
            serviceItems: true,
            otherServices: true,
        },
    });

    return formatJSONResponse({
        data: { wasteCollections: response },
    });
};
