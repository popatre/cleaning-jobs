import client from "../connection";
import { Company, Driver, Job } from "@prisma/client";

type SeedData = {
    companyData: Company[];
    driverData: Driver[];
    jobData: Job[];
};

async function seed({ companyData, driverData, jobData }: SeedData) {
    await client.job.deleteMany();
    await client.company.deleteMany();
    await client.driver.deleteMany();

    await client.job.createMany({
        data: jobData,
    });

    await client.company.createMany({
        data: companyData,
    });

    await client.driver.createMany({
        data: driverData,
    });
}

export default seed;
