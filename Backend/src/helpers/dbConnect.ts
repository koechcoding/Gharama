import mssql from "mssql";
import { sqlConfig } from "../Config";

class Connection {
  private pool: Promise<mssql.ConnectionPool>;
  constructor() {
    this.pool = mssql.connect(sqlConfig);
  }

  //adding inputs
  createRequest = (request: mssql.Request, data: { [x: string]: string | Boolean; }) => {
    const keys = Object.keys(data);

    keys.map((keyname) => {
      request.input(keyname, data[keyname]);
    });
  };

  //exec
  execute = async (
    storedProcedure: string,
    data: { [x: string]: string | Boolean }
  ) => {
    let request = await (await this.pool).request();
    let requestobj = this.createRequest(request, data);
    let result = await (await request.execute(storedProcedure)).recordset;
    return result;
  };
  async query(queryString: string) {
    return await (await this.pool).request().query(queryString);
  }
}

export const db = new Connection();
