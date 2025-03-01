import client from "../connection";
import { Company, Driver, Job, ServiceType } from "@prisma/client";

type SeedData = {
    companyData: Company[];
    driverData: Driver[];
    jobData: Job[];
    serviceTypesData: ServiceType[];
};

async function seed({
    companyData,
    driverData,
    jobData,
    serviceTypesData,
}: SeedData) {
    // Clear existing data
    await client.job.deleteMany();
    await client.driver.deleteMany();
    await client.company.deleteMany();
    await client.serviceType.deleteMany();

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
}

export default seed;
