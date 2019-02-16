import React from 'react'
import styled from 'styled-components'
import colors from '../styled/colors'
import TopMenuGroup from './topMenuGroup'
import { H1, H2 } from '../styled/typography'

const HeaderWrapper = styled.div`
  background: ${colors.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 700px;

  @media (max-height: 813px) {
    height: 100vh;
  }
`

const Logo = styled.div`
  width: 180px;
  height: 180px;
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LogoMask = styled.div`
  width: 165px;
  height: 165px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
  position: absolute;
  border-bottom: 91px solid black;
  top: 75px;
  left: 1px;
`

const Triangle2 = styled.span`
  width: 0;
  height: 0;
  border-left: 55px solid transparent;
  border-right: 55px solid transparent;
  position: absolute;
  border-bottom: 120px solid black;
  top: 55px;
  left: 55px;
`

const Heading = styled.div`
  margin-top: 40px;
  font-family: 'Fjalla One', sans-serif;
`

const Code = styled.span`
  color: ${colors.white};
  display: block;
  padding: 10px 20px;
  text-align: center;
  border: 1px solid #ffffff17;
  border-radius: 4px;
  margin: 50px auto 0;
  align-content: unset;
`

function Header() {
  return (
    <HeaderWrapper>
      <TopMenuGroup />

      <Logo>
        <LogoMask>
          <Triangle />
          <Triangle2 />
        </LogoMask>
      </Logo>

      <Heading>
        <H1>React Simple Img</H1>
        <H2>Elegant lazy load images</H2>
      </Heading>

      <Code>
        <code>npm install --S react-simple-img</code>
      </Code>
    </HeaderWrapper>
  )
}

export default Header
