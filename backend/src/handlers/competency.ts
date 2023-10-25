import express from "express";
import cors from "cors";
import { competency_search } from "../models/competency";

import dotenv from "dotenv";
dotenv.config();

const competency_search_tool = new competency_search();

// const index = async (_req: express.Request, res: express.Response) => {
//   try {
//     const courses = await competency_search_tool.index();
//     res.json(courses);
//   } catch (err) 
//   {
//     res.status(400);
//     res.json(err);
//    }

// };

const show = async (req: express.Request, res: express.Response) =>
{
    try
    {
        console.log(req.query.competency);
        const courses = await competency_search_tool.show(req.query.competency as string);
        res.json(courses);
    }
    catch (err) 
    {

        res.status(400);
        res.json(err);
    }

};


const competency_routes = (app: express.Application) =>
{
    // GET - INDEX
    //   app.get("/courses", index);

    // GET - SHOW
    app.use(cors());

    app.get("/courses", show);
};

export default competency_routes;
