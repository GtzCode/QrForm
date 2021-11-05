import {
    InputType,
    IntersectionType,
    OmitType,
    PartialType,
    PickType,
} from '@nestjs/graphql';
import { Companies as InputCompanies } from '../companies.entity';

@InputType()
export class CreateCompanyInput extends IntersectionType(
    PartialType(
        OmitType(InputCompanies, [
            'ID',
            'UPDATEDATE',
            'COMPANY',
            'NAME',
            'EMAIL',
        ] as const),
        InputType,
    ),
    PickType(InputCompanies, ['COMPANY', 'NAME', 'EMAIL'] as const),
    InputType,
) {}
