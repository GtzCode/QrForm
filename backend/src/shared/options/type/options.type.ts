import {Field,InputType,Float} from '@nestjs/graphql';

@InputType()
export class Options {

    @Field(() => Number)
    ADDRESS: number;

    @Field(() => String)
    CHAR: string;

    @Field(() => Number)
    CITY: number;

    @Field(() => Number)
    COMPANY: number;

    @Field(() => Number)
    COUNTRY: number;

    @Field(() => Number)
    EMAIL: number;

    @Field(() => Number)
    JOB:number;

    @Field(() => String)
    MYCOMPANY: string;

    @Field(() => Number)
    NAME: number;

    @Field(() => Number)
    NOTES: number;

    @Field(() => Number)
    PHONE: number;
    
    @Field(() => Number)
    STATE: number;

}
