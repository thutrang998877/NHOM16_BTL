import '../../App.css';
import './index.css'
import { PRODUCTS } from '../../constants/product'
import { useEffect, useState } from 'react';

function Payment() {
  const USDollar = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
  })
  const [currentSize, setCurrentSize] = useState('')
  const currentPath = window.location.pathname.replace('/payment/', '')
  const [productsInCart, setProductsInCart] = useState(currentPath === 'buy_now' ? JSON.parse(localStorage.getItem('buyNow')) : JSON.parse(localStorage.getItem('carts')))
  if (!productsInCart) {
    window.alert('Chưa có sản phẩm, về nhà với Mây nhé!')
    window.location.replace('/home')
  }
  let initTotal = 0
  initTotal = productsInCart ? productsInCart.forEach(item => {
    initTotal += item.price * item.quantity
  }) : 0

  const [total, setTotal] = useState(initTotal)

  useEffect(() => {
    if (!productsInCart) {
      window.alert('Chưa có sản phẩm, về nhà với Mây nhé!')
      window.location.replace('/home')
    }
    let initTotal = 0
    productsInCart && productsInCart.forEach(item => {
        initTotal += item.price * item.quantity
    })

    setTotal(initTotal)
  }, [productsInCart])

  const clearStorage = () => {
    currentPath === 'buy_now' ? localStorage.setItem('buyNow', null) : localStorage.setItem('carts', null)
  }
  return (
      <div className="body">
        <div style={{marginLeft: '3rem', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem'}}>Thông tin giao hàng</div>
        <div className='payment-body'>
          <form className='information-body' onSubmit={(e) => {
            e.preventDefault()
            if (currentSize === '') {
              window.alert('Vui lòng chọn kích cỡ!')
              return
            }
            window.alert('Cảm ơn bạn đã mua hàng!')
            clearStorage()
          }}>
            <input placeholder='Họ và tên' required></input>
            <input placeholder='Email' required></input>
            <input placeholder='Số điện thoại' type='number' required></input>
            <input placeholder='Địa chỉ' required></input>
            <div className='size-picker-container'>
              <button className={`${currentSize === 'S' ? 'active' : ''}`} onClick={() => {setCurrentSize('S')}}>S</button>
              <button className={`${currentSize === 'M' ? 'active' : ''}`} onClick={() => {setCurrentSize('M')}}>M</button>
              <button className={`${currentSize === 'L' ? 'active' : ''}`} onClick={() => {setCurrentSize('L')}}>L</button>
              <button className={`${currentSize === 'XL' ? 'active' : ''}`} onClick={() => {setCurrentSize('XL')}}>XL</button>
              <button className={`${currentSize === 'XXL' ? 'active' : ''}`} onClick={() => {setCurrentSize('XXL')}}>XXL</button>
            </div>
            <button className='confirm-payment' type='submit'>Hoàn tất đơn hàng</button>
          </form>
          <div className='payment-detail'>
            {productsInCart && productsInCart.map(item => {
              return (
                <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '1rem', marginRight: '1rem', marginTop: '1rem', borderBottom: '1px solid rgb(188, 188, 188)', paddingBottom: '1rem'}}>
                  <div className='product-payment-detail'>
                    <img className='side-preview-img-payment' src={item.link}></img>
                    <div style={{display: 'flex', flexDirection: 'column', height: '8rem', justifyContent: 'flex-start'}}>
                        <div style={{fontWeight: '500', color: 'black'}}>{item.name}</div>
                        <div style={{fontWeight: '400', color: 'gray'}}>x{item.quantity}</div>
                    </div>
                  </div>
                  <div style={{fontWeight: '400', color: 'red', marginBottom: '2rem'}}>{USDollar.format(item.quantity * item.price)}</div>
                </div>
              )
            })}
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '1rem', marginRight: '1rem', marginTop: '1rem', borderBottom: '1px solid rgb(188, 188, 188)', paddingBottom: '1rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '1rem', marginRight: '1rem', marginTop: '1rem'}}>
                <div>Tạm tính</div>
                <div>{USDollar.format(total)}</div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '1rem', marginRight: '1rem', marginTop: '1rem'}}>
                <div>Phí vận chuyển</div>
                <div>0 đ</div>
              </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem', paddingBottom: '1rem'}}>
                <div>Tổng cộng:</div>
                <div>{USDollar.format(total)}</div>
            </div>
            
          </div>
        </div>
      </div>
  );
}

export default Payment;