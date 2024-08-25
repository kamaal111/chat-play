import { PrismaClient } from "@prisma/client";

import { Messaging } from "../../shared/database";
import settings from "./settings";

class Database {
  messaging: Messaging;
  user: PrismaClient["user"];

  constructor() {
    const prisma = new PrismaClient();
    this.user = prisma.user;
    this.messaging = new Messaging(settings.firebase);
  }
}

export default Database;
