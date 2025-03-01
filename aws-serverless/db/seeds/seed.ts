import client from "../connection";
import { Company, Driver, Job } from "@prisma/client";

type SeedData = {
    companyData: Company[];
    driverData: Driver[];
    jobData: Job[];
};

async function seed({ companyData, driverData, jobData }: SeedData) {
    // Clear existing data
    await client.job.deleteMany();
    await client.driver.deleteMany();
    await client.company.deleteMany();

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
}

export default seed;
