import React from 'react'
import ReactDOM from 'react-dom'
import './../stylus/button-hover.styl'
import './../stylus/navigation.styl'
import './../stylus/index.styl'

const mobileScreenSize = 869
const floatingMenuScroll = 165

class Navigation extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         isMobile: false,
         hasMobileOverlay: false,
         floatingMenu: false
      }

      // Event listener to make sure the menu is responsive
      window.addEventListener('resize', () => {
         if(window.innerWidth <= mobileScreenSize) this.setState({isMobile: true})
         else this.setState({isMobile: false})
      })

      window.addEventListener('scroll', () => {
         if(window.scrollY >= floatingMenuScroll) this.setState({floatingMenu: true})
         else this.setState({floatingMenu: false})
      })
   }

   componentDidMount() {
      if(window.innerWidth <= mobileScreenSize) this.setState({isMobile: true})
      else this.setState({isMobile: false})

      if(window.scrollY >= floatingMenuScroll) this.setState({floatingMenu: true})
      else this.setState({floatingMenu: false})
   }

   toggleMenu() {
      this.setState({hasMobileOverlay: !this.state.hasMobileOverlay})
   }

   render() {
      return (
         <nav className={this.state.floatingMenu ? '' : 'static-menu'}>
            <img src="img/logo.png" />
            <div className={this.state.isMobile ? 'burgerIcon' : 'hide'} onClick={() => {
               this.toggleMenu()
            }}>
               <div className="burger-icon-one"></div>
               <div className="burger-icon-two"></div>
               <div className="burger-icon-three"></div>
            </div>
            <div className="nav-separator"></div>
            <div className={this.state.isMobile ? 'hide' : 'nav-buttons'}>
               <a href="#"><button className="draw meet">Whitepaper</button></a>
               <a href="#"><button className="draw meet">Coin</button></a>
               <a href="#"><button className="draw meet">Mining</button></a>
               <a href="#"><button className="draw meet">ICO</button></a>
            </div>
            <div className={
               this.state.hasMobileOverlay ? 'nav-overlay' : 'hide'
            } onClick={() => {
               this.toggleMenu()
            }}>
               <div className='nav-overlay-buttons'>
                  <a href="#"><button className="draw meet">Whitepaper</button></a>
                  <a href="#"><button className="draw meet">Coin</button></a>
                  <a href="#"><button className="draw meet">Mining</button></a>
                  <a href="#"><button className="draw meet">ICO</button></a>
               </div>
            </div>

            {/* Clear the floats*/}
            <div style={{'clear': 'both'}}></div>
         </nav>
      )
   }
}

export default Navigation
