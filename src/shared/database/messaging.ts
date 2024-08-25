import { initializeApp } from "firebase/app";
import type { FirebaseOptions } from "firebase/app";
import { getDatabase, ref, set as firebaseSet } from "firebase/database";
import type { Database as FirebaseDatabase } from "firebase/database";

class Messaging {
  private database: FirebaseDatabase;

  constructor(options: FirebaseOptions) {
    const app = initializeApp(options);
    this.database = getDatabase(app);
  }

  set = ({ path, data }: { path: string; data: unknown }) => {
    firebaseSet(ref(this.database, path), data);
  };
}

export default Messaging;
