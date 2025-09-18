export class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const time = new Date().toISOString();
    this.logs.push(`[${time}] ${message}`);
    console.log(`[LOG]: ${message}`);
  }

  public getLogs(): string[] {
    return this.logs;
  }
}
