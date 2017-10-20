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
            <div className="text-block">
               <h1>ICO Website</h1>
               <p>We proud ourselves for producing amazing products</p>
               <p>But we need monies to pay our bills (and cars)</p>
               <p>That's why you're here, to give us your monies</p>
               <button>Join Our ICO</button>
            </div>
            <img className="big-circle" src="img/big-circle.png" />
            <img className="medium-circle" src="img/medium-circle.png" />
            <img className="small-circle" src="img/small-circle.png" />
         </div>
      )
   }
}

ReactDOM.render(
   <Main />,
   document.querySelector('#root')
)
