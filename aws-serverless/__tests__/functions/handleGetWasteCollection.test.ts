import seed from "../../db/seeds/seed";
import { handler } from "../../src/functions/handleGetWasteCollections/handler";

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

describe("handleGetWasteCollections", () => {
    test("should get all waste collections", async () => {
        const response = await handler();
        expect(response.statusCode).toBe(200);

        const body = JSON.parse(response.body);
        expect(body.data.wasteCollections).toBeInstanceOf(Array);
        expect(body.data.wasteCollections).toHaveLength(3);
        console.log(body.data.wasteCollections[0].serviceItems);
        body.data.wasteCollections.forEach((wasteCollections: any) => {
            expect(wasteCollections).toMatchObject({
                collectionID: expect.any(Number),
                companyID: expect.any(Number),
                driverID: expect.any(Number),
                jobID: expect.any(Number),
                collectionDate: expect.any(String),
                printName: expect.any(String),
                signatureData: expect.any(String),
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
            });
            expect(wasteCollections.serviceItems).toBeInstanceOf(Array);
            expect(wasteCollections.otherServices).toBeInstanceOf(Array);

            wasteCollections.serviceItems.forEach((serviceItem: any) => {
                expect(serviceItem).toMatchObject({
                    collectionID: expect.any(Number),
                    serviceItemID: expect.any(Number),
                    serviceTypeID: expect.any(Number),
                    selectedOptions: expect.any(Array),
                    units: expect.any(Number),
                });
            });

            wasteCollections.otherServices.forEach((serviceItem: any) => {
                expect(serviceItem).toMatchObject({
                    otherServiceID: expect.any(Number),
                    collectionID: expect.any(Number),
                    description: expect.any(String),
                    units: expect.any(Number),
                });
            });
        });
    });
});
