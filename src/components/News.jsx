import React from 'react'
import { Select, Typography, Row, Col ,Avatar , Card } from 'antd'
import moment from 'moment'

import { useGetCrytoNewsQuery } from '../services/cryptonewsapi'
const {Text, Tite} = Typography;
const{Option}=Select;

const News = (simplified) => {
  const { data:cryptoNews } = useGetCrytoNewsQuery({ newsCategory : 'CryptoCurrency', count : simplified ? 10 : 100 });

  console.log(cryptoNews);
  return (
    <div>News</div>
  )
}

export default News