import { Logger } from "./Logger";

function main() {
  const logger1 = Logger.getInstance();
  logger1.log("App started");

  const logger2 = Logger.getInstance();
  logger2.log("User logged in");

  console.log("Are logger1 and logger2 the same?", logger1 === logger2);
  console.log("All logs:", logger1.getLogs());
}

main();
