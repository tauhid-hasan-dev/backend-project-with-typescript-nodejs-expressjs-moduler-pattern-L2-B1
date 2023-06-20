import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, /* prettyPrint ,*/ printf  } = format;
import path from 'path'

const myFormat = printf(({ level, message, label, timestamp }) => {
    const date = new Date(timestamp);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${date.toDateString()} ${hour}:${minutes}:${seconds} [${label}] ${level}: ${message}`;
  });

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'SUCCESS-COW-HUT-SUCCESS!' }),
    timestamp(),
    myFormat,
    /* prettyPrint(), */
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({ 
        filename: path.join(
            process.cwd(),
            'logs',
            'winston',
            'success.log',
        ), 
        level: 'info' }),
  ],
});


const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'ERROR-COW-HUT-ERROR!' }),
    timestamp(),
    myFormat,
   /*  prettyPrint(), */
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({ 
        filename: path.join(
            process.cwd(),
            'logs',
            'winston',
            'error.log',
        ), 
        level: 'error' }),
  ],
});

export {logger, errorLogger}