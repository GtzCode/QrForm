import { gql } from '@apollo/client';
import client from '../../apollo-client';

export async function initDataDisplay() {
    const { loading, error, data } = await client.query({
        query: gql`
            query {
                allCompanies {
                    ID
                    COMPANY
                    NAME
                    JOB
                    EMAIL
                    PHONE
                    ADDRESS
                    COUNTRY
                    STATE
                    CITY
                    NOTES
                }
            }
        `
    });

    return data;
}

export const DEL_COMANY = gql`
    mutation delCompany($id: Float!) {
        DeleteCompany(id: $id) {
            ID
            COMPANY
            NAME
            JOB
            EMAIL
            PHONE
            ADDRESS
            COUNTRY
            STATE
            CITY
            NOTES
        }
    }
`;
