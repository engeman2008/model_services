/*
  Warnings:

  - A unique constraint covering the columns `[modelId]` on the table `Association` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[entityId]` on the table `Attribute` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[modelId]` on the table `Entity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Association_modelId_unique" ON "Association"("modelId");

-- CreateIndex
CREATE UNIQUE INDEX "Attribute_entityId_unique" ON "Attribute"("entityId");

-- CreateIndex
CREATE UNIQUE INDEX "Entity_modelId_unique" ON "Entity"("modelId");
