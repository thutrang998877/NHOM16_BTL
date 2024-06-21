import '../../App.css';
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BANNERSBYCOLLECTION, PRODUCTS } from '../../constants/product'
import { useEffect, useState } from 'react';
import { getProductsByCollection } from '../../helper/common';

// Lọc sản phẩm theo collections
const filterAndReconstructProducts = (products, targetCollection, chunkSize) => {
  const flattenedProducts = products.flat();

  const filteredProducts = flattenedProducts.filter(product => product.collection === targetCollection);

  const chunkedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += chunkSize) {
    chunkedProducts.push(filteredProducts.slice(i, i + chunkSize));
  }

  return chunkedProducts;
};


// Lọc sản phẩm theo tên
const filterAndReconstructByNameProducts = (products, name, chunkSize) => {
  const flattenedProducts = products.flat();

  const filteredProducts = flattenedProducts.filter(product => product.name.toUpperCase().includes(name.toUpperCase()));

  const chunkedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += chunkSize) {
    chunkedProducts.push(filteredProducts.slice(i, i + chunkSize));
  }
  
  if (chunkedProducts.length === 0) {
    return [[]]
  }

  return chunkedProducts;
};

// sap xem theo ten
const orderProductsByName = (products, chunkSize, isIncrease) => {
  const orderFlag = isIncrease ? 1 : -1
  const flattenedProducts = products.flat();

  const orderedProducts = flattenedProducts.sort((a, b) => orderFlag * a.name.localeCompare(b.name));

  const chunkedProducts = [];
  for (let i = 0; i < orderedProducts.length; i += chunkSize) {
    chunkedProducts.push(orderedProducts.slice(i, i + chunkSize));
  }

  return chunkedProducts;
};

// sap xep theo gia
const orderProductsByPrice = (products, chunkSize, isIncrease) => {
  const flattenedProducts = products.flat();
  const orderFlag = isIncrease ? 1 : -1

  const orderedProducts = flattenedProducts.sort((a, b) => orderFlag * (a.price - b.price));

  const chunkedProducts = [];
  for (let i = 0; i < orderedProducts.length; i += chunkSize) {
    chunkedProducts.push(orderedProducts.slice(i, i + chunkSize));
  }

  return chunkedProducts;
}

const getBannerByCollection = (collection) => {
  if (Object.keys(BANNERSBYCOLLECTION).includes(collection)) {
    return BANNERSBYCOLLECTION[collection]
  }

  return BANNERSBYCOLLECTION.default
}

const getCollectionConvertToVN = (collection) => {
  switch(collection) {
    case 'spring':
      return 'Mùa xuân'
    case 'summer':
      return 'Mùa hạ'
    case 'fall':
      return 'Mùa thu'
    case 'winter':
      return 'Mùa đông'
    default: return ''
  }
}

function Product() {
  const urlParams = new URLSearchParams(window.location.search);
  // lay gia tri tim kiem
  const nameQuery = urlParams.get('name')
  const collectionQuery = urlParams.get('collection')
  const [banners, setBanner] = useState(getBannerByCollection(collectionQuery))
  const [currentProduct, setCurrentProduct] = useState(collectionQuery ? filterAndReconstructProducts(PRODUCTS, collectionQuery, 4) : (nameQuery ? filterAndReconstructByNameProducts(PRODUCTS, nameQuery, 4) : PRODUCTS))

  const [sameProducts, setSameProducts] = useState(currentProduct[0].length ? getProductsByCollection(currentProduct[0][0].collection, 5) : [[]])
  const [showingItem, setShowingItem] = useState(currentProduct.length > 1 ? [currentProduct[0], currentProduct[1]] : [currentProduct[0]])
  const numOfPage = currentProduct ? Math.ceil(currentProduct.length / 2) : 0
  const [pages, setPages] = useState(Array.from(Array(numOfPage).keys()))
  const USDollar = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
  })
  const [orderBy, setOrderBy] = useState({
    name: 'date',
    isIncrease: true
  })

  const changeOrder = (type, nextIsIncrease) => {
    if (type === orderBy.name) {
      setOrderBy({
        name: type,
        isIncrease: nextIsIncrease
      })
    } else {
      setOrderBy({
        name: type,
        isIncrease: nextIsIncrease
      })
    }
  }

  const handleSelectChange = (e) => {
    const valueChanged = e.target.value
    switch(valueChanged) {
      case 'AZ':
        changeOrder('name', true)
        break
      case 'ZA':
        changeOrder('name', false)
        break
      case 'increase':
        changeOrder('price', true)
        break
      case 'decrease':
        changeOrder('price', false)
      break
    }
  }

  useEffect(() => {
    if (orderBy.name === 'name') {
      setCurrentProduct(orderProductsByName(currentProduct, 4, orderBy.isIncrease))
    } else if (orderBy.name === 'price') {
      setCurrentProduct(orderProductsByPrice(currentProduct, 4, orderBy.isIncrease))
    }
  }, [orderBy])

  useEffect(() => {
    const numOfPage = currentProduct ? Math.ceil(currentProduct.length / 2) : 0
    setShowingItem(currentProduct.length > 1 ? [currentProduct[0], currentProduct[1]] : [currentProduct[0]])
    setPages(Array.from(Array(numOfPage).keys()))
  }, [currentProduct])

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
        {currentProduct[0].length ? (
          <>
            <h1 style={{display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '0'}}>{collectionQuery ? `Bộ sưu tập ${getCollectionConvertToVN(collectionQuery)}` : 'Tất cả sản phẩm'}</h1>
            <div className='filter-zone'>
              <label for="orders" style={{marginRight: '0.5rem'}}>Sắp xếp:</label>
              <select id="orders" name="orders" onChange={handleSelectChange}>
                <option value="AZ">A - Z</option>
                <option value="ZA">Z - A</option>
                <option value="increase">Giá tăng dần</option>
                <option value="decrease">Giá giảm dần</option>
              </select>
            </div>
            {showingItem.map(item => {
              return (
                <div className='card-container'>
                  {item.map(it => {
                    return (
                      <div className='card individual-card' key={it.key}>
                        <a className='card-image' href={`/product_detail?id=${it.key}`}>
                          {it.type && <div style={{position: 'absolute', right: '1rem', top: '0.3rem', border: '1px solid white', padding: '2px', color: 'white', borderRadius: '0.2rem'}}>{it.type}</div>}
                          <img src={it.link} style={{width: '100%', objectFit: 'cover'}}></img>
                        </a>
                        <div className='card-detail'>
                          <div className='card-product-name'>
                            {it.name} 
                          </div>
                          <div className='card-product-price'>
                            {USDollar.format(it.discount && it.discount > 0 ? it.price * (100 - it.discount) /100 : it.price)}
                          </div>
                          {it.discount && it.discount > 0 && (
                            <div className='card-product-discount-info'>
                              <div style={{textDecoration: 'line-through'}}>{USDollar.format(it.price)}</div>
                              <div style={{color: 'red', marginLeft: '0.5rem'}}>
                                -{it.discount}%
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}

            <div style={{width: 'calc(100% - 3rem)', display: 'flex', marginBottom: '2rem', marginTop: '1rem', justifyContent: 'center', marginRight: '3rem'}}>
              {pages.map(item => {
                return <button style={{marginRight: '0.5rem'}} onClick={() => {
                  if ((item + 1) * 2 > currentProduct.length) {
                    setShowingItem([currentProduct[(item + 1) * 2 - 2]])
                    return
                  }
                  setShowingItem([currentProduct[(item + 1) * 2 - 2], currentProduct[(item + 1) * 2 - 1]])
                }}>{item + 1}</button>
              })}
            </div>

            <div className='same-collection-container'>
                <h1>Có thể nàng sẽ thích</h1>
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
          </>
        ) : <h3 style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>Chưa có sản phẩm</h3>}
      </div>
  );
}

export default Product;