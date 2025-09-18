import { Database } from "./Database";

export class MongoDatabase implements Database {
  connect() {
    console.log("Connected to MongoDB");
  }
}
