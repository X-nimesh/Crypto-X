
import './App.css'
import {Route ,Routes, Link } from 'react-router-dom'
import {Layout , Typography, Space} from 'antd'
import {NavBar , HomePage, News, Crypto, CryptoDetails} from './components'


function App() {

  return (
      <div className="app">
          <div className="navbar">
            <NavBar/>
          </div>
          <div className="main">
            <Layout>
              <div className="routes">
                 <Routes>
                   <Route path='/' element={<HomePage/>}/>
                   <Route path='/crypto' element={<Crypto/>}/>
                   <Route path='/crypto/:coinid' element={<CryptoDetails />}/>
                   <Route path='/news' element={<News/>}/>
                 </Routes>
              </div>
            </Layout>

            <div className="footer">
                  <Typography.Title level={5} style={{color:'white', textAlign:'center'}} >
                    Crypto X ©2020<br/>
                    All Rights Reserved
                  </Typography.Title>
                  <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/crypto'>Cryptocurrency</Link>
                    <Link to='/news'>News</Link>
                    
                  </Space>

              </div>    
          </div>
      </div>
  )
}

export default App
