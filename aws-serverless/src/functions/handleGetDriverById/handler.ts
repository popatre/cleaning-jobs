// import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
// import { middyfy } from "@libs/lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import type { APIGatewayEvent } from "aws-lambda";
import db from "../../../db/connection";

export const handler = async (event: APIGatewayEvent) => {
    const id = JSON.parse(event.body).driverId;

    const response = await db.driver.findUnique({ where: { driverID: id } });

    return formatJSONResponse({
        data: { driver: response },
    });
};
