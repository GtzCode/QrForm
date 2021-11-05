import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { Companies as InputCompanies } from '../companies.entity';

@InputType()
export class UpdateCompanyInput extends PartialType(
    OmitType(InputCompanies, ['ID', 'UPDATEDATE'] as const),
    InputType,
) {}
