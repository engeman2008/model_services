"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const path = tslib_1.__importStar(require("path"));
const pg_1 = require("pg");
const init = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // read environment variables
    dotenv_1.default.config();
    // create an instance of the PostgreSQL client
    const client = new pg_1.Client();
    try {
        // connect to the local database server
        yield client.connect();
        // read the contents of the initdb.pgsql file
        const filePath = path.join(process.cwd(), 'src/tools/initdb.pgsql');
        const sql = yield fs_extra_1.default.readFile(filePath, { encoding: 'UTF-8' });
        // split the file into separate statements
        const statements = sql.split(/;\s*$/m);
        for (const statement of statements) {
            if (statement.length > 3) {
                // execute each of the statements
                yield client.query(statement);
            }
        }
    }
    catch (err) {
        console.log(err);
        throw err;
    }
    finally {
        // close the database client
        yield client.end();
    }
});
init().then(() => {
    console.log('finished');
}).catch((error) => {
    console.log(error);
});
