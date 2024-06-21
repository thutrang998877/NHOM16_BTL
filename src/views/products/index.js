import '../../App.css';
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { PRODUCTS } from '../../constants/product'
import { useEffect, useState } from 'react';
import { getProductsByCollection } from '../../helper/common';

const filterAndReconstructProducts = (products, targetCollection, chunkSize) => {
  const flattenedProducts = products.flat();

  const filteredProducts = flattenedProducts.filter(product => product.collection === targetCollection);

  const chunkedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += chunkSize) {
    chunkedProducts.push(filteredProducts.slice(i, i + chunkSize));
  }

  return chunkedProducts;
};

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

const orderProductsByName = (products, chunkSize, isIncrease) => {
  const orderFlag = isIncrease ? 1 : -1
  const flattenedProducts = products.flat();

  const orderedProducts = flattenedProducts.sort((a, b) => orderFlag * (a.name - b.name));

  const chunkedProducts = [];
  for (let i = 0; i < orderedProducts.length; i += chunkSize) {
    chunkedProducts.push(orderedProducts.slice(i, i + chunkSize));
  }

  return chunkedProducts;
};

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

function Product() {
  const urlParams = new URLSearchParams(window.location.search);
  const nameQuery = urlParams.get('name')
  const collectionQuery = urlParams.get('collection')
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
            <h1 style={{display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '0'}}>Tất cả sản phẩm</h1>
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
                          <img src={it.link} style={{width: '100%', objectFit: 'cover'}}></img>
                        </a>
                        <div className='card-detail'>
                          <div className='card-product-name'>
                            {it.name} 
                          </div>
                          <div className='card-product-price'>
                            {USDollar.format(it.price)}
                          </div>
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
                            <div className='card-product-price'>{USDollar.format(it.price)}</div>
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