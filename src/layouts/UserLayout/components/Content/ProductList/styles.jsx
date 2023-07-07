import styled from 'styled-components'

export const ProductListWrapper = styled.div`
  width: 100%;
`
export const ProductListContainer = styled.div`
  width: 80%;
  margin: 50px auto;
`
export const ProductListTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
`
export const ProductList = styled.div`
  width: 100%;
`
export const ProductItem = styled.div`
  padding: 20px;
`
export const ProductImg = styled.div`
  width: 100%;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  & img {
    width: 100%;
  }
`
export const ProductInfo = styled.div`
  width: 100%;
  text-align: center;
`
export const ProductInfoTitle = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: #000;
`
export const ProductInfoPrice = styled.div`
  margin-top: 10px;
  color: #ddac55;
`
