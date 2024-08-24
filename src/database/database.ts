import { initializeApp } from "firebase/app";
import { getDatabase, ref, set as firebaseSet } from "firebase/database";
import type { Database as FirebaseDatabase } from "firebase/database";

import { firebaseConfig } from "../config";

class Database {
  private database: FirebaseDatabase;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.database = getDatabase(app);
  }

  set = ({ path, data }: { path: string; data: unknown }) => {
    firebaseSet(ref(this.database, path), data);
  };
}

const database = new Database();

export default database;
