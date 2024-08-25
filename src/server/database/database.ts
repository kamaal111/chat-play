import { Messaging } from "../../shared/database";
import settings from "./settings";

class Database {
  messaging: Messaging;

  constructor() {
    this.messaging = new Messaging(settings.firebase);
  }
}

export default Database;
