import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import {  HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/CryptoX.png'
const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className="logo-container">
            {/* <Avatar src={icon} size="large" /> */}
            <img src={icon} alt="" style={{width:'10vw'}}/>
            {/* <Typography.Title level={2} className='logo' >
                <Link to="/">Crypto X</Link>
            </Typography.Title> */}
        </div>
           <Menu theme='dark'>
               <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>            
               </Menu.Item>
               <Menu.Item icon={<FundOutlined/>}>
                    <Link to='/crypto'>CryptoCurrencies</Link>
               </Menu.Item>
               <Menu.Item icon={<BulbOutlined />}>
                    <Link to='/news'>News</Link>
               </Menu.Item>
           </Menu>
       

    </div>
  )

}

export default NavBar