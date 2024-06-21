import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './views/Home'
import Product from './views/products'
import { useState } from 'react'
import ScrollToTop from "react-scroll-to-top"
import ProductDetail from './views/productDetail'
import Cart from './views/carts'
import Payment from './views/payment'
import Introduce from './views/introduce'
import { SearchOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd';
import Story from './views/story'
import About from './views/about'
import Policy from './views/policy'
import Login from './views/login'
import { Input } from "antd";

const AppRoutes = ({handleLogin}) => {
  return (
    <Routes>
      <Route path="/home" element={(
        <Home />
        )} />
      <Route path="/login" element={(
        <Login handleLogin={handleLogin}/>
      )} />
      <Route path="/signup" element={(
        <Login handleLogin={handleLogin}/>
      )} />
      <Route path="/products" element={(
        <Product />
        )} />
      <Route path="/product_detail/*" element={(
        <ProductDetail />
        )} />
      <Route path="/carts/*" element={(
        <Cart />
        )} />
      <Route path="/payment/*" element={(
        <Payment />
        )} />
      <Route path="/introduce" element={(
        <Introduce />
        )} />
      <Route path="/about" element={(
        <About />
      )} />
      <Route path="/policy" element={(
        <Policy />
      )} />
      <Route path="/story" element={(
        <Story />
      )} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

const { Search } = Input

const springCollectionPath = [
  'https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/448713953_988669492842080_359556795315329850_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE0NWmhnOseXMItgbv6gOS6iNgQp_yCkWCI2BCn_IKRYFXaqzig9HwiGlDvAyiEnxYNDeI6uH2zw3N3ef4GGmKI&_nc_ohc=qqIqK8NRKScQ7kNvgEFo0gU&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDDz3WXZGMm-FbYc1_oZzVnAzu6qf9VIF_F95tWAM-uBw&oe=6677A785',
  'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/448715900_988668739508822_3663831415344971151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHtdW7rkmuhs9-SgaTJRR_XeNWjOw5EWi541aM7DkRaLorVvzd_9zR5PEwTckirCcb0qMBtnSeXA3-qhdNTRmaN&_nc_ohc=Fgjm4N_4fKUQ7kNvgFxR_M_&_nc_ht=scontent.fhan14-5.fna&oh=00_AYDQh7m9_QsWhf0kR4pcSfreMT4f5OpWn9Bvkulf7sulng&oe=6678DAB8'
]

const summerCollectionPath = [
  'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/448470280_988741916168171_5795559389784461750_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEWRBKwUJLcE9owkvvF08ZXPE8j4-_17vs8TyPj7_Xu-1-YJIA4MHfZoWYXS3-03AolhCvEJWktzouPG3Zrg-St&_nc_ohc=Z_lNiUFSnKkQ7kNvgF3jPiz&_nc_ht=scontent.fhan14-5.fna&oh=00_AYAdTV3vSRhRGuVDjveqkGyTGAi_7J6FlH6Do9GNmfvWmA&oe=6678D189',
  'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/448816069_893365589500735_2388222668003682751_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFd-KGlR_2xj_Snrgx-ClsuFc4sldOWxAMVziyV05bEA8V8ZbYYMq2i4h0gWCYZBuCT4AeAbQhp6WZsBMzyCk3w&_nc_ohc=V25CybFdDAwQ7kNvgE6e_Wg&_nc_ht=scontent.fhan14-3.fna&oh=00_AYCw-b4mo3-jxFjSBayoOvxK_OL6Bk9Lm6-FZpkfc_jUcA&oe=66791BC8'
]

const fallCollectionPath = [
  'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/448504984_988771239498572_6710264695426703717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF8duSK17nZfa5pEAc41zBG4Px9C-Hdd43g_H0L4d13jesaWBG4JEtwJJT-Q1gZqdLKrgOrGMOOjJCUma6GYwGy&_nc_ohc=cl7GyRNepl4Q7kNvgFo1Icx&_nc_ht=scontent.fhan14-2.fna&oh=00_AYDccxpBqy7gXvEfig0BCheHtd21e6I1p4ivRadoS15IAA&oe=6678E1A7',
  'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/448444487_988770956165267_933289055019508038_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEjpngvOwWGPtHMsYoSEsRtDo_Bh_6yR1UOj8GH_rJHVRZWGW97Cc-1twuEXVZLMbCgOQAU8fTlIPLlbYLBNQT1&_nc_ohc=QvPsR21MKbIQ7kNvgHzlWVP&_nc_ht=scontent.fhan14-5.fna&oh=00_AYCVFiCbdwSjtZLK1rmM6hxSszc4f7HlRUzAfzCclfa86A&oe=6678FDBD'
]

const winterCollectionPath = [
  'https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/448779854_988772429498453_839250750949044573_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFuguKwUQ_pXPK0FioT0nwg97awttGrRMP3trC20atEw4k4W0F2YsHkmNQeRfTqbjHER2ykbYHV0AJWQQvFrEiZ&_nc_ohc=SA1FK4Kex0IQ7kNvgET1F1u&_nc_ht=scontent.fhan5-6.fna&oh=00_AYDRT2z1u_n2Y5WTM9Xx4qbXrth2DvdFcQhEDPahbzCVIA&oe=6677CF14',
  'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/448459892_988772696165093_8393146605176307923_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGdb22GP0-ZdYZiOszZ8rTtfRw-JhS9hzB9HD4mFL2HMP3X6T_c4n-B0rYOT4rvMiy7LBK2IlC3t0cFHkLK3kal&_nc_ohc=DTyy_pWU-QkQ7kNvgFoh0pp&_nc_ht=scontent.fhan5-8.fna&oh=00_AYBr0aOOKFGZQ5oWAmPdDe2QWYdtZGCNEauwR0qwYl9HYg&oe=6677C715'
]

function App() {
  const [currentUser, setCurrentUser] = useState('')
  const [isShowingCollection, setIsShowingCollection] = useState(false)
  const [isShowingIntroduce, setIsShowingIntroduce] = useState(false)
  const [collectionPaths, setCollectionPaths] = useState([
  'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/448506007_988771586165204_2963683013417972027_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF_GLDTnaj6sBnN8Ph2EuvhIkEPD-GM4egiQQ8P4Yzh6HzzrmbMnS_KJ_U3-AnutKc9NlaD2H2RoIRgdMsXWLZp&_nc_ohc=XptmSTZyRtMQ7kNvgEro6GQ&_nc_ht=scontent.fhan14-1.fna&oh=00_AYBhVrCi8DFGgTy6bJuguxXAH6Quldl-_DL2f7BGjf_qiQ&oe=6678D79D',
  'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/448629089_988772196165143_7726208503917413772_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGiYSk1XNJ52KEqh0KuhzWeoipu1-_tIl-iKm7X7-0iX7jndsOPFVWie92XMAGGcFbQr59Vyg7F4mknWgYbPaUw&_nc_ohc=BMyKlhNeAP0Q7kNvgHY7v5m&_nc_ht=scontent.fhan14-4.fna&oh=00_AYCTMn2YFt5sm9yYgaclD7mmeED73lJ7wAi_Xx8PKwOqyg&oe=6678ECEA',
  ])

  const handleUserChange = (user) => {
    setCurrentUser(user)
  }

  const handleAuth = () => {
    setCurrentUser('')
    window.location.replace('login')
  }

  const onSearch = (value, _e) => {
    if (!value) {
      window.alert('Vui lòng nhập thông tin tìm kiếm!')
      return
    }

    window.location.replace(`/products?name=${value}`)
  };

  return (
    <Router>
      <div className='App'>
        <ScrollToTop smooth color="black" />
        <div className="header">
          <a href='/home' style={{display: 'flex', alignItems: 'center', marginRight: '1rem'}}><img style={{width: '100%', height: '3rem', objectFit: 'contain', marginLeft: '1rem'}} src='https://www.tunhamay.vn/content/images/2023/09/May-Logo-3.png'></img></a>
          <div className="menu">
            <a href='/home'>Trang chủ</a>
            <a href='/products'
            onMouseLeave={() => setIsShowingCollection(false)}
            onMouseEnter={() => setIsShowingCollection(true)}
            >
              Sản phẩm &#9663;
              {
                isShowingCollection && 
                <div className='collection-options'>
                  <div className='image-cards'>
                    <div className='image-card'>
                      <img src={collectionPaths[0]}></img>
                    </div>
                    <div className='image-card'>
                      <img src={collectionPaths[1]}></img>
                    </div>
                  </div>
                  <div className='collections'>
                    <a href='/products?collection=spring'
                      onMouseEnter={() => setCollectionPaths(springCollectionPath)}
                    >Xuân Thì</a>
                    <a href='/products?collection=summer'
                      onMouseEnter={() => setCollectionPaths(summerCollectionPath)}
                    >Vào Hạ</a>
                    <a href='/products?collection=fall'
                      onMouseEnter={() => setCollectionPaths(fallCollectionPath)}
                    >Sang Thu</a>
                    <a href='/products?collection=winter'
                      onMouseEnter={() => setCollectionPaths(winterCollectionPath)}
                    >Lập Đông</a>
                  </div>
                </div>
              }
            </a>
            <a href='/carts'>Giỏ hàng</a>
            <a href='/introduce'
              onMouseLeave={() => setIsShowingIntroduce(false)}
              onMouseEnter={() => setIsShowingIntroduce(true)}
            >
              Giới thiệu
              {isShowingIntroduce && <div className='introduce-options'>
                <a href='/story'
                >Câu chuyện thương hiệu</a>
                <a href='/about'
                >Đội ngũ</a>
                <a href='/policy'
                >Chính sách</a>
              </div>
              }
            </a>
          </div>
          {currentUser && <div>Xin chào {currentUser}</div>}
          <div className='action'>
            <Search
              placeholder="Tìm sản phẩm"
              allowClear
              onSearch={onSearch}
              style={{ width: 304, marginRight: '1rem', marginLeft: '1rem' }}
            />
            <Button icon={currentUser ? <LogoutOutlined /> : <LoginOutlined />} onClick={handleAuth}>
            </Button>
          </div>
        </div>
        <AppRoutes handleLogin={handleUserChange}/>
        <div className="footer">
          <div className="link-items-container">
            <div className="link-items">
              <div className="links">THÔNG TIN</div>
              <div className="links">
                  <a className='footer-link' href="https://maps.app.goo.gl/ywRQ3qH84SwpaUx36" target="_blank">
                    <i class="bx bx-map"></i>
                    Địa chỉ: 137 Tôn Đức Thắng, Quang Trung, Đống Đa, Hà Nội, Vietnam
                  </a>
              </div>
              <div className="links">Số điện thoại: 039 972 5203</div>
              <div className="links">Email: cskh@tunhamay.com</div>
            </div>
            <div className="link-items" style={{display: 'flex', flexDirection: 'column'}}>
              <a className="links" href='/policy'>CHÍNH SÁCH</a>
              <a className="links" href='/policy'>Chính sách thanh toán</a>
              <a className="links" href='/policy'>Chính sách đổi và trả hàng</a>
              <a className="links" href='/policy'>Chính sách vận chuyển</a>
            </div>
            <div className="link-items">
              <div className="links">HỖ TRỢ KHÁCH HÀNG</div>
              <a className="links" href='/about'>Đội ngũ</a>
              <a className="links" href='/introduce'>Liên hệ</a>
              <div style={{display: 'flex'}}>
                <div className='links' style={{width: '2rem', marginRight: '1rem'}}>
                <a class="facebook link" href="https://www.facebook.com/TuNhaMay" target="_blank" title="Theo dõi Facebook Tủ nhà Mây">
                    <img src="//theme.hstatic.net/200000623993/1001008164/14/facebook.png?v=1404" width="32" height="32" alt="facebook" />	
                  </a>
                </div>
                <div className='links' style={{width: '2rem'}}>
                <a class="instgram link" href="https://www.instagram.com/tunhamay.official/" target="_blank" title="Theo dõi instgram Tủ nhà Mây">
                    <img src="//theme.hstatic.net/200000623993/1001008164/14/instagram.png?v=1404" width="10" height="10" alt="instgram" />	
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
