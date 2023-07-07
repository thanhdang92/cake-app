import AboutHomePage from './About'
import Category from './Categories'
import ProductListHomePage from './ProductList'
import ProductNewHomePage from './ProductNew'
import SlideShow from './SlideShow'
import * as S from './styles'

function UserContent() {
  return (
    <S.ContentWrapper>
      <SlideShow />
      <Category />
      <AboutHomePage />
      <ProductListHomePage />
      <ProductListHomePage />
      <ProductListHomePage />
      <ProductNewHomePage />
    </S.ContentWrapper>
  )
}

export default UserContent
