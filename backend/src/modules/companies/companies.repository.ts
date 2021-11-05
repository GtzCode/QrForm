import { EntityRepository, Repository} from 'typeorm';
import {Companies} from './companies.entity';

@EntityRepository(Companies)
export class CompaniesRepository extends Repository<Companies> {}