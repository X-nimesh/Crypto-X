import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders={
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '06a462d2f4msh8ad97a3c56bc1b9p125d69jsn90a15488f3f6'
}
const baseUrl='https://coinranking1.p.rapidapi.com';
 
const createRequest =(url)=>({url, headers:cryptoApiHeaders})
export const cryptoApi= createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder=>({
        getCrytos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    }))

});

export  const{
    useGetCrytosQuery,
} = cryptoApi;