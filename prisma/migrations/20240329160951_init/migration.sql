-- CreateTable
CREATE TABLE "Company" (
    "CompanyID" SERIAL NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "ContactPerson" TEXT NOT NULL,
    "ContactEmail" TEXT NOT NULL,
    "ContactPhone" TEXT NOT NULL,
    "Address" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("CompanyID")
);

-- CreateTable
CREATE TABLE "Driver" (
    "DriverID" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "ContactPhone" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("DriverID")
);

-- CreateTable
CREATE TABLE "Job" (
    "JobID" SERIAL NOT NULL,
    "CompanyID" INTEGER NOT NULL,
    "DriverID" INTEGER NOT NULL,
    "JobDescription" TEXT NOT NULL,
    "ScheduledDate" TIMESTAMP(3) NOT NULL,
    "Status" TEXT NOT NULL,
    "DateCompleted" TIMESTAMP(3),

    CONSTRAINT "Job_pkey" PRIMARY KEY ("JobID")
);

-- CreateTable
CREATE TABLE "Task" (
    "TaskID" SERIAL NOT NULL,
    "JobID" INTEGER NOT NULL,
    "Task" TEXT NOT NULL,
    "Notes" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("TaskID")
);

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_CompanyID_fkey" FOREIGN KEY ("CompanyID") REFERENCES "Company"("CompanyID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_DriverID_fkey" FOREIGN KEY ("DriverID") REFERENCES "Driver"("DriverID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_JobID_fkey" FOREIGN KEY ("JobID") REFERENCES "Job"("JobID") ON DELETE RESTRICT ON UPDATE CASCADE;
