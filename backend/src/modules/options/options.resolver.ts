import { Query, Args, Resolver, Mutation } from '@nestjs/graphql';
import { getManager } from 'typeorm';
import { Option as ettOption } from './options.entity';
import {tpOptionsObj, tpOptionsInp} from '../../shared/options/options.dto';

@Resolver()
export class OptionsResolver {

    @Mutation(() => tpOptionsObj)
    async UpdateOptions(
        @Args('data', { type: () => tpOptionsInp })
        data: tpOptionsObj,
    ) {

        if(data.ADDRESS   != null) {await ettOption.update({KEYWORD:'ADDRESS'   }, {VAL2:data.ADDRESS    });}
        if(data.CHAR      != null) {await ettOption.update({KEYWORD:'CHAR'      }, {DESC1:data.CHAR      });}
        if(data.CITY      != null) {await ettOption.update({KEYWORD:'CITY'      }, {VAL2:data.CITY       });}
        if(data.COMPANY   != null) {await ettOption.update({KEYWORD:'COMPANY'   }, {VAL2:data.COMPANY    });}
        if(data.COUNTRY   != null) {await ettOption.update({KEYWORD:'COUNTRY'   }, {VAL2:data.COUNTRY    });}
        if(data.EMAIL     != null) {await ettOption.update({KEYWORD:'EMAIL'     }, {VAL2:data.EMAIL      });}
        if(data.JOB       != null) {await ettOption.update({KEYWORD:'JOB'       }, {VAL2:data.JOB        });}
        if(data.MYCOMPANY != null) {await ettOption.update({KEYWORD:'MYCOMPANY' }, {DESC1:data.MYCOMPANY });}
        if(data.NAME      != null) {await ettOption.update({KEYWORD:'NAME'      }, {VAL2:data.NAME       });}
        if(data.NOTES     != null) {await ettOption.update({KEYWORD:'NOTES'     }, {VAL2:data.NOTES      });}
        if(data.PHONE     != null) {await ettOption.update({KEYWORD:'PHONE'     }, {VAL2:data.PHONE      });}
        if(data.STATE     != null) {await ettOption.update({KEYWORD:'STATE'     }, {VAL2:data.STATE      });}

        var vlObj = await this.allOptions();
        return vlObj;
    }



    @Query(() => tpOptionsObj)
    async allOptions() {
        const entityManager = getManager();
        const Qry = `SELECT IFNULL(DESC1,VAL2) DESC FROM OPTIONS
                        WHERE KEYWORD IN ('MYCOMPANY','CHAR','COMPANY',
                        'NAME',     'JOB', 'EMAIL',
                        'PHONE','ADDRESS','COUNTRY',
                        'STATE','CITY','NOTES')
                        ORDER BY KEYWORD;`;

        const vlArray = await entityManager.query(Qry);

        var vlObj:tpOptionsObj = {
            ADDRESS    :vlArray[0].DESC,
            CHAR       :vlArray[1].DESC,
            CITY       :vlArray[2].DESC,
            COMPANY    :vlArray[3].DESC,
            COUNTRY    :vlArray[4].DESC,
            EMAIL      :vlArray[5].DESC,
            JOB        :vlArray[6].DESC,
            MYCOMPANY  :vlArray[7].DESC,
            NAME       :vlArray[8].DESC,
            NOTES      :vlArray[9].DESC,
            PHONE      :vlArray[10].DESC,
            STATE      :vlArray[11].DESC,
        }

        return vlObj;
    }


    @Mutation(() => tpOptionsObj)
    async ResetOptions() {
        const entityManager = getManager();
        const Qry = `update OPTIONS set VAL2 = VAL1 
                    WHERE KEYWORD IN ('COMPANY',
                    'NAME' ,'JOB'    ,'EMAIL',
                    'PHONE','ADDRESS','COUNTRY',
                    'STATE','CITY'   ,'NOTES');`;

        const vlArray = await entityManager.query(Qry);
        var vlObj = await this.allOptions();
        return vlObj;



    }

    
}
