import { handler } from "../../src/functions/handleGetDriverById/handler";
import getMockAPIGatewayEvent from "../fixtures/mockApiGatewayEvent";
import seed from "../../db/seeds/seed";
import db from "../../db/connection";
import {
    companyData,
    driverData,
    jobData,
    serviceTypesData,
    otherServiceData,
    wasteCollectionData,
    serviceItemData,
} from "../../db/data/test-data/index";

beforeEach(() => {
    return seed({
        companyData,
        driverData,
        jobData,
        serviceTypesData,
        otherServiceData,
        wasteCollectionData,
        serviceItemData,
    });
});

afterAll(() => db.$disconnect());

describe("handleGetDriverById", () => {
    test("should get driver by id", async () => {
        const payload = { driverId: 3 };
        const mockEvent = getMockAPIGatewayEvent(payload);
        const response = await handler(mockEvent);

        expect(response.statusCode).toBe(200);

        const body = JSON.parse(response.body);
        expect(body.data.driver).toMatchObject({
            driverID: 3,
            firstName: "Jon",
            lastName: "Jonson",
            contactPhone: "666111222",
        });
    });
});
