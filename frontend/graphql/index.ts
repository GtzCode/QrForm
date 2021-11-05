import { gql, useMutation, useQuery } from '@apollo/client';


export const POST_COMPANY = gql`
    mutation postCompany($data: CreateCompanyInput!) {
        CreateCompany(data: $data) {
            ID
        }
    }
`;



export const GQM_ORDER_DATA_QR = gql`
    mutation gqmOrderDataQR($vpQrText: String!) {
        OrderDataQR(vpQrText: $vpQrText) {
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


/*
    post > Create
    get > Read
    put > Update
    delete > Delete
    gqm > GhaphiQL Mutation
    gqq > GhaphiQL Query
    //useLazyQuery
*/
