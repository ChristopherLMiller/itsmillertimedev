-- CreateTable
CREATE TABLE "DiscordUserSetting" (
    "userId" TEXT NOT NULL,
    "meta" JSONB NOT NULL,

    CONSTRAINT "DiscordUserSetting_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordUserSetting_userId_key" ON "DiscordUserSetting"("userId");
