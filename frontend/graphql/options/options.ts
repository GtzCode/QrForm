import { gql, useMutation, useQuery } from '@apollo/client';
import client from '../../apollo-client';

export async function initOptions() {
    const { loading, error, data } = await client.query({
        query: gql`
            query getOptions {
                allOptions {
                    MYCOMPANY
                    CHAR
                    ADDRESS
                    CITY
                    COMPANY
                    COUNTRY
                    EMAIL
                    JOB
                    NAME
                    NOTES
                    PHONE
                    STATE
                }
            }
        `
    });

    return data;
}

export const GET_OPTIONS = gql`
query getOptions {
    allOptions {
        MYCOMPANY
        CHAR
        ADDRESS
        CITY
        COMPANY
        COUNTRY
        EMAIL
        JOB
        NAME
        NOTES
        PHONE
        STATE
    }
}
`;

export const PUT_OPTIONS = gql`
mutation putOptions ($data: tpOptionsInp!) {
    UpdateOptions(data: $data) {
        ADDRESS
        CHAR
        CITY
        COMPANY
        COUNTRY
        EMAIL
        MYCOMPANY
        NAME
        NOTES
        PHONE
        STATE
    }
}
`;

export const PUT_OPTIONS_RESET = gql`
mutation putOptionReset {
    ResetOptions{
        ADDRESS
        CHAR
        CITY
        COMPANY
        COUNTRY
        EMAIL
        MYCOMPANY
        NAME
        NOTES
        PHONE
        STATE
        JOB
    }
    }
`;

/*
    post > Create
    get > Read
    put > Update
    del > Delete
    gqm > GhaphiQL Mutation
    gqq > GhaphiQL Query
*/
