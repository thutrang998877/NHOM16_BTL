import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react';
import { PRODUCTS } from '../constants/product';
import { Modal } from 'antd';
//Trang chu
function Home() {
  // bien kiem soat viec dong mở modal
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // so san pham nang se thich
  const youMayLike = [PRODUCTS[0][0], PRODUCTS[0][1], PRODUCTS[0][2], PRODUCTS[0][3], PRODUCTS[1][0]]
  // format lai don vi tien
  const USDollar = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
  })
  const [banners, setBanner] = useState([
    {
      links: '/products?collection=spring',
      img: "https://i.ibb.co/f44qvYG/3.png"
    },
    {
      links: '',
      img: "https://i.ibb.co/99xBX7z/4.png"
    },
    {
      links: '',
      img: "https://i.ibb.co/bHLzPrK/tc3.jpg"
    },
  ])

  const [bannerMid, setBannerMid] = useState([
    {
      links: '',
      img: "https://i.ibb.co/bdnWSgf/banner-mid-1.png"
    },
    {
      links: '',
      img: "https://i.ibb.co/c3ZtVtB/banner-mid-2.png"
    },
  ])

  return (
      <div className="body">
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <img src='https://i.ibb.co/7vttdsd/popup.png'></img>
        </Modal>
        <div style={{width: '100%', overflow: 'hidden'}}>
          <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 200 }}
            >
              {banners.length && banners.map(item => {
                return <SwiperSlide><a className='swiper-slide-banner' href={item.links}><img style={{width: '100%'}} src={`${item.img}`}></img></a></SwiperSlide>
              })}
            </Swiper>
        </div>
          <div className='collection-container'>
            <div style={{fontWeight: "bold", fontSize: "2rem"}}>BỘ SƯU TẬP</div>
            <div className='home-collections'>
              <a className='collection' href='/products?collection=spring'>
                <div className='collection-title'>Xuân Thì</div>
                <img className='collection-image' style={{objectFit: 'cover'}} src='https://i.ibb.co/0jVZH78/hoa-Pho-Tet-hong01.jpg'></img>
              </a>
              <a className='collection' href='/products?collection=summer'>
                <div className='collection-title'>Vào Hạ </div>
                <img className='collection-image' style={{objectFit: 'cover'}} src='https://i.ibb.co/yhcMyR5/dong-Dao-Ha-xanh02.jpg'></img>
              </a>
              <a className='collection' href='/products?collection=fall'>
                <div className='collection-title'>Sang Thu</div>
                <img className='collection-image' style={{objectFit: 'cover'}} src='https://i.ibb.co/k8k533h/mua-Sen-trang01.jpg'></img>
              </a>
              <a className='collection' href='/products?collection=winter'>
                <div className='collection-title'>Lập Đông</div>
                <img className='collection-image' style={{objectFit: 'cover'}} src='https://i.ibb.co/6H45gwR/dong-Daohoa-cam02.jpg'></img>
              </a>
            </div>
          </div>
          <div style={{width: '100%', overflow: 'hidden'}}>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 200 }}
            >
              {bannerMid.length && bannerMid.map(item => {
                return <SwiperSlide><a className='swiper-slide-banner' href={item.links}><img style={{width: '100vw'}} src={`${item.img}`}></img></a></SwiperSlide>
              })}
            </Swiper>
          </div>
          <div className='sales'>
            <div className='sale-item'>
              <div className='sale-image'>
                <img width={20} height={20} src='https://theme.hstatic.net/200000623993/1001008164/14/policies_icon_1.png?v=1395'></img>
              </div>
              <div className='sale-content'>
                <div className='sale-item-title'>
                  Miễn phí vận chuyển cho
                </div>
                <div className='sale-item-title'>
                  toàn bộ đơn hàng
                </div>
                <div className='sale-item-content'>
                  Nhận hàng trong vòng 3 ngày
                </div>
              </div>
            </div>
            <div className='sale-item'>
            <div className='sale-image'>
              <img width={20} height={20} src='https://theme.hstatic.net/200000623993/1001008164/14/policies_icon_2.png?v=1395'></img>
              </div>
              <div className='sale-content'>
                <div className='sale-item-title'>
                  Ưu đãi hấp dẫn
                </div>
                <div className='sale-item-content'>
                  Nhiều khuyến mãi hấp dẫn
                </div>
              </div>
            </div>
            <div className='sale-item'>
              <div className='sale-image'>
                <img style={{objectFit: 'cover'}} width={20} height={20} src='https://theme.hstatic.net/200000623993/1001008164/14/policies_icon_4.png?v=1395'></img>
              </div>
              <div className='sale-content'>
                <div className='sale-item-title'>
                  Hotline: 039 972 5203
                </div>
                <div className='sale-item-content'>
                  Đặt hàng nhanh chóng và thuận tiện
                </div>
              </div>
            </div>
          </div>
          
          <div className='same-collection-container'>
                <h1>CÓ THỂ NÀNG SẼ THÍCH</h1>
                <div className='home-same-collection-cards'>
                    {youMayLike.map(it => {
                        return <div className='same-collection-card'>
                            <a className='card-image-detail' href={`/product_detail?id=${it.key}`}>
                                <img class='home-card-image' src={it.link}></img>
                            </a>
                            <div className='card-product-name'>{it.name}</div>
                            <div style={{display: 'flex'}}>
                              {it.discount && it.discount > 0 && <div style={{textDecoration: 'line-through', color: 'black', marginRight: '0.5rem'}}>{USDollar.format(it.price)}</div>}
                              <div className='card-product-price'>{USDollar.format(it.discount && it.discount > 0 ? it.price * (100 - it.discount) /100 : it.price)}</div>
                            </div>
                        </div>
                    })}
                </div>
          </div>
      </div>
  );
}

export default Home;