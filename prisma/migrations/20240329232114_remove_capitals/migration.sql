/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Address` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `CompanyID` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `CompanyName` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `ContactEmail` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `ContactPerson` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `ContactPhone` on the `Company` table. All the data in the column will be lost.
  - The primary key for the `Driver` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ContactPhone` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `DriverID` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `FirstName` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `Driver` table. All the data in the column will be lost.
  - The primary key for the `Job` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CompanyID` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `DateCompleted` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `DriverID` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `JobDescription` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `JobID` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `ScheduledDate` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `Job` table. All the data in the column will be lost.
  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `JobID` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `Notes` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `Task` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `TaskID` on the `Task` table. All the data in the column will be lost.
  - Added the required column `address` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactEmail` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPerson` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPhone` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPhone` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyID` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `driverID` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobDescription` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduledDate` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobID` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_CompanyID_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_DriverID_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_JobID_fkey";

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "Address",
DROP COLUMN "CompanyID",
DROP COLUMN "CompanyName",
DROP COLUMN "ContactEmail",
DROP COLUMN "ContactPerson",
DROP COLUMN "ContactPhone",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "companyID" SERIAL NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "contactEmail" TEXT NOT NULL,
ADD COLUMN     "contactPerson" TEXT NOT NULL,
ADD COLUMN     "contactPhone" TEXT NOT NULL,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("companyID");

-- AlterTable
ALTER TABLE "Driver" DROP CONSTRAINT "Driver_pkey",
DROP COLUMN "ContactPhone",
DROP COLUMN "DriverID",
DROP COLUMN "FirstName",
DROP COLUMN "LastName",
ADD COLUMN     "contactPhone" TEXT NOT NULL,
ADD COLUMN     "driverID" SERIAL NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD CONSTRAINT "Driver_pkey" PRIMARY KEY ("driverID");

-- AlterTable
ALTER TABLE "Job" DROP CONSTRAINT "Job_pkey",
DROP COLUMN "CompanyID",
DROP COLUMN "DateCompleted",
DROP COLUMN "DriverID",
DROP COLUMN "JobDescription",
DROP COLUMN "JobID",
DROP COLUMN "ScheduledDate",
DROP COLUMN "Status",
ADD COLUMN     "companyID" INTEGER NOT NULL,
ADD COLUMN     "dateCompleted" TIMESTAMP(3),
ADD COLUMN     "driverID" INTEGER NOT NULL,
ADD COLUMN     "jobDescription" TEXT NOT NULL,
ADD COLUMN     "jobID" SERIAL NOT NULL,
ADD COLUMN     "scheduledDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD CONSTRAINT "Job_pkey" PRIMARY KEY ("jobID");

-- AlterTable
ALTER TABLE "Task" DROP CONSTRAINT "Task_pkey",
DROP COLUMN "JobID",
DROP COLUMN "Notes",
DROP COLUMN "Task",
DROP COLUMN "TaskID",
ADD COLUMN     "jobID" INTEGER NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "task" TEXT NOT NULL,
ADD COLUMN     "taskID" SERIAL NOT NULL,
ADD CONSTRAINT "Task_pkey" PRIMARY KEY ("taskID");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Company"("companyID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_driverID_fkey" FOREIGN KEY ("driverID") REFERENCES "Driver"("driverID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_jobID_fkey" FOREIGN KEY ("jobID") REFERENCES "Job"("jobID") ON DELETE RESTRICT ON UPDATE CASCADE;
