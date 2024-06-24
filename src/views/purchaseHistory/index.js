import '../../App.css';
import './index.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function PurchaseHistory() {
  const username = localStorage.getItem('currentUser')
  const navigate = useNavigate();

  if (!username) {
    window.alert('Vui lòng đăng nhập trước')
    navigate('/home')
  }
  const USDollar = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
  })
  const currentPurchaseHistory = localStorage.getItem(`${username} purchaseHistory`) ? JSON.parse(localStorage.getItem(`${username} purchaseHistory`)) : []

  const [purchaseHistory, setPurchaseHistory] = useState(currentPurchaseHistory)

  return (
    <div className="PurchaseHistory">
      {purchaseHistory.length
        ? <div>{
          purchaseHistory.map(item => {
            return <div className='purchase-history-cards'>
              {item.cart.map(it => {
                return <div className='purchase-history-card'>
                  <div className='left'>
                    <img className='side-preview-img-history' src={it.link}></img>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '8rem', justifyContent: 'flex-start', marginLeft: '1rem' }}>
                      <div style={{ fontWeight: '500', color: 'black' }}>{it.name}</div>
                      <div style={{ color: 'rgb(237, 103, 103)' }}>{USDollar.format(it.discount && it.discount > 0 ? it.price * (100 - it.discount) / 100 : it.price)}</div>
                      <div style={{ fontWeight: '400', color: 'gray' }}>x{it.quantity}</div>
                    </div>
                  </div>
                  <div className='right'>
                    Tổng mặt hàng: {<div style={{ color: 'rgb(237, 103, 103)', marginLeft: '0.5rem' }}>{USDollar.format(it.discount && it.discount > 0 ? it.quantity * it.price * (100 - it.discount) / 100 : it.quantity * it.price)}</div>}
                  </div>
                </div>
              })}
              <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', fontWeight: 'bold' }}>Tổng đơn hàng: {<div style={{ color: 'red', marginLeft: '0.5rem' }}>{USDollar.format(item.total)}</div>}</div>
            </div>
          })
        }</div>
        : <div>Chưa có gì trong giỏ</div>}
    </div>
  );
}

export default PurchaseHistory;