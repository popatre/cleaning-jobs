import seed from "../../db/seeds/seed";
import { handler } from "../../src/functions/handleGetDrivers/handler";
import { driverData, companyData } from "../../db/data/test-data/index";
import db from "../../db/connection";

beforeEach(() => {
    return seed({ driverData, companyData });
});

afterAll(() => db.$disconnect());

describe("handleGetDrivers", () => {
    test("should get all drivers", async () => {
        const response = await handler();
        expect(response.statusCode).toBe(200);

        const body = JSON.parse(response.body);
        expect(body.data.drivers).toBeInstanceOf(Array);
        expect(body.data.drivers).toHaveLength(3);
        body.data.drivers.forEach((driver) => {
            expect(driver).toMatchObject({
                driverID: expect.any(Number),
                firstName: expect.any(String),
                lastName: expect.any(String),
                contactPhone: expect.any(String),
            });
        });
    });
});
