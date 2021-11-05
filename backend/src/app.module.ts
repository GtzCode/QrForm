import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { GraphqlModule } from './graphql/graphql.module';
import { OptionsModule } from './modules/options/options.module';
import { CompaniesModule } from './modules/companies/companies.module';

@Module({
    imports: [
        ConfigModule,
        DatabaseModule,
        GraphqlModule,
        OptionsModule,
        CompaniesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    static port: number | string;
    constructor(private readonly _configService: ConfigService) {
        AppModule.port = this._configService.get(Configuration.PORT);
    }
}
