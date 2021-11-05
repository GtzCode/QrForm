import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationCompanies1618972671960 implements MigrationInterface {
    name = 'migrationCompanies1618972671960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "COMPANIES" ("ID" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "COMPANY" varchar NOT NULL, "NAME" varchar NOT NULL, "JOB" varchar, "EMAIL" varchar NOT NULL, "PHONE" varchar, "ADDRESS" varchar, "COUNTRY" varchar, "STATE" varchar, "CITY" varchar, "NOTES" text, "UPDATEDATE" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "COMPANIES"`);
    }

}
