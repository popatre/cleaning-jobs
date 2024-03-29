// import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
// import { middyfy } from "@libs/lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import type { APIGatewayEvent } from "aws-lambda";
import db from "../../../db/connection";

export const handler = async (event: APIGatewayEvent) => {
    const id = JSON.parse(event.body).companyId;

    const response = await db.company.findUnique({ where: { companyID: id } });

    return formatJSONResponse({
        data: { company: response },
    });
};
