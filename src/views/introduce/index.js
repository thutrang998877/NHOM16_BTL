import '../../App.css';
import './index.css'
import { PRODUCTS } from '../../constants/product'
import { useEffect, useState } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function Introduce() {
  return (
      <div className="body" style={{marginLeft: '4rem', marginRight: '4rem', display: 'flex', flexDirection: 'column', marginBottom: '2rem'}}>
        <div className='row' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '6rem'}}>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/11-hang-gai/'>
                <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1600/2024/03/IMG_2215.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400', fontFamily: 'fantasy'}}>11 Hàng Gai</div>
                <div>Tháng 3 01, 2024 — STYLE & STORIES</div>
            </div>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/noi-nang-ve/'>
                    <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1200/2023/09/IMG_4217.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400', fontFamily: 'fantasy'}}>11 Hàng Gai</div>
                <div>Tháng 3 01, 2024 — STYLE & STORIES</div>
            </div>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/viet-ve-ao-dai-ha-noi/'>
                    <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1600/2023/09/IMG_4215.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400', fontFamily: 'fantasy'}}>11 Hàng Gai</div>
                <div>Tháng 3 01, 2024 — STYLE & STORIES</div>
            </div>
        </div>
        <div className='row' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '6rem'}}>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/ao-dai-tu-hoa/'>
                    <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1600/2023/09/IMG_4213.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400', fontFamily: 'fantasy'}}>11 Hàng Gai</div>
                <div>Tháng 3 01, 2024 — STYLE & STORIES</div>
            </div>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/sen-trang-hoi-an/'>
                    <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1600/2023/09/DSCF4080-1-1.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400', fontFamily: 'fantasy'}}>11 Hàng Gai</div>
                <div>Tháng 3 01, 2024 — STYLE & STORIES</div>
            </div>
            <div className='intro-card' style={{width: '30%'}}>
                <a href='https://www.tunhamay.vn/magazine/don-tet-trung-thu/'>
                    <img style={{borderRadius: '0.5rem'}} src='https://www.tunhamay.vn/content/images/size/w1600/2023/09/dscf7007-1.jpeg'></img>
                </a>
                <div style={{fontSize: '1.1rem', fontWeight: '400', fontFamily: 'fantasy'}}>11 Hàng Gai</div>
                <div>Tháng 3 01, 2024 — STYLE & STORIES</div>
            </div>
        </div>
        <Map google={this.props.google} zoom={14}>
 
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
      </div>
  );
}

export default Introduce;