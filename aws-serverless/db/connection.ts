import { PrismaClient } from "@prisma/client";

let url = "";

if (process.env.NODE_ENV === "production") {
    url = process.env.DATABASE_URL_PROD || "";
} else {
    url = process.env.DATABASE_URL || "";
}

const buildClient = () => {
    const prisma = new PrismaClient({ datasources: { db: { url } } });
    return prisma;
};

const client = buildClient();

export default client;
