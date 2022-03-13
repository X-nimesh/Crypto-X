import React from 'react'
import { Select, Typography, Row, Col ,Avatar , Card } from 'antd'
import moment from 'moment'

import { useGetCrytoNewsQuery } from '../services/cryptonewsapi'
const {Text, Title} = Typography;
const{Option}=Select;

const News = (simplified) => {
  const { data:cryptoNews } = useGetCrytoNewsQuery({ newsCategory : 'CryptoCurrency', count : simplified ? 6 : 12 });

const demoImage='https://coinrevolution.com/wp-content/uploads/2021/11/bitcoin-blockchain-update-improves-network-security-and-privacy.jpg';


  if(!cryptoNews?.value) return( 
    <div className='containerL'>
      <div className='loader'>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--text'></div>
      </div>
    </div>
  );


  console.log(cryptoNews);
  
  return (
    
   <Row gutter={[ 24 , 24 ]}>
      {cryptoNews.value?.map((news,i)=>(
         
          <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                    <a href= {news.url} target="_blank" rel='noreferrer'>
                        <div className="news-iamge-container">
                              <Title className="news-title" level={4}>{news.name}</Title>
                              <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                        </div>
                        <p>
                          {news.description>100
                          ? `${news.description(0,100)}.....`
                        :news.description
                        }
                        </p>
                        <div className="provider-container">
                          <div>
                            <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
                          </div>
                        </div>
                    </a>
              </Card>
          </Col>
        ))}
   </Row>
  )
}

export default News