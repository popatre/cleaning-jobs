export const jobData = [
    {
        jobID: 1,
        companyID: 1,
        driverID: 1,
        jobDescription: "Empty bins",
        scheduledDate: new Date(2024, 3, 27, 12, 32),
        status: "active",
        dateCompleted: null,
    },
    {
        jobID: 2,
        companyID: 1,
        driverID: 2,
        jobDescription: "Empty toilet",
        scheduledDate: new Date(2024, 3, 27, 12, 32),
        status: "complete",
        dateCompleted: null,
    },
    {
        jobID: 3,
        companyID: 2,
        driverID: 1,
        jobDescription: "Install soap",
        scheduledDate: new Date(2024, 3, 27, 12, 32),
        status: "inactive",
        dateCompleted: null,
    },
    {
        jobID: 4,
        companyID: 3,
        driverID: 3,
        jobDescription: "Remove rubbish",
        scheduledDate: new Date(2024, 3, 27, 12, 32),
        status: "active",
        dateCompleted: null,
    },
];

// model Job {
//     jobID           Int       @id @default(autoincrement())
//     companyID       Int
//     driverID        Int
//     jobDescription  String
//     scheduledDate   DateTime
//     status          String
//     dateCompleted   DateTime?
//     tasks           Task[]
//   }
