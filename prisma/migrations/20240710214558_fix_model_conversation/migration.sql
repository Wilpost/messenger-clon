/*
  Warnings:

  - You are about to drop the `_conversationtomessage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `conversationId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_conversationtomessage` DROP FOREIGN KEY `_ConversationToMessage_A_fkey`;

-- DropForeignKey
ALTER TABLE `_conversationtomessage` DROP FOREIGN KEY `_ConversationToMessage_B_fkey`;

-- AlterTable
ALTER TABLE `message` ADD COLUMN `conversationId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_conversationtomessage`;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `Conversation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
