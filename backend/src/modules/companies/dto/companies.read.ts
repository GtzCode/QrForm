import {InputType,IntersectionType,ObjectType,OmitType,PartialType} from '@nestjs/graphql';
import { Companies as InputCompanies } from '../companies.entity';

@InputType()
export class ReadCompaniesInput extends PartialType(
    OmitType(InputCompanies, ['UPDATEDATE'] as const),
    InputType,
) {}

@ObjectType()
export class ReadCompaniesObject extends PartialType(InputCompanies,ObjectType) {}


