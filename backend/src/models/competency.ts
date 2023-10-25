import client from "../database";


export class competency_search {
//   async index(): Promise<string[]> {
//     try {
//       const conn = await client.connect();
//       const sql = "SELECT * from arch;";
//       const result = await conn.query(sql);
//       conn.release();
//       return result.rows;
//     } catch (err) {
//       throw new Error(`Cannot get: ${err}`);
//     }
//   }

  async show(competency: string): Promise<string[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT course_name FROM arch WHERE inquisitive_spirit LIKE '%${competency}%';`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`unable to get: ${err}`);
    }
  }

 
}
