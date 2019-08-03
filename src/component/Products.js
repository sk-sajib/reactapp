// import React, { Component } from 'react'

// export default class Products extends Component {
//     render() {

   
//     return  this.props.items.map(( Products, index) => (
//     <li key={index}>NAME: {Products.title}<br/> WRITTER: {Products.id} <br/> DESC: {Products.userId} <br/> </li>
//    ))
        
        
//     }

  
    
// }





import React, { Component } from 'react'

export default class Products extends Component {
    render() {

   
    return  this.props.items.map(( Products, index) => (
    <li key={index}>
    <img src={Products.thumbnailUrl} alt={""}/>
     </li>
   ))
        
        
    }

  
    
}









// return  this.props.items.map(( Products, index) => (
//                     <li key={index}>NAME: {Products.Name}<br/> WRITTER: {Products.Writer} <br/> DESC: {Products.Desc} <br/> </li>
//                    ))
              