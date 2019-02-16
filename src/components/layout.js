import React from 'react'
import { Animate } from 'react-simple-animate'
import styled from 'styled-components'
import 'typeface-fjalla-one'
import colors from '../styled/colors'
import Menu from '../components/menu'
import Footer from './footer'
import './layout.css'

const Root = styled.div`
  overflow: hidden;

  @media (min-width: 1024px) {
    overflow: initial;
  }
`

export const MenuContext = React.createContext({
  setMenuState: () => {},
})

export default class Layout extends React.PureComponent {
  state = {
    showMenu: false,
    isMenuVisible: false,
  }

  setMenuState = () => {
    this.setState(state => {
      if (state.showMenu) {
        clearTimeout(this.menuTimer)
        this.menuTimer = setTimeout(() => {
          this.setState({
            isMenuVisible: false,
          })
        }, 800)
      }

      return {
        showMenu: !state.showMenu,
        ...(!state.showMenu ? { isMenuVisible: true } : null),
      }
    })
  }

  componentDidMount() {
    if (document.readyState === 'complete') {
      this.timer = setTimeout(() => {
        this.pageLoaded()
      })
    } else {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          this.pageLoaded()
        }
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
    clearTimeout(this.menuTimer)
  }

  pageLoaded = () => {
    document.querySelector('body').style.visibility = 'visible'
    this.setState({
      loaded: true,
    })
  }

  timer

  menuTimer

  render() {
    const { showMenu, isMenuVisible } = this.state

    return (
      <Root>
        <div
          style={{
            background: 'black'
          }}
          onClick={() => {
            if (this.state.showMenu) {
              this.setState({
                showMenu: false,
              })
            }
          }}
        >
          {this.props.children}
        </div>
        <Footer />
      </Root>
    )
  }
}
