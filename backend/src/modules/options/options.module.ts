
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionRepository } from './options.repository';
import { OptionsResolver } from './options.resolver';


@Module({
    imports:[TypeOrmModule.forFeature([OptionRepository]),OptionsResolver]
})

export class OptionsModule {}
