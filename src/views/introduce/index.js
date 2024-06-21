import '../../App.css';
import './index.css'
import { PRODUCTS } from '../../constants/product'
import { useEffect, useState } from 'react';

function Introduce() {
  return (
      <div className="body" style={{marginLeft: '4rem', marginRight: '4rem', marginTop: '2rem', display: 'flex', flexDirection: 'column', marginBottom: '2rem', alignItems: 'center'}}>
        <div className='row' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '3rem', width: '100%'}}>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/11-hang-gai/'>
                <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1600/2024/03/IMG_2215.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400'}}>11 Hàng Gai</div>
                <div>Tháng 3 01, 2024 — STYLE & STORIES</div>
            </div>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/noi-nang-ve/'>
                    <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1200/2023/09/IMG_4217.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400'}}>Nơi nắng về</div>
                <div>Tháng 9 28, 2023 — NICE THINGS</div>
            </div>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/viet-ve-ao-dai-ha-noi/'>
                    <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1600/2023/09/IMG_4215.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400'}}>Viết về Áo Dài Hà Nội</div>
                <div>Tháng 9 28, 2023 — NICE THINGS</div>
            </div>
        </div>
        <div className='row' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '3rem', width: '100%'}}>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/ao-dai-tu-hoa/'>
                    <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1600/2023/09/IMG_4213.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400'}}>Áo Dài Từ Hoa</div>
                <div>Tháng 9 28, 2023 — NICE THINGS</div>
            </div>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/sen-trang-hoi-an/'>
                    <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1600/2023/09/DSCF4080-1-1.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400'}}>Sen Trắng (HỘI AN)</div>
                <div>Tháng 9 25, 2023 — STYLE & STORIES</div>
            </div>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/don-tet-trung-thu/'>
                    <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1600/2023/09/dscf7007-1.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400'}}>Tết Trung Thu Hà Nội</div>
                <div>Tháng 9 25, 2023 — STYLE & STORIES</div>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column'}} className='letter-container'>
                <h2>Gửi email đến Mây</h2>
                <input placeholder='Họ tên của bạn' />
                <input placeholder='Số điện thoại' />
                <textarea placeholder='Nội dung' rows={8}/>
                <button>Gửi</button>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.240302901744!2d105.8296885747142!3d21.023068787975028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9cfc8ffddd%3A0xec338c7386d7619!2zMTM3IFAuVMO0biDEkOG7qWMgVGjhuq9uZywgVGjhu5UgUXVhbiwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1718667095792!5m2!1svi!2s" width="500" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
  );
}

export default Introduce;