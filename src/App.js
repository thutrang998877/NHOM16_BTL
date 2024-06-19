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
import { SearchOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={(
        <Home />
        )} />
      <Route path="/products/*" element={(
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
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

const springCollectionPath = [
  'https://product.hstatic.net/1000392326/product/bda50150_-_chua_co_gia_bdq50139-558k__4__96c934460a5d44569c030d5b57d3668c_1024x1024.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3cXrVaYMTHlov_ItX6F_ABvdDSdf2hz4jA&s'
]

const summerCollectionPath = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUlV2v3y2pV34vjgZ3dMccv8c0kOspoKSHA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQFpoknV71Lek_hCvwLcKg8vagw0pjDcedQ&s'
]

const fallCollectionPath = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3IcQKkPd0UCXQcru6RIFR2gw4XssKSOLcw&s',
  'https://down-vn.img.susercontent.com/file/vn-11134201-23020-p5qizro12jnvf1'
]

const winterCollectionPath = [
  'https://bizweb.dktcdn.net/100/414/042/products/dsc06774-2.jpg?v=1683969121643',
  'https://bizweb.dktcdn.net/100/236/196/products/8-1-44ee1440-f558-4e18-b133-78d956d9b559.jpg?v=1667528700197'
]

function App() {
  const [isShowingCollection, setIsShowingCollection] = useState(false)
  const [collectionPaths, setCollectionPaths] = useState([
  'https://media-cdn-v2.laodong.vn/Storage/newsportal/2018/2/9/590907/J1.jpg',
  'https://kenh14cdn.com/203336854389633024/2022/12/24/photo-22-16718773627791873791975.jpeg'
  ])
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
                    <a href='/products/spring'
                      onMouseEnter={() => setCollectionPaths(springCollectionPath)}
                    >Xuân</a>
                    <a href='/products/summer'
                      onMouseEnter={() => setCollectionPaths(summerCollectionPath)}
                    >Hạ</a>
                    <a href='/products/fall'
                      onMouseEnter={() => setCollectionPaths(fallCollectionPath)}
                    >Thu</a>
                    <a href='/products/winter'
                      onMouseEnter={() => setCollectionPaths(winterCollectionPath)}
                    >Đông</a>
                  </div>
                </div>
              }
            </a>
            <a href='/carts'>Giỏ hàng</a>
            <a href='/introduce'>Giới thiệu</a>
          </div>
          <div className='action'>
            <Button type="dashed" icon={<SearchOutlined />}>
              Tìm kiếm
            </Button>
          </div>
        </div>
        <AppRoutes />
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
            <div className="link-items">
              <div className="links">CHÍNH SÁCH</div>
              <div className="links">Chính sách thanh toán</div>
              <div className="links">Chíng sách đổi và trả hàng</div>
              <div className="links">Chính sách vận chuyển</div>
            </div>
            <div className="link-items">
              <div className="links">HỖ TRỢ KHÁCH HÀNG</div>
              <div className="links">Đội ngũ</div>
              <div className="links">Liên hệ</div>
              <div style={{display: 'flex'}}>
                <div className='links' style={{width: '2rem', marginRight: '1rem'}}>
                  <a class="facebook link" href="https://www.facebook.com/TuNhaMay" target="_blank" title="Theo dõi Facebook MAGONN">
                    <img src="//theme.hstatic.net/200000623993/1001008164/14/facebook.png?v=1404" width="32" height="32" alt="facebook" />	
                  </a>
                </div>
                <div className='links' style={{width: '2rem'}}>
                  <a class="instgram link" href="https://www.instagram.com/tunhamay.official/" target="_blank" title="Theo dõi instgram MAGONN">
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
