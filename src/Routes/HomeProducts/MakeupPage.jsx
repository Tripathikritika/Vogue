import React from 'react'
import { AppContext } from './../../ContextApi/AppContext'
import styles from './../HomeProducts/Products.module.css'
import { Link } from 'react-router-dom'

class MakeupPage extends React.Component{
   constructor(props){
       super(props)

   }
   render(){
       const { id } = this.props.match.params
       const { productsCare ,addToCart} = this.context

       console.log(this.context)
       const item =  productsCare.find(item=>item.id === Number(id))
       if(item){
           return(
               <div className={styles.main}>

                <div className={styles.displayFlex}>
                        <div className={styles.image}>
                            <img src={item.src} alt=""/>
                        </div>
                        <hr/>
                        <div className={styles.description}>
                            <h4>{item.title} <br/> <small>({item.ml})</small></h4>
                            
                            <p>{item.stars} | {item.rating}</p>
                            <p><b>MRP: ₹ {item.price} |{item.off}</b></p>
                            <p>{item.description}</p>
                            <Link to='/cart'><button className={styles.button} onClick={() => addToCart(item)}>ADD TO BAG <i class="fas fa-shopping-bag"></i></button></Link>
                        </div>
                </div>
               </div>
           )
       }
       else{
        return ( 
            <>
                <h1 className={styles.header}>Product does not exist</h1>
            </>
        )
    }
   }
}
MakeupPage.contextType = AppContext
export default MakeupPage 