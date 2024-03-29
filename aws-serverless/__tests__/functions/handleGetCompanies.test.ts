import { handler } from "../../src/functions/handleGetCompanies/handler";
import getMockAPIGatewayEvent from "../fixtures/mockApiGatewayEvent";

describe("handleGetCompanies", () => {
    test("should get all companies", async () => {
        const mockEvent = getMockAPIGatewayEvent();
        const response = await handler(mockEvent);
        expect(response.statusCode).toBe(200);

        const body = JSON.parse(response.body);
        expect(body.data.companies).toBeInstanceOf(Array);
        expect(body.data.companies).toHaveLength(3);
        body.data.companies.forEach((company) => {
            expect(company).toMatchObject({
                companyID: expect.any(Number),
                companyName: expect.any(String),
                contactPerson: expect.any(String),
                contactEmail: expect.any(String),
                contactPhone: expect.any(String),
                address: expect.any(String),
            });
        });
    });
});
