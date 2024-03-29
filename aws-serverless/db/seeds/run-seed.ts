import client from "../connection";
import * as data from "../data/test-data/index";
import seed from "./seed";

async function runSeed() {
    try {
        await seed(data);
        await client.$disconnect();
        console.log("seeded successfully");
    } catch (error) {
        console.error(error, "ERROR");
        await client.$disconnect();
    }
}

runSeed();
