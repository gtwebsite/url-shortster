import { v4 as uuid } from "uuid";
import { generateShortCode } from "./utils/generateShortCode";
import type { Application, ApplicationCreateArgs } from "../../types";

export class ApplicationDataStore {
  private data = new Map<string, Application>();

  submit(args?: ApplicationCreateArgs): Application[] | null {
    if (args?.shortCode) {
      if (this.data.has(args?.shortCode)) {
        throw new Error("Shortcode already exist.");
      }

      if (args?.shortCode.length < 4) {
        throw new Error("Shortcode only accept minimum of 4 characters");
      }
    }

    const id = uuid();
    const shortCode = args?.shortCode || generateShortCode();
    const dateCreated = new Date().toISOString();

    const newData = {
      id,
      shortCode,
      dateCreated,
    } as Application;

    this.data.set(shortCode, newData);

    return [...this.data.values()];
  }

  getByShortcode(shortCode: string): Application {
    if (!this.data.has(shortCode)) {
      throw new Error("Shortcode does not exist.");
    }

    const oldData = this.data.get(shortCode);
    const dateLastAccessed = new Date().toISOString();
    const count = (oldData?.count || 0) + 1;

    const newData = {
      ...oldData,
      dateLastAccessed,
      count,
    } as Application;

    this.data.set(shortCode, newData);

    return newData;
  }

  getStatByShortcode(shortCode: string): Application {
    if (!this.data.has(shortCode)) {
      throw new Error("Shortcode does not exist.");
    }

    return this.data.get(shortCode) as Application;
  }
}
