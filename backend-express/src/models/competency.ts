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
      const sql = `
      SELECT course_name 
      FROM arch 
      WHERE inquisitive_spirit LIKE '%${competency}%' 
      OR reasoning_interpretation LIKE '%${competency}%' 
      OR complex_problem_solving LIKE '%${competency}%' 
      OR creative_thinking LIKE '%${competency}%' 
      OR effective_communication LIKE '%${competency}%' 
      OR future_intelligence LIKE '%${competency}%' 
      OR building_managing_relationships LIKE '%${competency}%' 
      OR fostering_effective_collaboration LIKE '%${competency}%' 
      OR  social_interpersonal_communication LIKE '%${competency}%' 
      OR digital_fluency LIKE '%${competency}%' 
      OR prototyping_design LIKE '%${competency}%' 
      OR culture_identity_society LIKE '%${competency}%' 
      OR business_society LIKE '%${competency}%' 
      OR science_technology_society LIKE '%${competency}%' 
      OR self_awareness_self_management LIKE '%${competency}%' 
      OR resilience_grit LIKE '%${competency}%' 
      OR inquisitive_spirit LIKE '%${competency}%' 
      OR ethics_values LIKE '%${competency}%';`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`unable to get: ${err}`);
    }
  }

 
}
