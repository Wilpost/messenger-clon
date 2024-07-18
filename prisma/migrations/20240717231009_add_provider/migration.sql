/*
  Warnings:

  - You are about to drop the column `provider_AccountId` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `conversation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Account_provider_provider_AccountId_key` ON `account`;

-- AlterTable
ALTER TABLE `account` DROP COLUMN `provider_AccountId`,
    ADD COLUMN `providerAccountId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `conversation` DROP COLUMN `updateAt`;

-- CreateIndex
CREATE UNIQUE INDEX `Account_provider_providerAccountId_key` ON `Account`(`provider`, `providerAccountId`);
