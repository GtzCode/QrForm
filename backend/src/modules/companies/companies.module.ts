import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesRepository } from './companies.repository';
import { CompaniesResolver } from './companies.resolver';

@Module({
    imports:[TypeOrmModule.forFeature([CompaniesRepository]),CompaniesResolver]
})
export class CompaniesModule {}
