/*
  Warnings:

  - You are about to drop the column `followers` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `hashedPassword` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `registeredAt` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `followers`,
    DROP COLUMN `hashedPassword`,
    DROP COLUMN `isActive`,
    DROP COLUMN `registeredAt`;
