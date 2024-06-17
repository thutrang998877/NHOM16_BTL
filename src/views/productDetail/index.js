import './productDetail.css'
import { getProductById, getProductsByCollection } from '../../helper/common';
import { useEffect, useState } from 'react';

function ProductDetail() {
  const USDollar = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
  })

  const [previewingLink, setPreviewingLink] = useState('')

  const productId = window.location.search.replace('?id=', '')
  if (!productId) {
    window.location.replace('/home')
  }
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

  const clickIncrease = () => {
    setNumOfProduct(numOfProduct + 1)
  }

  const clickDecrease = () => {
    if (numOfProduct === 1) return
    setNumOfProduct(numOfProduct - 1)
  }

  const addToCart = () => {
    if (currentColor === '') {
        window.alert('Vui lòng chọn màu!')
        return
    }

    const currentCarts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : null
    if (!currentCarts) {
        localStorage.setItem('carts', JSON.stringify([{key: currentProduct.key, color: currentColor, quantity: +numOfProduct}]))
    } else {
        const indexSameProductExisted = currentCarts.findIndex(item => item.key === currentProduct.key && item.color === currentColor)
        if (indexSameProductExisted !== -1) {
            currentCarts[indexSameProductExisted].quantity = currentCarts[indexSameProductExisted].quantity + +numOfProduct
            localStorage.setItem('carts', JSON.stringify(currentCarts))
            window.alert('Đã thêm vào giỏ hàng!')
            return
        }
        currentCarts.push({key: currentProduct.key, color: currentColor, quantity: +numOfProduct})
        localStorage.setItem('carts', JSON.stringify(currentCarts))
        window.alert('Đã thêm vào giỏ hàng!')
    }
  }

  return (
      <div className="body">
        <div className='main-detail'>
            <div className='side-preview-img-container' style={{display: 'flex', flexDirection: 'column', marginLeft: '3rem'}}>
                {currentProduct.linksWithAngle.map(item => {
                    return <img onClick={() => {setPreviewingLink(item)}} className='side-preview-img' style={{marginBottom: '1rem', width: '6rem', height: '9rem', objectFit: 'cover', borderRadius: '0.3rem'}} src={item}></img>
                })}
            </div>
            <div className='main-preview-img'>
                <img src={previewingLink ? previewingLink : currentProduct.link} style={{marginLeft: '2rem', width: '20rem', height: '30rem', objectFit: 'cover', borderRadius: '0.3rem'}}></img>
            </div>
            <div style={{display: 'flex', flexGrow: 1, flexDirection: 'column', marginLeft: '3rem', marginRight: '3rem'}}>
                <div style={{fontSize: '1.5rem', fontWeight: '500'}}>{currentProduct.name}</div>
                <div style={{fontWeight: '400', color: 'gray'}}>Designed by: Mây</div>
                <div style={{fontWeight: '400', color: 'red'}}>{USDollar.format(currentProduct.price)}</div>
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
                    <button className='add-to-cart-button' onClick={addToCart}>Thêm vào giỏ</button>
                </div>
                <button className='buy-now-button'>Mua ngay</button>

                <div style={{fontSize: '1.5rem', marginTop: '1rem', fontWeight: 'bold'}}>Mô tả</div>
            </div>
        </div>
        <div className='quick-buy-container'>
            <div className='quick-detail'>
                <img src={currentProduct.link} style={{marginLeft: '2rem', width: '5rem', height: '8rem', objectFit: 'cover'}}></img>
                <div style={{fontWeight: '400', color: 'red', marginLeft: '1rem'}}>{USDollar.format(currentProduct.price)}</div>
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
                <button className='quick-add-to-cart-button' onClick={addToCart}>Thêm vào giỏ</button>
            </div>
        </div>
        <div className='same-collection-container'>
            <h1>Sản phẩm cùng loại</h1>
            <div className='same-collection-cards'>
                {sameProducts.length > 0 && sameProducts.map(it => {
                    return <div className='same-collection-card'>
                        <a className='card-image' href={`/product_detail?id=${it.key}`}>
                            <img src={it.link}></img>
                        </a>
                        <div className='card-product-name'>{it.name}</div>
                        <div className='card-product-price'>{USDollar.format(it.price)}</div>
                    </div>
                })}
            </div>
        </div>
      </div>
  );
}

export default ProductDetail;