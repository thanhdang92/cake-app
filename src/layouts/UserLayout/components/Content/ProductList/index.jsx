import * as S from './styles'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const ProductListHomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }
  return (
    <S.ProductListWrapper>
      <S.ProductListContainer>
        <S.ProductListTitle>Bánh Mì</S.ProductListTitle>
        <S.ProductList>
          <Slider {...settings}>
            <Link to="/product-item">
              <S.ProductItem>
                <S.ProductImg>
                  <img
                    src="https://hinhanh.webvua.com/images/item/4807/resize/0200615262088.png"
                    alt=""
                  />
                </S.ProductImg>
                <S.ProductInfo>
                  <S.ProductInfoTitle>
                    Bánh gạo vị ngọt dịu One-One gói 150g
                  </S.ProductInfoTitle>
                  <S.ProductInfoPrice>9,000₫</S.ProductInfoPrice>
                </S.ProductInfo>
              </S.ProductItem>
            </Link>
            <Link to="/product-item">
              <S.ProductItem>
                <S.ProductImg>
                  <img
                    src="https://hinhanh.webvua.com/images/item/4807/resize/0750302050200.png"
                    alt=""
                  />
                </S.ProductImg>
                <S.ProductInfo>
                  <S.ProductInfoTitle>
                    Bánh gạo vị ngọt dịu One-One gói 150g
                  </S.ProductInfoTitle>
                  <S.ProductInfoPrice>29,000₫</S.ProductInfoPrice>
                </S.ProductInfo>
              </S.ProductItem>
            </Link>
            <Link to="/product-item">
              <S.ProductItem>
                <S.ProductImg>
                  <img
                    src="https://hinhanh.webvua.com/images/item/4807/resize/2555450274082.png"
                    alt=""
                  />
                </S.ProductImg>
                <S.ProductInfo>
                  <S.ProductInfoTitle>
                    Bánh Yến Mạch + mè đen Fine - Dành Cho Người Ăn Kiêng, Tiểu
                    Đường
                  </S.ProductInfoTitle>
                  <S.ProductInfoPrice>92,000₫</S.ProductInfoPrice>
                </S.ProductInfo>
              </S.ProductItem>
            </Link>
            <Link to="/product-item">
              <S.ProductItem>
                <S.ProductImg>
                  <img
                    src="https://hinhanh.webvua.com/images/item/4807/resize/7373392361004.png"
                    alt=""
                  />
                </S.ProductImg>
                <S.ProductInfo>
                  <S.ProductInfoTitle>
                    Bánh Yến Mạch + gạo lức Fine - Dành Cho Người Ăn Kiêng, Tiểu
                    Đường
                  </S.ProductInfoTitle>
                  <S.ProductInfoPrice>95,000₫</S.ProductInfoPrice>
                </S.ProductInfo>
              </S.ProductItem>
            </Link>
            <Link to="/product-item">
              <S.ProductItem>
                <S.ProductImg>
                  <img
                    src="https://hinhanh.webvua.com/images/item/4807/resize/2220027202222.png"
                    alt=""
                  />
                </S.ProductImg>
                <S.ProductInfo>
                  <S.ProductInfoTitle>
                    Bánh xốp Fullo Vani Sữa (Fullo Stick Wafer Vanilla Milk)
                  </S.ProductInfoTitle>
                  <S.ProductInfoPrice>12,000₫</S.ProductInfoPrice>
                </S.ProductInfo>
              </S.ProductItem>
            </Link>
            <Link to="/product-item">
              <S.ProductItem>
                <S.ProductImg>
                  <img
                    src="https://hinhanh.webvua.com/images/item/4807/resize/0702024200243.png"
                    alt=""
                  />
                </S.ProductImg>
                <S.ProductInfo>
                  <S.ProductInfoTitle>
                    Bánh gạo vị ngọt dịu One-One gói 150g
                  </S.ProductInfoTitle>
                  <S.ProductInfoPrice>35,000₫</S.ProductInfoPrice>
                </S.ProductInfo>
              </S.ProductItem>
            </Link>
          </Slider>
        </S.ProductList>
      </S.ProductListContainer>
    </S.ProductListWrapper>
  )
}
export default ProductListHomePage
