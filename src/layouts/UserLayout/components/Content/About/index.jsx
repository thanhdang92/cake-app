import { Col, Row } from 'antd'
import * as S from './styles'

const AboutHomePage = () => {
  return (
    <S.AboutWrapper>
      <S.AboutContainer>
        <Row gutter={12}>
          <Col span={12}>
            <S.AboutImg>
              <img
                src="https://png.pngtree.com/background/20230424/original/pngtree-woman-working-on-bakery-full-of-breads-picture-image_2463188.jpg"
                alt=""
              />
            </S.AboutImg>
          </Col>
          <Col span={12}>
            <S.AboutImg>
              <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20230512/pngtree-bakery-has-many-baked-breads-to-choose-from-image_2494227.png"
                alt=""
              />
            </S.AboutImg>
          </Col>
        </Row>
      </S.AboutContainer>
    </S.AboutWrapper>
  )
}
export default AboutHomePage
