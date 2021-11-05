import { GraphQLModule } from '@nestjs/graphql';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';

export const graphqlProviders = [
    GraphQLModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService) {
            return {
                debug: true,
                playground: true,
                autoSchemaFile: true,
            };
        },
    }),
];
