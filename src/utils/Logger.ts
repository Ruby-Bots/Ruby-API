import "dotenv/config";
import { createLogger, format, transports, addColors } from "winston";
const { combine, printf } = format;
import chalk from "chalk";

const labelToColor = {
  INFO: `${chalk.cyanBright(`{{label}}`)}`,
  WARN: `${chalk.yellowBright(`{{label}}`)}`,
  ERROR: `${chalk.redBright(`{{label}}`)}`,
  HTTP: `${chalk.greenBright(`{{label}}`)}`,
  VERBOSE: `${chalk.blueBright(`{{label}}`)}`,
  SILLY: `${chalk.yellowBright(`{{label}}`)}`,
  DEBUG: `${chalk.cyanBright(`{{label}}`)}`,
};

export interface LabelToColor {
  INFO: string;
  WARN: string;
  ERROR: string;
  HTTP: string;
  VERBOSE: string;
  SILLY: string;
  DEBUG: string;
}

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `[${chalk.redBright("RubyBots")}${chalk.gray(`.co`)}] [${labelToColor[(label as keyof LabelToColor)].replace("{{label}}", label)}] (${timestamp}) ${message}`;
});

const myCustomLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  colours: {
    error: `bold red`,
    warn: `bold yellow`,
    info: `bold blue`,
    http: `bold white`,
    verbose: `bold green`,
    debug: `bold cyan`,
    silly: `bold gray`,
  },
};

addColors(myCustomLevels.colours);
export default createLogger({
  levels: myCustomLevels.levels,
  format: combine(
    format.colorize(),
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    myFormat
  ),
  transports: [new transports.Console()],
});
