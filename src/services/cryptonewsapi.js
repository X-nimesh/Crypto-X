import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoNewsHeaders={
 
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '06a462d2f4msh8ad97a3c56bc1b9p125d69jsn90a15488f3f6'
     
}
const baseUrl='https://bing-news-search1.p.rapidapi.com/news';

const createRequest =(url)=>({url, headers:cryptoNewsHeaders})

export const cryptoNewsApi= createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder=>({
        getCrytoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}
            &safeSearch=D0ff&textFormat=Raw&freshness=Day&count=${count}}`),
            

        })
    }))

});
export  const{
    useGetCrytoNewsQuery,
} =  cryptoNewsApi;