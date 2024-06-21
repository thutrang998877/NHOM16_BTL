import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react';
//Trang chu
function Home() {
  const [banners, setBanner] = useState([
    {
      links: 'http://localhost:3000/products?collection=spring',
      img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/448803800_1868529236990505_6951073453796265223_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ij2woMB_YZgQ7kNvgH8WXpe&_nc_ht=scontent.fhan14-2.fna&oh=00_AYB2eiUOZAZq-0sbyx6t37ioAgVj4FRzU6nWiGlFVlGDAg&oe=6678D8DD"
    },
    {
      links: '',
      img: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/448544466_1868525816990847_645939291266345467_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wDM6bEyP2L4Q7kNvgGVSMvV&_nc_ht=scontent.fhan14-3.fna&oh=00_AYAZQKttS46PoG5T1-cWVuaElICHw4JeikIgvtZ3o5Npnw&oe=6678EB80"
    },
    {
      links: '',
      img: "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/448544468_1867978453712250_3422061733003838236_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QeJClzD4hc0Q7kNvgHMTlFR&_nc_ht=scontent.fhan14-5.fna&oh=00_AYAZIPHIBNYZILoELHciINAYifv2U1s0MBI9oKL_uFLbJg&oe=6678EA3E"
    },
  ])

  const [bannerMid, setBannerMid] = useState([
    {
      links: '',
      img: "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/448802593_1867978577045571_5948691714116349292_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wwj3V4_vdtcQ7kNvgGT6TBC&_nc_ht=scontent.fhan14-5.fna&oh=00_AYCYrkUN5Ynm8K9d_63ah6qskevQ0X3Bps8a7_tqCxcYSg&oe=6678DC8A"
    },
    {
      links: '',
      img: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/448509686_1867978593712236_344505316679113879_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mPGJEG7_QrMQ7kNvgEe-x0y&_nc_ht=scontent.fhan14-3.fna&oh=00_AYBgFNBH4yysBMBFHV77xJLLVUpJ04T-BjxODlBcRpWPMQ&oe=6678D422"
    },
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
                return <SwiperSlide><a className='swiper-slide-banner' href={item.links}><img style={{width: '100%'}} src={`${item.img}`}></img></a></SwiperSlide>
              })}
            </Swiper>
        </div>
          <div className='collection-container'>
            <div style={{fontWeight: "bold", fontSize: "2rem"}}>BỘ SƯU TẬP</div>
            <div className='home-collections'>
              <a className='collection' href='/products?collection=spring'>
                <div className='collection-title'>Xuân Thì</div>
                <img className='collection-image' src='https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/418942057_784689053701723_3765025805197650856_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFMQk_3OomzX4RQZz1XfPcnYOI5D-12BfVg4jkP7XYF9Ykg1y1XW7qNlm5ZOID-5a1YknVKRw4EcX2UzLwEdm1t&_nc_ohc=qr4FaqwHvk4Q7kNvgEjDdWm&_nc_ht=scontent.fhan5-10.fna&oh=00_AYAHxrig6CRsRtEEjHprgkebKtHq295NMA2RLi7jF2TxcQ&oe=6677B5DD'></img>
              </a>
              <a className='collection' href='/products?collection=summer'>
                <div className='collection-title'>Vào Hạ </div>
                <img className='collection-image' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/448436973_1506153063628520_5274512159206345262_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHiaMZpf4jFfcLOULXGk6qNVlKcD1ySyClWUpwPXJLIKRlZK7lpqffr3fTTZKA0GYLAKNzkQmi7I8wjgs-XRrjP&_nc_ohc=azHKEmRFmCAQ7kNvgHPXI2k&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEaFSM1edtHBsKLKOC-YjQ199wCNAOzJlGBAzNrpq5CWw&oe=6699570D'></img>
              </a>
              <a className='collection' href='/products?collection=fall'>
                <div className='collection-title'>Sang Thu</div>
                <img className='collection-image' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/287702903_816035549379768_539584647129522492_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGYy5bkM-Jqsg7wTJLiXvA9GfMR9oAW27IZ8xH2gBbbshwHOYWpkOLWhKmRqlDkHIA8WlRDJiHIuwZCPWbzPtwE&_nc_ohc=D5thnjyMTaoQ7kNvgFtUleX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHfW0UZldpQcDtdGylaDa7O40zepBq-O1yvDL-e3eHIdg&oe=66992D12'></img>
              </a>
              <a className='collection' href='/products?collection=winter'>
                <div className='collection-title'>Lập Đông</div>
                <img className='collection-image' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/411464460_946199260426134_5434351112641677543_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGTbIkbi7jX7pTmhR5Q7r8M9SG_eHGHHv71Ib94cYce_r2Uao5kqLSndorvVXGnMM3P1KJrtPyky8hVNzi7_zZE&_nc_ohc=wmrcwocS1cUQ7kNvgErBbQy&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEQWffB5hEhQzzv80iwcnivbHGVAaZZj8QO83G4exJSVA&oe=66994211'></img>
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