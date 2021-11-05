import { Options } from './type/options.type';
import {Field, ObjectType,PartialType,InputType} from '@nestjs/graphql';

@ObjectType() 
export class tpOptionsObj extends PartialType(Options, ObjectType){}

@InputType() 
export class tpOptionsInp extends PartialType(Options, InputType){}