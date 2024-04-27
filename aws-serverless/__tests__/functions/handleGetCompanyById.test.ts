import { handler } from "../../src/functions/handleGetCompanyById/handler";
import getMockAPIGatewayEvent from "../fixtures/mockApiGatewayEvent";
import seed from "../../db/seeds/seed";
import db from "../../db/connection";
import {
    driverData,
    companyData,
    jobData,
} from "../../db/data/test-data/index";

beforeEach(() => {
    return seed({ driverData, companyData, jobData });
});

afterAll(() => db.$disconnect());

describe("handleGetCompanies", () => {
    test("should get company by id", async () => {
        const payload = { companyId: 111 };
        const mockEvent = getMockAPIGatewayEvent(payload);
        const response = await handler(mockEvent);

        expect(response.statusCode).toBe(200);

        const body = JSON.parse(response.body);
        expect(body.data.company).toMatchObject({
            companyID: 111,
            companyName: "Company 1",
            contactPerson: "Sally 1",
            contactEmail: "Sal@hotmail.com",
            contactPhone: "07840",
            address: "29 Fake street",
        });
    });
});
