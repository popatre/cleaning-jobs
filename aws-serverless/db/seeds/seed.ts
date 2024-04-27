import client from "../connection";
import { Company, Driver } from "@prisma/client";

type SeedData = {
    companyData: Company[];
    driverData: Driver[];
};

async function seed({ companyData, driverData }: SeedData) {
    await client.company.deleteMany();
    await client.driver.deleteMany();

    await client.company.createMany({
        data: companyData,
    });

    await client.driver.createMany({
        data: driverData,
    });
}

export default seed;
