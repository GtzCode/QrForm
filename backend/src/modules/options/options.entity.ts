import {BaseEntity, Column, UpdateDateColumn, Entity,PrimaryGeneratedColumn} from 'typeorm';
import {Field,InputType} from '@nestjs/graphql';

@Entity('OPTIONS')
@InputType()
export class Option extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @Field()
    @Column({type:'varchar', unique:true}) 
    KEYWORD: string;

    @Field()
    @Column({type:'varchar', nullable:true}) 
    DESC1: string;

    @Field()
    @Column({type:'varchar',nullable:true})
    DESC2: string;

    @Field()
    @Column({type:'varchar',nullable:true})
    DESC3: string;

    @Field()
    @Column({type:'int',nullable:true})
    VAL1: number;

    @Field()
    @Column({type:'int',nullable:true})
    VAL2: number;

    @Field()
    @UpdateDateColumn()
    UPDATEDATE: Date;

}