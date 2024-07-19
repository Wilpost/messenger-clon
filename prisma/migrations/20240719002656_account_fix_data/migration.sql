-- AlterTable
ALTER TABLE `account` ADD COLUMN `access_token` TEXT NULL,
    ADD COLUMN `id_token` TEXT NULL,
    ADD COLUMN `scope` VARCHAR(191) NULL,
    ADD COLUMN `type` VARCHAR(191) NULL,
    MODIFY `refresh_token` TEXT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `email_verified` BOOLEAN NULL;
