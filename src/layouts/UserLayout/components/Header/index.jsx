import { Button, Row, Col } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import * as S from './styles'
import {
  MenuOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'

function AdminHeader() {
  const navigate = useNavigate()
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Row align="middle">
          <Col span={8}>
            <S.HeaderLeft>
              <S.HeaderLeftMenu>
                <MenuOutlined />
              </S.HeaderLeftMenu>
              <S.HeaderLeftPhoneNumber>
                <p>
                  <Link to={ROUTES.USER.HOME}>
                    <PhoneOutlined />
                    0935161910
                  </Link>
                </p>
              </S.HeaderLeftPhoneNumber>
            </S.HeaderLeft>
          </Col>
          <Col span={8}>
            <S.HeaderLogo>
              <Link to={ROUTES.USER.HOME}>
                <img
                  src="https://hinhanh.webvua.com/images/logo/4807/resize/0173075530402.png"
                  alt=""
                />
              </Link>
            </S.HeaderLogo>
          </Col>
          <Col span={8}>
            <S.HeaderRight>
              <S.HeaderRightSearch>
                <Link to="/search">
                  <SearchOutlined />
                </Link>
              </S.HeaderRightSearch>
              <S.HeaderRightCard>
                <Link to="/cart">
                  <ShoppingCartOutlined />
                </Link>
              </S.HeaderRightCard>
              <S.HeaderRightLogin>
                <Button>Login</Button>
              </S.HeaderRightLogin>
            </S.HeaderRight>
          </Col>
        </Row>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default AdminHeader
