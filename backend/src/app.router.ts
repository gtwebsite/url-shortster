import express from "express";
import type { Request, Response } from "express";
import type { Application, ApplicationCreateArgs } from "../../types";
import { ApplicationDataStore } from "./app.datastore";

export const applicationRouter = express.Router();

export const datastore = new ApplicationDataStore();

applicationRouter.post(
  "/submit",
  async (
    req: Request<any, any, ApplicationCreateArgs>,
    res: Response<Application | null>
  ) => {
    try {
      const args = req.body;
      const newSubmission = datastore.submit(args);

      res.status(200).send(newSubmission);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

applicationRouter.get(
  "/:shortCode",
  async (
    req: Request<{ shortCode: string }>,
    res: Response<Application | null>
  ) => {
    try {
      const app = datastore.getByShortcode(req.params.shortCode);
      res.status(200).send(app);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

applicationRouter.get(
  "/:shortCode/stats",
  async (
    req: Request<{ shortCode: string }>,
    res: Response<Application | null>
  ) => {
    try {
      const stat = datastore.getStatByShortcode(req.params.shortCode);

      res.status(200).send(stat);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
