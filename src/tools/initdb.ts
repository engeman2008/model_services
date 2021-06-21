/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import dotenv from 'dotenv';
import fs from 'fs-extra';
import * as path from 'path';
import { Client } from 'pg';

const init = async () => {
  // read environment variables
  dotenv.config();
  // create an instance of the PostgreSQL client
  const client = new Client();
  try {
    // connect to the local database server
    await client.connect();
    // read the contents of the initdb.pgsql file
    const filePath = path.join(process.cwd(), 'src/tools/initdb.pgsql');
    const sql = await fs.readFile(filePath, { encoding: 'UTF-8' });
    // split the file into separate statements
    const statements = sql.split(/;\s*$/m);
    console.log(statements);
    for (const statement of statements) {
      if (statement.length > 3) {
        // execute each of the statements
        await client.query(statement);
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    // close the database client
    await client.end();
  }
};

init().then(() => {
  console.log('finished');
}).catch((error) => {
  console.log('finished with errors');
  console.log(error);
});
