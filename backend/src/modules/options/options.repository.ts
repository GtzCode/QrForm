import { EntityRepository, Repository} from 'typeorm';
import {Option} from './options.entity';

@EntityRepository(Option)
export class OptionRepository extends Repository<Option> {}