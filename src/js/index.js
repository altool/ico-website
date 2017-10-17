import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './navigation'

class Main extends React.Component {
   constructor(props) {
      super()
   }

   render() {
      return(
         <div>
            <Navigation />
         </div>
      )
   }
}

ReactDOM.render(
   <Main />,
   document.querySelector('#root')
)
