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
  & img {
    width: 120px;
    height: 120px;
    transform-origin: 50% 50%;
    margin-bottom: 0;

    @media (min-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }

  & svg {
    fill: white;
  }
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
        <svg width={200} height={150} viewBox="0 0 100 100">
          <g>
            <path d="M50,5C25.2,5,5,25.1,5,50s20.2,45,45,45s45-20.1,45-45S74.8,5,50,5z M50,89.4c-7.2,0-14-2-19.8-5.4l19.6-34l19.7,34.2
            C63.7,87.5,57.1,89.4,50,89.4z M66.6,44.1c-4.6,0-8.4-3.7-8.4-8.4c0-4.6,3.7-8.4,8.4-8.4c4.7,0,8.5,3.7,8.4,8.4
            C75,40.3,71.3,44.1,66.6,44.1z" />
          </g>
        </svg>
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
