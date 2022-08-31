/*
  Warnings:

  - You are about to drop the column `event` on the `students` table. All the data in the column will be lost.
  - Added the required column `events` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_students" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "events" TEXT NOT NULL
);
INSERT INTO "new_students" ("cpf", "email", "id", "name", "password") SELECT "cpf", "email", "id", "name", "password" FROM "students";
DROP TABLE "students";
ALTER TABLE "new_students" RENAME TO "students";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
