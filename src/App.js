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
import PurchaseHistory from './views/purchaseHistory'
// import library

const AppRoutes = ({ handleLogin }) => {
  return (
    <Routes>
      <Route path="/home" element={(
        <Home />
      )} />
      <Route path="/login" element={(
        <Login handleLogin={handleLogin} />
      )} />
      <Route path="/signup" element={(
        <Login handleLogin={handleLogin} />
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
      <Route path="/purchase_history" element={(
        <PurchaseHistory />
      )} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

const { Search } = Input

const springCollectionPath = [
  'https://i.ibb.co/MgmTXJ3/canh-Thu-Tet-xanh01.jpg',
  'https://i.ibb.co/R4JdxfS/may-Hongtet-03.jpg',
]

const summerCollectionPath = [
  'https://i.ibb.co/yhcMyR5/dong-Dao-Ha-xanh02.jpg',
  'https://i.ibb.co/9WfKyjh/huong-Ha03.jpg',
]

const fallCollectionPath = [
  'https://i.ibb.co/k9nJ7HG/yem-Hong-01.jpg',
  'https://i.ibb.co/k8k533h/mua-Sen-trang01.jpg',
]

const winterCollectionPath = [
  'https://i.ibb.co/R6gxxgf/suong-Som-xanh02.jpg',
  'https://i.ibb.co/xJS1Kg6/yen-Minh-do02.jpg',
]

function App() {
  const [currentUser, setCurrentUser] = useState('')
  const [isShowingCollection, setIsShowingCollection] = useState(false)
  const [isShowingIntroduce, setIsShowingIntroduce] = useState(false)
  const [collectionPaths, setCollectionPaths] = useState([
    'https://i.ibb.co/j4Pfr9m/bang-Dong-01.jpg',
    'https://i.ibb.co/sqTLQ0x/hoa-Pho-xanh03.jpg',
  ])

  const handleUserChange = (user) => {
    setCurrentUser(user)
    localStorage.setItem('currentUser', user)
  }

  const handleAuth = () => {
    setCurrentUser('')
    localStorage.setItem('currentUser', '')
    window.location.replace('/login')
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
          <a href='/home' style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}><img style={{ width: '100%', height: '3rem', objectFit: 'contain', marginLeft: '1rem' }} src='https://www.tunhamay.vn/content/images/2023/09/May-Logo-3.png'></img></a>
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
            <a href='/purchase_history'>Lịch sử</a>
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
        <AppRoutes handleLogin={handleUserChange} />
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
            <div className="link-items" style={{ display: 'flex', flexDirection: 'column' }}>
              <a className="links" href='/policy'>CHÍNH SÁCH</a>
              <a className="links" href='/policy'>Chính sách thanh toán</a>
              <a className="links" href='/policy'>Chính sách đổi và trả hàng</a>
              <a className="links" href='/policy'>Chính sách vận chuyển</a>
            </div>
            <div className="link-items" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="links">HỖ TRỢ KHÁCH HÀNG</div>
              <a className="links" href='/about'>Đội ngũ</a>
              <a className="links" href='/introduce'>Liên hệ</a>
              <div style={{ display: 'flex' }}>
                <div className='links' style={{ width: '2rem', marginRight: '1rem' }}>
                  <a class="facebook link" href="https://www.facebook.com/TuNhaMay" target="_blank" title="Theo dõi Facebook Tủ nhà Mây">
                    <img src="//theme.hstatic.net/200000623993/1001008164/14/facebook.png?v=1404" width="32" height="32" alt="facebook" />
                  </a>
                </div>
                <div className='links' style={{ width: '2rem' }}>
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