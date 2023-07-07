import { Col, Row } from 'antd'
import * as S from './styles'

const ProductNewHomePage = () => {
  return (
    <S.ProductNewWrapper>
      <S.ProductNewContainer>
        <Row>
          <Col span={24}>
            <S.ProductNewTitle>Sản Phẩm Mới</S.ProductNewTitle>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6}>
            <S.ProductNewImg>
              <img
                src="https://hinhanh.webvua.com/images/adv/4807/resize/8280308580032.jpg"
                alt=""
              />
            </S.ProductNewImg>
          </Col>
          <Col span={6}>
            <S.ProductNewImg>
              <img
                src="https://hinhanh.webvua.com/images/adv/4807/resize/2102646031155.jpg"
                alt=""
              />
            </S.ProductNewImg>
          </Col>
          <Col span={6}>
            <S.ProductNewImg>
              <img
                src="https://hinhanh.webvua.com/images/adv/4807/resize/5255218286255.jpg"
                alt=""
              />
            </S.ProductNewImg>
          </Col>
          <Col span={6}>
            <S.ProductNewImg>
              <img
                src="https://hinhanh.webvua.com/images/adv/4807/resize/0002070006202.jpg"
                alt=""
              />
            </S.ProductNewImg>
          </Col>
        </Row>
      </S.ProductNewContainer>
    </S.ProductNewWrapper>
  )
}
export default ProductNewHomePage
