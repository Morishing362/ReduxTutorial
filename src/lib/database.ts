import * as sqlite from 'sqlite3';

const sqlite3 = sqlite.verbose();
/*  */
export const database: sqlite.Database = new sqlite3.Database('../../../db/database.sqlite3', () => { });