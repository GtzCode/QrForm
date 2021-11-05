import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1617412837438 implements MigrationInterface {
    name = 'firstMigration1617412837438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "OPTIONS" ("ID" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "KEYWORD" varchar NOT NULL, "DESC1" varchar, "DESC2" varchar, "DESC3" varchar, "VAL1" integer, "VAL2" integer, "UPDATEDATE" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_6d9bce5324f7b6ced44e7fdaf32" UNIQUE ("KEYWORD"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "OPTIONS"`);
    }

}
