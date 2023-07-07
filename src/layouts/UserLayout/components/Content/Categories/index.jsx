import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import * as S from './styles'

function Category() {
  return (
    <S.CategoryWrapper>
      <S.CategoryContainer>
        <Row justify="space-around">
          <Col span={8}>
            <Link to="/banh-mi">
              <S.CategoryItem>
                <S.CategoryImg>
                  <img
                    src="https://hinhanh.webvua.com/images/item_category/4807/resize/4200400006300.jpg"
                    alt=""
                  />
                </S.CategoryImg>
                <S.CategoryName>Bánh Mì</S.CategoryName>
              </S.CategoryItem>
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/banh-ngot">
              <S.CategoryItem>
                <S.CategoryImg>
                  <img
                    src="https://hinhanh.webvua.com/images/item_category/4807/resize/6004412000315.jpg"
                    alt=""
                  />
                </S.CategoryImg>
                <S.CategoryName>Bánh Ngọt</S.CategoryName>
              </S.CategoryItem>
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/bua-sang">
              <S.CategoryItem>
                <S.CategoryImg>
                  <img
                    src="https://hinhanh.webvua.com/images/item_category/4807/resize/3002638808006.jpg"
                    alt=""
                  />
                </S.CategoryImg>
                <S.CategoryName>Bữa Sáng</S.CategoryName>
              </S.CategoryItem>
            </Link>
          </Col>
        </Row>
      </S.CategoryContainer>
    </S.CategoryWrapper>
  )
}

export default Category
