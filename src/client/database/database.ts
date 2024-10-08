import settings from "./settings";
import { Messaging } from "../../shared/database";

class Database {
  messaging: Messaging;

  constructor() {
    this.messaging = new Messaging(settings.firebase);
  }
}

const database = new Database();

export default database;
