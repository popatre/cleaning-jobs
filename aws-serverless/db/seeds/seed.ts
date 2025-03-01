import client from "../connection";
import {
    Company,
    Driver,
    Job,
    OtherService,
    ServiceItem,
    ServiceType,
    WasteCollection,
} from "@prisma/client";

type SeedData = {
    companyData: Company[];
    driverData: Driver[];
    jobData: Job[];
    serviceTypesData: ServiceType[];
    wasteCollectionData: WasteCollection[];
    serviceItemData: ServiceItem[];
    otherServiceData: OtherService[];
};

async function seed({
    companyData,
    driverData,
    jobData,
    serviceTypesData,
    otherServiceData,
    wasteCollectionData,
    serviceItemData,
}: SeedData) {
    // Clear existing data
    await client.job.deleteMany();
    await client.wasteCollection.deleteMany();
    await client.driver.deleteMany();
    await client.company.deleteMany();
    await client.serviceType.deleteMany();
    await client.otherService.deleteMany();
    await client.serviceItem.deleteMany();

    // Create companies first
    await client.company.createMany({
        data: companyData,
    });

    // Create drivers
    await client.driver.createMany({
        data: driverData,
    });

    // Create jobs last (since they depend on companies)
    await client.job.createMany({
        data: jobData,
    });

    // Create service type/options
    await client.serviceType.createMany({
        data: serviceTypesData,
    });

    // Create waste collection
    await client.wasteCollection.createMany({
        data: wasteCollectionData,
    });
    // Create service Item
    await client.serviceItem.createMany({
        data: serviceItemData,
    });

    // Create other service
    await client.otherService.createMany({
        data: otherServiceData,
    });
}

export default seed;
