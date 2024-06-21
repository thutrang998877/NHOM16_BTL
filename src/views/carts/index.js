import '../../App.css';
import './index.css'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Cart() {
  const currentPath = window.location.pathname.replace('/carts/', '')
  const navigate = useNavigate();
  const [productsInCart, setProductsInCart] = useState(currentPath === 'buy_now' ? JSON.parse(localStorage.getItem('buyNow')) : JSON.parse(localStorage.getItem('carts')))
  const USDollar = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
  })
  let initTotal = 0
  // tính tổng giá tiền
  initTotal = productsInCart ? productsInCart.forEach(item => {
    // next price -> Giá mỗi loại sản phẩm = số lượng * đơn giá * discount (nếu có)
    const nextPrice = item.discount && item.discount > 0 ? item.price * item.quantity * (100 - (+item.discount)) / 100 : item.price * item.quantity
    // Mỗi lần tìm được giá mỗi loại sản phẩm thì + thêm vào tổng
    initTotal += nextPrice
  }) : 0

  const [total, setTotal] = useState(initTotal)

  useEffect(() => {
    if (!productsInCart || productsInCart.length === 0) {
        window.alert('Chưa có sản phẩm, về nhà với Mây nhé!')
        navigate('/home')
        return
    }
    let initTotal = 0
    productsInCart && productsInCart.forEach(item => {
        initTotal += item.discount && item.discount > 0 ? item.price * item.quantity * (100 - (+item.discount)) / 100 : item.price * item.quantity
    })

    setTotal(initTotal)
  }, [productsInCart])

  // Tăng số lượng 1 loại sản phẩm lên
  const increaseToCartByKey = (key, color) => {
    const nextProductsInCart = [...productsInCart]
    // tim xem đang tăng số lượng sản phẩm nào
    nextProductsInCart.forEach(element => {
        if (element.key === key && element.color === color) {
            // tăng số lượng lên 1
            element.quantity = element.quantity + 1
        }
    });
    // set lại productInCart
    setProductsInCart(nextProductsInCart)
    // set lại localStorage
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

  // set value vào sản phẩm 
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
    // Lọc sản phẩm bị xóa ra khỏi productInCart
    nextProductsInCart = nextProductsInCart.filter(element => {
        return element.key !== key || element.color !== color
    });
    // set lại product
    setProductsInCart(nextProductsInCart)
    localStorage.setItem(`${currentPath === 'buy_now' ? 'buy_now' : 'carts'}`, JSON.stringify(nextProductsInCart))
  }
  
  return (
      <div className="body">
        <h2 className='cart-title'>Giỏ hàng</h2>
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
                                        <div style={{fontWeight: '400', color: 'red'}}>{USDollar.format(item.discount && item.discount > 0 ? item.price * (100 - (+item.discount)) / 100 : item.price)}</div>
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
                                <div style={{fontWeight: '400', color: 'red', marginBottom: '2rem'}}>Tổng: {USDollar.format(item.discount && item.discount > 0 ? item.quantity * item.price * (100 - item.discount) / 100 : item.quantity * item.price)}</div>
                            </div>
                        </div>
                    )
                })}
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem'}}>Tổng đơn hàng: <p style={{ color: 'red', display: 'inline', marginLeft: '0.5rem' }}>{USDollar.format(total)}</p></div>
                <a className='buy-now-button' style={{ marginLeft: '2rem', marginRight: '2rem', width: 'calc(100% - 8rem)', fontSize: '1.5rem', marginBottom: '2rem'}} href={`/payment/${currentPath === 'buy_now' ? 'buy_now' : ''}`}>Thanh toán</a>
            </div>
            <div className='payment-container'>
                <img className='img-thanks' src='https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/448395849_445719281558106_7943776296268036452_n.png?stp=dst-png_p1080x2048&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K31j71mUibEQ7kNvgE4nhD2&_nc_ht=scontent.fhan14-2.fna&oh=03_Q7cD1QHq3qgdZFCDA2sjKBwVVJ5esN2VuHFoFoRFU7t4pgCT4w&oe=669CC4CC'></img>
            </div>
        </div>
      </div>
  );
}

export default Cart;