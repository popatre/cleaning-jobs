import client from "../connection";
import { Company } from "@prisma/client";

type SeedData = {
    companyData: Company[];
};

async function seed({ companyData }: SeedData) {
    await client.company.deleteMany();

    await client.company.createMany({
        data: companyData,
    });
}

export default seed;
