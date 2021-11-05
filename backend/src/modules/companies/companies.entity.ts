import {BaseEntity, Column, UpdateDateColumn, Entity,PrimaryGeneratedColumn} from 'typeorm';
import {Field,InputType} from '@nestjs/graphql';

@Entity('COMPANIES')
@InputType()
export class Companies extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @Field()
    @Column({type:'varchar'}) 
    COMPANY: string;

    @Field()
    @Column({type:'varchar'}) 
    NAME: string;

    @Field()
    @Column({type:'varchar',nullable:true})
    JOB: string;

    @Field()
    @Column({type:'varchar'})
    EMAIL: string;

    @Field()
    @Column({type:'varchar',nullable:true})
    PHONE: string;

    @Field()
    @Column({type:'varchar',nullable:true})
    ADDRESS: string;

    @Field()
    @Column({type:'varchar',nullable:true})
    COUNTRY: string;

    @Field()
    @Column({type:'varchar',nullable:true})
    STATE: string;

    @Field()
    @Column({type:'varchar',nullable:true})
    CITY: string;

    @Field()
    @Column({type:'text',nullable:true})
    NOTES: string;

    @Field()
    @UpdateDateColumn()
    UPDATEDATE: Date;

}