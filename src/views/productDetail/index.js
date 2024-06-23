import './productDetail.css'
import { getProductById, getProductsByCollection } from '../../helper/common';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function ProductDetail() {
    const navigate = useNavigate();
  const USDollar = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
  })

  const [previewingLink, setPreviewingLink] = useState('')

  const productId = window.location.search.replace('?id=', '')
  if (!productId) {
    navigate('/home')
  }

  // link with angle -> Ảnh ở side preview
  const [currentProduct, setCurrentProduct] = useState(getProductById(productId))
  const [sameProducts, setSameProducts] = useState(getProductsByCollection(currentProduct.collection, 5))
  const [numOfProduct, setNumOfProduct] = useState(1)
  const handleChangeNumOfProduct = (e) => {
    setNumOfProduct(+e.target.value)
  }
  const [currentColor, setCurrentColor] = useState('')

  const handleSelectColor = (color) => {
    setCurrentColor(color)
  }

  // tang giá trị của numOfProduct (so san pham muốn mua) lên 1
  const clickIncrease = () => {
    setNumOfProduct(numOfProduct + 1)
  }

  // Giam giá trị của numOfProduct (so san pham muốn mua) lên 1
  const clickDecrease = () => {
    if (numOfProduct === 1) return
    setNumOfProduct(numOfProduct - 1)
  }

  const addToCart = () => {
    // Bat user chọn màu
    if (currentColor === '') {
        window.alert('Vui lòng chọn màu!')
        return
    }

    // get carts từ trong localStorage
    const currentCarts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : null
// chua co gi trong giỏ -> Add sản phẩm mới vào localStorage
    if (!currentCarts) {
        localStorage.setItem('carts', JSON.stringify([{name: currentProduct.name, key: currentProduct.key, color: currentColor, quantity: +numOfProduct, link: currentProduct.link, price: currentProduct.price, discount: currentProduct.discount}]))
    } else {
// Kiểm tra xem trong giỏ có hàng không?
        const indexSameProductExisted = currentCarts.findIndex(item => item.key === currentProduct.key && item.color === currentColor)
// Tìm được sản phẩm giống hệt trong giỏ -> Cộng thêm số lượng vào giỏ
        if (indexSameProductExisted !== -1) {
            currentCarts[indexSameProductExisted].quantity = currentCarts[indexSameProductExisted].quantity + +numOfProduct
            localStorage.setItem('carts', JSON.stringify(currentCarts))
            window.alert('Đã thêm vào giỏ hàng!')
            return
        }
// Trong giỏ chưa có sản phẩm giống sp hiện tại
        currentCarts.push({name: currentProduct.name, key: currentProduct.key, color: currentColor, quantity: +numOfProduct, link: currentProduct.link, price: currentProduct.price, discount: currentProduct.discount})
        localStorage.setItem('carts', JSON.stringify(currentCarts))
        window.alert('Đã thêm vào giỏ hàng!')
    }
  }

  const buyNow = () => {
    if (currentColor === '') {
        window.alert('Vui lòng chọn màu!')
        return
    }

    localStorage.setItem('buyNow', JSON.stringify([{name: currentProduct.name, key: currentProduct.key, color: currentColor, quantity: +numOfProduct, link: currentProduct.link, price: currentProduct.price, discount: currentProduct.discount}]))
    navigate('/carts/buy_now')
  }
//nút + - của dòng 109
//khung dưới các ảnh sản phẩm chi tiết dòng 125
  return (
      <div className="body">
        <div className='main-detail'>
            <div className='side-preview-img-container' style={{display: 'flex', flexDirection: 'column', marginLeft: '3rem', maxHeight: '35rem', overflow: 'scroll'}}>
                {currentProduct.linksWithAngle.map(item => {
                    return <img onClick={() => {setPreviewingLink(item)}} className='side-preview-img' style={{marginBottom: '1rem', width: '6rem', height: '9rem', objectFit: 'cover', borderRadius: '0.3rem'}} src={item}></img>
                })}
            </div>
            <div className='main-preview-img'>
                <img src={previewingLink ? previewingLink : currentProduct.link} style={{width: '100%', height: '35rem', objectFit: 'cover', borderRadius: '0.3rem'}}></img>
            </div>
            <div style={{display: 'flex', width: '40%', flexDirection: 'column', marginLeft: '3rem'}}>
                <div style={{fontSize: '1.8rem', fontWeight: '500'}}>{currentProduct.name}</div>
                <div style={{fontWeight: '400', color: 'gray', marginTop: '0.5rem'}}>Designed by: Mây</div>
                <div style={{fontWeight: '400', color: 'rgb(211, 116, 116)', marginTop: '0.5rem', display: 'flex'}}>
                    {currentProduct.discount && currentProduct.discount > 0 && <div style={{textDecoration: 'line-through', color: 'black', marginRight: '0.5rem'}}>{USDollar.format(currentProduct.price)}</div>}
                    {USDollar.format(currentProduct.discount && currentProduct.discount > 0 ? currentProduct.price * (100 - currentProduct.discount) /100 : currentProduct.price)}
                </div>
                <div className='color-container'>
                    {currentProduct.color.map(it => {
                        return (
                            <div className='circle' style={{backgroundColor: it, border: currentColor === it ? '2px solid black' : '0'}} onClick={() => handleSelectColor(it)}></div>
                        )
                    })}
                </div>
                <div className='add-to-cart-container'>
                    <div style={{display: 'flex', alignItems: 'center', border: '1px solid black', borderRadius: '0.3rem', justifyContent: 'center', padding: '1px'}}>
                        <div className='up-down' onClick={clickDecrease}>&#8722;</div>
                        <input type='number' className="number-to-text"  value={numOfProduct} min={1} max={99} onChange={handleChangeNumOfProduct}></input>
                        <div className='up-down' onClick={clickIncrease}>&#43;</div>
                    </div>
                    <button className='add-to-cart-button' onClick={addToCart}>Thêm vào giỏ hàng</button>
                </div>
                <button className='buy-now-button' onClick={buyNow}>Mua ngay</button>

                <div style={{fontSize: '1.5rem', marginTop: '1rem', fontWeight: 'bold'}}>
                    <div>Mô tả</div>
                    <p style={{marginTop: '1rem', fontWeight: '200', fontSize: '1rem'}}>{currentProduct.description}</p>
                </div>
            </div>
        </div>
        <div className='quick-buy-container'>
            <div className='quick-detail'>
                <img src={currentProduct.link} style={{marginLeft: '2rem', width: '5rem', height: '8rem', objectFit: 'cover'}}></img>
                <div style={{fontWeight: '400', color: 'rgb(211, 116, 116)', marginLeft: '1rem'}}>{USDollar.format(currentProduct.discount && currentProduct.discount > 0 ? currentProduct.price * (100 - currentProduct.discount) /100 : currentProduct.price)}</div>
            </div>
            <div className='add-to-cart-container'>
                <div className='quick-color-container'>
                    {currentProduct.color.map(it => {
                        return (
                            <div className='circle' style={{backgroundColor: it, border: currentColor === it ? '2px solid black' : '0'}} onClick={() => handleSelectColor(it)}></div>
                        )
                    })}
                </div>
                <div style={{display: 'flex', alignItems: 'center', border: '1px solid black', borderRadius: '0.3rem', justifyContent: 'center', padding: '1px'}}>
                    <div className='quick-up-down' onClick={clickDecrease}>&#8722;</div>
                    <input type='number' className="number-to-text quick-number-to-text"  value={numOfProduct} min={1} max={99} onChange={handleChangeNumOfProduct}></input>
                    <div className='quick-up-down' onClick={clickIncrease}>&#43;</div>
                </div>
                <button className='quick-add-to-cart-button' onClick={addToCart}>Thêm vào giỏ hàng</button>
            </div>
        </div>
        <div className='same-collection-container'>
            <h1>CÓ THỂ NÀNG SẼ THÍCH</h1>
            <div className='same-collection-cards'>
                {sameProducts.length > 0 && sameProducts.map(it => {
                    return <div className='same-collection-card'>
                        <a className='card-image-detail' href={`/product_detail?id=${it.key}`}>
                            <img src={it.link}></img>
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

export default ProductDetail;