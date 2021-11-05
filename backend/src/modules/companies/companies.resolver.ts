import { Query, Args, Resolver, Mutation, ID } from '@nestjs/graphql';
import { getManager } from 'typeorm';
import { Companies as ettCompany } from './companies.entity';
import { ReadCompaniesObject as tpCompany } from './dto/companies.read';
import { ReadCompaniesInput as tpCompanyI } from './dto/companies.read';
import { CreateCompanyInput as tpCompanyC } from './dto/companies.create';
import { UpdateCompanyInput as tpCompanyU} from './dto/companies.update';
import { tpOptionsObj } from '../../shared/options/options.dto';
import { OptionsResolver } from '../options/options.resolver';


@Resolver()
export class CompaniesResolver {


    @Mutation(() => tpCompany)
    async CreateCompany(
        @Args('data', { type: () => tpCompanyC })
        data: tpCompanyC,
    ) {
        const newItem = ettCompany.create(data);
        await newItem.save();
        return newItem;
    }

    @Mutation(() => tpCompany)
    async UpdateCompany(
        @Args('id')
        id: number,
        @Args('data', { type: () => tpCompanyU })
        data: tpCompanyU,
    ) {
        await ettCompany.update(id, {...data});
        const newItem = await ettCompany.findOne(id);
        return newItem;
    }

    @Mutation(() => [tpCompany])
    async DeleteCompany(
        @Args('id')
        id: number,
    ) {
        await ettCompany.delete(id);
        const newListItems = await this.allCompanies();
        return newListItems;
    }


    @Query(() => [tpCompany])
    async allCompanies() {
        return await ettCompany.find({order: {ID:'DESC'}});
    }

    @Query(() => tpCompany)
    async oneCompanies(
        @Args('id')
        id: number,
    ) {
        return await ettCompany.findOne(id);
    }

    @Query(() => [tpCompany])
    Companies(
        @Args('data', { type: () => tpCompanyI })
        data: tpCompanyI,
    ) {
        return ettCompany.find({...data});
    }


    @Mutation(() => tpCompany)
    async OrderDataQR(
        @Args('vpQrText')
        vpQrText: string,
    ) {

        const entityManager = getManager();
        const Qry = `SELECT IFNULL(DESC1,VAL2) DESC FROM OPTIONS
                        WHERE KEYWORD IN ('CHAR','COMPANY',
                        'NAME',     'JOB', 'EMAIL',
                        'PHONE','ADDRESS','COUNTRY',
                        'STATE','CITY','NOTES')
                        ORDER BY KEYWORD;`;
        const vlArray = await entityManager.query(Qry);
        
        var vlOptionsOrder:tpOptionsObj = {
            ADDRESS    :vlArray[0].DESC,
            CHAR       :vlArray[1].DESC,
            CITY       :vlArray[2].DESC,
            COMPANY    :vlArray[3].DESC,
            COUNTRY    :vlArray[4].DESC,
            EMAIL      :vlArray[5].DESC,
            JOB        :vlArray[6].DESC,
            NAME       :vlArray[7].DESC,
            NOTES      :vlArray[8].DESC,
            PHONE      :vlArray[9].DESC,
            STATE      :vlArray[10].DESC,
        }


        const vlDataQR = vpQrText.split(vlOptionsOrder.CHAR);
        var vlData:tpCompany = {NOTES:''}



        for (var i = 0; i < vlDataQR.length; i++) {

            var vlIndex: number = i + 1;

            switch (vlIndex) {
                case vlOptionsOrder.COMPANY:
                    vlData.COMPANY = vlDataQR[i].trim();
                    break;
                case vlOptionsOrder.NAME:
                    vlData.NAME = vlDataQR[i].trim();
                    break;
                case vlOptionsOrder.JOB:
                    vlData.JOB = vlDataQR[i].trim();
                    break;

                case vlOptionsOrder.EMAIL:
                    vlData.EMAIL = vlDataQR[i].trim();
                    break;

                case vlOptionsOrder.PHONE:
                    vlData.PHONE = vlDataQR[i].trim();
                    break;

                case vlOptionsOrder.ADDRESS:
                    vlData.ADDRESS = vlDataQR[i].trim();
                    break;

                case vlOptionsOrder.COUNTRY:
                    vlData.COUNTRY = vlDataQR[i].trim();
                    break;

                case vlOptionsOrder.STATE:
                    vlData.STATE = vlDataQR[i].trim();
                    break;

                case vlOptionsOrder.CITY:
                    vlData.CITY = vlDataQR[i].trim();
                    break;

                default:
                    vlData.NOTES = vlData.NOTES.trim() + ' ' + vlDataQR[i].trim();
                    break;
            }
        }

        return vlData;

    }


}