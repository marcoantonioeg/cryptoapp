import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '76deeb9a15mshfe2ffecb169eb1ep1c49a3jsnc5a4df3ef8d3'
}
const createRequest = (url)=>({
    url, 
    headers: cryptoApiHeaders
})
const baseUrl = 'https://coinranking1.p.rapidapi.com'
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId)=> createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: (coinId, timePeriod)=> createRequest(`/coin/${coinId}/history/${timePeriod}`)
        }),
        // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),
    })
})
export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery} = cryptoApi;