/*
  Warnings:

  - You are about to drop the column `userId` on the `conversation` table. All the data in the column will be lost.
  - You are about to drop the `messagerelationconversations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userrelationconversations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userrelationseenmessages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `messagerelationconversations` DROP FOREIGN KEY `MessageRelationConversations_conversationId_fkey`;

-- DropForeignKey
ALTER TABLE `messagerelationconversations` DROP FOREIGN KEY `MessageRelationConversations_messageId_fkey`;

-- DropForeignKey
ALTER TABLE `userrelationconversations` DROP FOREIGN KEY `UserRelationConversations_conversationId_fkey`;

-- DropForeignKey
ALTER TABLE `userrelationconversations` DROP FOREIGN KEY `UserRelationConversations_userId_fkey`;

-- DropForeignKey
ALTER TABLE `userrelationseenmessages` DROP FOREIGN KEY `UserRelationSeenMessages_seenMessageId_fkey`;

-- DropForeignKey
ALTER TABLE `userrelationseenmessages` DROP FOREIGN KEY `UserRelationSeenMessages_userId_fkey`;

-- AlterTable
ALTER TABLE `conversation` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `image` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `messagerelationconversations`;

-- DropTable
DROP TABLE `userrelationconversations`;

-- DropTable
DROP TABLE `userrelationseenmessages`;

-- CreateTable
CREATE TABLE `UserSeenMessage` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `messageId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_users` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_users_AB_unique`(`A`, `B`),
    INDEX `_users_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ConversationToMessage` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ConversationToMessage_AB_unique`(`A`, `B`),
    INDEX `_ConversationToMessage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserSeenMessage` ADD CONSTRAINT `UserSeenMessage_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSeenMessage` ADD CONSTRAINT `UserSeenMessage_messageId_fkey` FOREIGN KEY (`messageId`) REFERENCES `Message`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_users` ADD CONSTRAINT `_users_A_fkey` FOREIGN KEY (`A`) REFERENCES `Conversation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_users` ADD CONSTRAINT `_users_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConversationToMessage` ADD CONSTRAINT `_ConversationToMessage_A_fkey` FOREIGN KEY (`A`) REFERENCES `Conversation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConversationToMessage` ADD CONSTRAINT `_ConversationToMessage_B_fkey` FOREIGN KEY (`B`) REFERENCES `Message`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
