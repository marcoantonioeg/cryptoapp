import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '76deeb9a15mshfe2ffecb169eb1ep1c49a3jsnc5a4df3ef8d3',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
const baseUrl= 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url)=>({
    url, 
    headers: cryptoNewsHeaders
})
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})
export const {useGetCryptosNewsQuery} = cryptoNewsApi;