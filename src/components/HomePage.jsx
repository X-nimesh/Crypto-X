import React from 'react'
import millify from 'millify'
import { Col, Row, Statistic, Typography as Title} from 'antd'
import { Link } from 'react-router-dom'
import {  useGetCrytosQuery } from '../services/cryptoApi'
import Crypto from '../components/Crypto'
import News from '../components/News'

const HomePage = () => {
    const { data, isFetching} =  useGetCrytosQuery(10);

    const globalStats = data?.data?.stats;

    if(isFetching) return(
        <div class='containerL'>
        <div class='loader'>
          <div class='loader--dot'></div>
          <div class='loader--dot'></div>
          <div class='loader--dot'></div>
          <div class='loader--dot'></div>
          <div class='loader--dot'></div>
          <div class='loader--dot'></div>
          <div class='loader--text'></div>
        </div>
    </div>
    )
    console.log(data);
    console.log(globalStats.total);


  return (
    <>
        <Title.Title level={2} className="heading">
            Global Crypto Stats
        </Title.Title>
        <Row>
            <Col span={12}><Statistic title="Total Crypto Currencies" value={globalStats.total} /></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
            <Col span={12}><Statistic title="Total market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
            <Col span={12}><Statistic title="Total 24Hr Volume" value={millify(globalStats.total24hVolume)} /></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
        </Row>
        <div className="home-heading-container">
            <Title.Title level={2} className="home-title">Top 10 Cryto </Title.Title>
            <Title.Title level={3} className="show-more"><Link to={'/crypto'}>Show more</Link></Title.Title>
        </div>
        <Crypto simplified/>
        <div className="home-heading-container">
            <Title.Title level={2} className="home-title">Crypto News</Title.Title>
            <Title.Title level={3} className="show-more"><Link to={'/news'}>Show more</Link></Title.Title>
        </div>
        <News simplified/>
    </>
  )
}

export default HomePage
