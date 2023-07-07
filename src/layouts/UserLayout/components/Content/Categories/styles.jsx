import styled from 'styled-components'

export const CategoryWrapper = styled.div`
  width: 100%;
`
export const CategoryContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
`
export const CategoryItem = styled.div`
  color: #000;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #ddac55;
  }
`

export const CategoryName = styled.div`
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  font-size: 20px;
`
export const CategoryImg = styled.div`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
