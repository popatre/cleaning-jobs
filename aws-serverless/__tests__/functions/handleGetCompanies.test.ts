import seed from "../../db/seeds/seed";
import { handler } from "../../src/functions/handleGetCompanies/handler";

import db from "../../db/connection";

import {
    driverData,
    companyData,
    jobData,
    serviceTypesData,
} from "../../db/data/test-data/index";

beforeEach(() => {
    return seed({ driverData, companyData, jobData, serviceTypesData });
});

afterAll(() => db.$disconnect());

describe("handleGetCompanies", () => {
    test("should get all companies", async () => {
        const response = await handler();
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
