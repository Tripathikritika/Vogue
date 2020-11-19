import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { AppContext } from './../ContextApi/AppContext'
import styles from './Components.module.css'

class Links extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productsValues : "",
            aboutUs :""
        }
    }
    handleProductsChange = (e)=>{
        const { name ,value } = e.target
        const { history } = this.props
        this.setState({
            [name] : value
        })
        console.log(this.state.history)
        history.push(`/products/${value}`)
    }
    handleAboutChange = (e)=>{
        const { name ,value } = e.target
        const { history } = this.props
        this.setState({
            [name] : value
        })
        console.log(this.state.history)
        history.push(`/about-us/${value}`)
    }
  
    render(){
        const { cartArray } = this.context
        console.log(cartArray)
        console.log(this.props.history)
        return(
            <>
            <div className={styles.links}>
                <div className={styles.logo}>
                    <Link to='/'><i class="fas fa-female"></i></Link>
                </div>
               <div className={styles.mainLinks}> 
                    <div className = {styles.allLinks} >
                            <select  name="productsValues" onChange={this.handleProductsChange} value={this.state.productsValues}>
                                    <option value="">PRODUCTS</option>
                                    {/* <option value="products">All PRODUCTS</option> */}
                                    <option value="allProducts">All Products</option>
                                    <option value="makeup">Makeup</option>
                                    <option value="skincare">Skin Care</option>
                                    <option value="haircare">Hair Care</option>
                                    <option value="nail">Nail Care</option>
                                    <option value="Appliances">Appliances</option>
                            </select>                             
                            <select name="aboutUs" onChange={this.handleAboutChange} value={this.state.aboutUs}>
                                    <option value="">ABOUT US</option>
                                    <option value="whoweare">Who are we?</option>
                                    <option value="contact">Contact us</option>
                            </select>   
                            <Link to='/brands' >BRANDS</Link>
                            <Link to='/fashion'>FASHION</Link>
                            <Link to='/beauty'>BEAUTY ADVICE</Link>
                    </div>
               </div>
               <div className={styles.sideLinks}>
                    <div style={{ marginRight:'170px'}}>
                        <Link to='/login'><i class="far fa-user-circle"></i></Link>
                        <Link to='/search'><i class="fab fa-searchengin"></i></Link>
                        <Link to='/cart'><i class="fa fa-shopping-cart"></i></Link>
                        <h1 style={{position:'absolute',top:'-35px',right:'200px'}}>
                            {
                                cartArray && cartArray.length 
                            }
                        </h1>
                    </div>
               </div> 
            </div>
            </>
        )
    }
   
}
Links.contextType = AppContext
export default Links