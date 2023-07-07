import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  padding: 10px 0;
  margin: 0;
  background-image: url(http://4807.webvua.com/bizweb.dktcdn.net/100/366/378/themes/736342/assets/br-bg8293.png?1569937621356);
  text-align: center;
  padding-bottom: 80px;
  background-position: 50% 100%;
  background-size: cover;
  text-align: center;
  z-index: 9999;
  position: relative;
`
export const HeaderContainer = styled.div`
  width: 1170px;
  padding: 0 10px;
  margin: 0 auto;
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderLeftMenu = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50px;
  background-color: rgba(221, 172, 85, 0.6);
  & span {
    position: absolute;
    left: 15px;
    width: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #fff;
  }
  &:hover {
    background-color: #ddac55;
    cursor: pointer;
  }
`
export const HeaderLeftPhoneNumber = styled.span`
  margin-left: 10px;
  & a {
    text-decoration: none;
    color: #333;
  }
  & a:hover {
    color: #ddac55;
    cursor: pointer;
  }
`
export const HeaderLogo = styled.div`
  text-align: center;
  &img {
    width: 100%;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 30px;
  align-items: center;
`
export const HeaderRightCard = styled.div`
  padding: 10px;

  & a {
    color: #333;
  }
`
export const HeaderRightLogin = styled.div`
  padding: 10px;
`
export const HeaderRightSearch = styled.div`
  padding: 10px;
  & a {
    color: #333;
  }
`
