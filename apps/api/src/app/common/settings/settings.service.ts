import { DB, Settings } from "@itsmillertimedev/data";
import { Injectable, Logger, OnApplicationBootstrap } from "@nestjs/common";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";

@Injectable()
export class SettingsService implements OnApplicationBootstrap {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  private readonly _logger = new Logger(SettingsService.name);
  private settings = null;

  // Called when the module is initialized, loads settings from the database
  onApplicationBootstrap() {
    this.loadSettings();
  }

  // Function to query the settings fron the DB
  async loadSettings() {
    const settingsDB = await this.db
      .selectFrom("Settings")
      .selectAll()
      .execute();

    // Object to hold the mapped out settings, where the key is the key from the DB
    const looped = {};
    for (let i = 0; i < settingsDB.length; i++) {
      looped[settingsDB[i]["key"]] = settingsDB[i]["value"];
    }
    this.settings = looped;
  }

  async getSetting(key: string): Promise<Settings["value"]> {
    if (this.settings === null) {
      await this.loadSettings();
    }
    return this.settings[key];
  }

  // @deprecated use getField instead
  async getFieldOld<T>(key: string, field): Promise<T> {
    const data = await this.getSetting(key);
    return data[field];
  }

  async getField(key: string, field: string): Promise<unknown> {
    const data = await this.getSetting(key);
    return data["fields"][field];
  }

  async getFieldValue<T>(key: string, field: string): Promise<T> {
    try {
      const setting = await this.getSetting(key);
      return setting["fields"][field]["value"] as T;
    } catch (error) {
      this._logger.error(`Unable to load setting value of ${field} for ${key}`);
    }
  }
}
