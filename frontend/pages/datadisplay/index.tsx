import React, { useState,useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { tpCompany } from '../../interfaces/company';
import Layout from '../../components/Layout';
import CardCompany from '../../components/datadisplay/CardCompany';
import {initDataDisplay,DEL_COMANY} from '../../graphql/datadisplay/datadisplay';
import { useAlert } from '../../hooks/useAlert';


export default function DataDisplay(props:any) {

    const [vhCompany, setCompany] = useState<tpCompany[]>(
        Object.values(props.vlData)
    );
    const [delCompany] = useMutation(DEL_COMANY);
    const { vhAlert, BuildAlert, DelAlert } = useAlert(null);


    const fbDeleteCompany = async (vpid: number) => {
        var vlDataDel: tpCompany[] = (
            await delCompany({
                variables: { id: vpid }
            })
        ).data.DeleteCompany;

        if (vlDataDel) {
            setCompany([]);
            setCompany(vlDataDel);
            BuildAlert({ type: 'success', title: 'Deleted company' });
        } else {
            BuildAlert({ type: 'danger', title: 'Cannot delete company' });
        }
    };

    return (
        <Layout title="Companies">
            {vhAlert}
            <div className="row p-3">
                <div className="col-12">
                    {vhCompany.map((element: tpCompany) => (
                        <CardCompany
                            vpCompany={element}
                            fbDeleteCompany={fbDeleteCompany}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps () {
    const vlRequest = initDataDisplay();
    const vlData = await vlRequest.then((res) => {
        return res.allCompanies;
    });

    return  {props:{vlData}};
};
