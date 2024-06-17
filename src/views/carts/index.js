import '../../App.css';
import './index.css'
import { PRODUCTS } from '../../constants/product'
import { useEffect, useState } from 'react';

function Cart() {
  const currentPath = window.location.pathname.replace('/carts/', '')
  const [productsInCart, setProductsInCart] = useState(currentPath === 'buy_now' ? JSON.parse(localStorage.getItem('buyNow')) : JSON.parse(localStorage.getItem('carts')))
  if (!productsInCart) {
    window.alert('Chưa có sản phẩm, về nhà với Mây nhé!')
    window.location.replace('/home')
  }
  const USDollar = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
  })
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

  const increaseToCartByKey = (key, color) => {
    const nextProductsInCart = [...productsInCart]
    nextProductsInCart.forEach(element => {
        if (element.key === key && element.color === color) {
            element.quantity = element.quantity + 1
        }
    });
    setProductsInCart(nextProductsInCart)
    localStorage.setItem(`${currentPath === 'buy_now' ? 'buy_now' : 'carts'}`, JSON.stringify(nextProductsInCart))
  }

  const decreaseToCartByKey = (key, color) => {
  const nextProductsInCart = [...productsInCart]
    nextProductsInCart.forEach(element => {
        if (element.key === key && element.color === color && element.quantity > 1) {
            element.quantity = element.quantity - 1
        }
    });
    setProductsInCart(nextProductsInCart)
    localStorage.setItem(`${currentPath === 'buy_now' ? 'buy_now' : 'carts'}`, JSON.stringify(nextProductsInCart))
  }

  const setToCartByKey = (key, color, e) => {
    const nextValue = e.target.value
    const nextProductsInCart = [...productsInCart]
    nextProductsInCart.forEach(element => {
        if (element.key === key, element.color === color) {
            element.quantity = nextValue
        }
    });
    setProductsInCart(nextProductsInCart)
    localStorage.setItem(`${currentPath === 'buy_now' ? 'buy_now' : 'carts'}`, JSON.stringify(nextProductsInCart))
  }

  const removeItem = (key, color) => {
    let nextProductsInCart = [...productsInCart]
    nextProductsInCart = nextProductsInCart.filter(element => {
        return element.key !== key || element.color !== color
    });
    setProductsInCart(nextProductsInCart)
    localStorage.setItem(`${currentPath === 'buy_now' ? 'buy_now' : 'carts'}`, JSON.stringify(nextProductsInCart))
  }
  
  return (
      <div className="body">
        <div className='cart-title'>Giỏ hàng</div>
        <div className='carts-container'>
            <div className='cart-body'>
                {productsInCart && productsInCart.map(item => {
                    return (
                        <div className='cart-item' key={item.key}>
                            <div className='row-between'>
                                <div className='remove' onClick={() => removeItem(item.key, item.color)}>X</div>
                                <div className='product-cart-detail'>
                                    <img className='side-preview-img' style={{marginRight: '1rem', marginBottom: '1rem', width: '6rem', height: '9rem', objectFit: 'cover', borderRadius: '0.3rem'}} src={item.link}></img>
                                    <div style={{display: 'flex', flexDirection: 'column', height: '8rem', justifyContent: 'flex-start'}}>
                                        <div style={{fontWeight: '500', color: 'black'}}>{item.name}</div>
                                        <div style={{fontWeight: '400', color: 'red'}}>{USDollar.format(item.price)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='row-between column'>
                                <div style={{display: 'flex', alignItems: 'center', border: '1px solid black', borderRadius: '0.3rem', justifyContent: 'center', padding: '1px', marginTop: '1rem'}}>
                                    <div className='up-down' onClick={() => {decreaseToCartByKey(item.key, item.color)}}>&#8722;</div>
                                    <input type='number' className="number-to-text"  value={item.quantity} min={1} max={99} onChange={(e) => {
                                        setToCartByKey(item.key, item.color, e)
                                    }}></input>
                                    <div className='up-down' onClick={() => {increaseToCartByKey(item.key, item.color)}}>&#43;</div>
                                </div>
                                <div style={{fontWeight: '400', color: 'red', marginBottom: '2rem'}}>Tổng: {USDollar.format(item.quantity * item.price)}</div>
                            </div>
                        </div>
                    )
                })} 
            </div>
            <div className='payment-container'>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Tổng đơn hàng: <p style={{ color: 'red', display: 'inline', marginLeft: '0.5rem' }}>{USDollar.format(total)}</p></div>
                <a className='buy-now-button' style={{ marginLeft: '2rem', marginRight: '2rem', width: 'calc(100% - 8rem)'}} href={`/payment${currentPath === 'buy_now' ? '/buy_now' : ''}`}>Thanh toán</a>
                <img className='img-thanks' src='https://bizweb.dktcdn.net/100/326/676/files/401095303-1404334063791219-5668493901391269089-n.jpg?v=1703486158592'></img>
            </div>
        </div>
      </div>
  );
}

export default Cart;