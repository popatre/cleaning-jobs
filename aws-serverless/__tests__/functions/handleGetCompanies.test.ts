import { handler } from "../../src/functions/handleGetCompanies/handler";
import getMockAPIGatewayEvent from "../fixtures/mockApiGatewayEvent";

describe("handleGetCompanies", () => {
    test("should get all companies", async () => {
        const payload = { value: "Hello" };
        const mockEvent = getMockAPIGatewayEvent(payload);
        const response = await handler(mockEvent);

        console.log(response, "88888");
    });
});
