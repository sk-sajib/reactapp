
import React, { Component } from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Header from './component/Header'
import Products from './component/Products'
import About from './component/Pages/About'
import axios from 'axios'

var {btnStyle} = require('./component/Style')





class App extends Component {

state = {
  siteTitle: 'is our site title',
 
  
  Products: [],
  Photos: [],
  inputText: '',
  sp:false,

}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(
  res => this.setState({
    Photos:res.data
  })
  )
}





showProducts= (e) => {
  this.setState({sp: true });
}




  render() {

    var showProductMarkup = ''
    
if (this.state.sp === true) {
 showProductMarkup = <Products items={this.state.Photos}/>
} 
    return (

      <Router>
      <div>
        <Header />
        <Route exact path="/" render={ props => ( 
            <React.Fragment>

            <h2>React {this.state.siteTitle}</h2>
         
          <h3>products</h3>
  
          <button style={btnStyle} onClick={this.showProducts} >show all product</button>
          
          {showProductMarkup}

          <a href="/about">Go to about page</a>
  
            </React.Fragment>
          )}/>
          
          <Route path="/about" component={About}/>
          
          

        </div>
       </Router>
     
    )
  }
}




export default App;




  //  {
  //        this.state.products.map(( products) => (
  //         <li>NAME: {products.Name}<br/> WRITTER: {products.Writer} <br/> DESC: {products.Desc} <br/> </li>
  //        ))
  //       }



        //  <ul>
        // {
        //   this.props.items.map( Products=> <div>
            
        //     <li>{Products.Name}</li>
        //     <li>{Products.Writer}</li>
        //     <li>{Products.Desc}</li> <br/>
            
        //     </div>)
        // }
        // </ul>

//<Products items={this.state.Products}/>

        // <form action="">
        //  <input type="text" placeholder="my text" onChange={this.testHandle}/>
        //  </form>


    