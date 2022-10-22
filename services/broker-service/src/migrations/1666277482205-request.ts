import { MigrationInterface, QueryRunner } from "typeorm";

export class request1666277482205 implements MigrationInterface {
    name = 'request1666277482205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Broker"."message_request" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "message" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_167d324701e6867f189aed52e18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "token" ON "Broker"."message_request" ("token") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "Broker"."token"`);
        await queryRunner.query(`DROP TABLE "Broker"."message_request"`);
    }

}
