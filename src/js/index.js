import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './navigation'
import './../stylus/index.styl'

class Main extends React.Component {
   constructor(props) {
      super()
   }

   render() {
      return(
         <div>
            <Navigation />
            <div className="centered-block">
               <img className="static-logo" src="img/logo.png"/>
            </div>
         </div>
      )
   }
}

ReactDOM.render(
   <Main />,
   document.querySelector('#root')
)
