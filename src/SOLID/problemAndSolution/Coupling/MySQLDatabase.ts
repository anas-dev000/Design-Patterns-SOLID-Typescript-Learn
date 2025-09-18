import { Database } from "./Database";

export class MySQLDatabase implements Database {
  connect() {
    console.log("Connected to MySQL");
  }
}