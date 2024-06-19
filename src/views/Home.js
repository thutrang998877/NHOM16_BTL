import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react';

function Home() {
  const [banners, setBanner] = useState([
    "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/448803800_1868529236990505_6951073453796265223_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ij2woMB_YZgQ7kNvgH8WXpe&_nc_ht=scontent.fhan14-2.fna&oh=00_AYB2eiUOZAZq-0sbyx6t37ioAgVj4FRzU6nWiGlFVlGDAg&oe=6678D8DD",
    "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/448544466_1868525816990847_645939291266345467_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wDM6bEyP2L4Q7kNvgGVSMvV&_nc_ht=scontent.fhan14-3.fna&oh=00_AYAZQKttS46PoG5T1-cWVuaElICHw4JeikIgvtZ3o5Npnw&oe=6678EB80",
    "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/448544468_1867978453712250_3422061733003838236_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QeJClzD4hc0Q7kNvgHMTlFR&_nc_ht=scontent.fhan14-5.fna&oh=00_AYAZIPHIBNYZILoELHciINAYifv2U1s0MBI9oKL_uFLbJg&oe=6678EA3E",
  ])

  const [bannerMid, setBannerMid] = useState([
    "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/448802593_1867978577045571_5948691714116349292_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wwj3V4_vdtcQ7kNvgGT6TBC&_nc_ht=scontent.fhan14-5.fna&oh=00_AYCYrkUN5Ynm8K9d_63ah6qskevQ0X3Bps8a7_tqCxcYSg&oe=6678DC8A",
    "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/448509686_1867978593712236_344505316679113879_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mPGJEG7_QrMQ7kNvgEe-x0y&_nc_ht=scontent.fhan14-3.fna&oh=00_AYBgFNBH4yysBMBFHV77xJLLVUpJ04T-BjxODlBcRpWPMQ&oe=6678D422",
    
  ])

  return (
      <div className="body">
        <div style={{width: '100%', overflow: 'hidden'}}>
          <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 200 }}
            >
              {banners.length && banners.map(item => {
                return <SwiperSlide><div className='swiper-slide-banner'><img style={{width: '100%'}} src={`${item}`}></img></div></SwiperSlide>
              })}
            </Swiper>
        </div>
          <div className='collection-container'>
            <div style={{fontWeight: "bold", fontSize: "2rem"}}>Collection</div>
            <div className='home-collections'>
              <a className='collection' href='/products/spring'>
                <div className='collection-title'>Xuân</div>
                <img className='collection-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DyeKqdRkRe78ocuLC2a3Qpx329bYg2WWzw&s'></img>
              </a>
              <a className='collection' href='/products/summer'>
                <div className='collection-title'>Hạ</div>
                <img className='collection-image' src='https://product.hstatic.net/200000265163/product/61dae0b7-4c60-42b8-8bd5-832657b4fa39_7b37084729994fc09b6492cee6ef986d_master.jpg'></img>
              </a>
              <a className='collection' href='/products/fall'>
                <div className='collection-title'>Thu</div>
                <img className='collection-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3IcQKkPd0UCXQcru6RIFR2gw4XssKSOLcw&s'></img>
              </a>
              <a className='collection' href='/products/winter'>
                <div className='collection-title'>Đông</div>
                <img className='collection-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vU8LzkWR5nwllUDy2ozt_lnC-Ws0xxMPJQ&s'></img>
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
                return <SwiperSlide><div className='swiper-slide-banner'><img style={{width: '100vw'}} src={`${item}`}></img></div></SwiperSlide>
              })}
            </Swiper>
          </div>
          <div className='sales'>
            <div className='sale-item'>
              <div className='sale-image'>
                <img width={40} height={40} src='https://theme.hstatic.net/200000623993/1001008164/14/policies_icon_1.png?v=1395'></img>
              </div>
              <div className='sale-content'>
                <div className='sale-item-title'>
                  Miễn phí vận chuyển cho
                </div>
                <div className='sale-item-title'>
                  hóa đơn từ 2 triệu đồng
                </div>
                <div className='sale-item-content'>
                  Nhận hàng trong vòng 3 ngày
                </div>
              </div>
            </div>
            <div className='sale-item'>
            <div className='sale-image'>
              <img width={40} height={40} src='https://theme.hstatic.net/200000623993/1001008164/14/policies_icon_2.png?v=1395'></img>
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
                <img width={40} height={40} src='https://theme.hstatic.net/200000623993/1001008164/14/policies_icon_4.png?v=1395'></img>
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
      </div>
  );
}

export default Home;