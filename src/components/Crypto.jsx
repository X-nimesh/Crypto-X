import React  from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Col, Row,Card , Input} from 'antd'

import { useGetCrytosQuery } from '../services/cryptoApi'
import { useState } from 'react'
import { useEffect } from 'react'


const Crypto = ({simplified}) =>{

  const count= simplified ? 10 : 100;

  const { data:cryptoList, isFetching} = useGetCrytosQuery(count);
  const[cryptos, setCryptos] = useState(undefined);
  
  
  
  
  useEffect(()=>{
    setCryptos(cryptoList?.data?.coins);
    
  },[cryptoList])
  
  console.log(cryptos);
  
  if(isFetching) {
    console.log('loading');
    return <div>Loading...</div>
  }
// else{

  return (
    <>
  
      <Row gutter={[32,32]} className='crypto-card-container'>

        {cryptos?.map((currency,key) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={key}>
            
               <Link to={`/crypto/${currency.id}`}/>
              <Card 
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className='crypto-image' src={currency.iconUrl} />}
                  hoverable
                  >
                    <p>Price: ${millify(currency.price)}</p>
                    
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}%</p>
                   
                </Card> 
              </Col>
        ))
        }
      </Row>
    </>
  )
      // }
}

export default Crypto