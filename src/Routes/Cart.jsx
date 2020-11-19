import React from 'react'
import { AppContext } from '../ContextApi/AppContext'
import styles from './../Styling/Cart.module.css'

function Cart(props){
   
    return(
        
        <>
        {/* <h2>Cart</h2> */}
        <div >
            <AppContext.Consumer>
                {
                    ({cartArray,onDelete,isAuth})=> 
                    {
                        let total = 0
                        const addTotal = (item) =>{
                            total += Number(item)
                        }
                        console.log("HISTORY" , props.history)
                        let values = cartArray.map((item) => addTotal (item.price))
                        if(!isAuth){

                            return props.history.push('/login')
                        }
                        return(
                            <div  >
                            {
                                cartArray.map(item =>
                                    <>
                                    <div className={styles.main}>
                                        <div className={styles.displayFlex}>  
                                            <div >
                                                <img src={item.src} alt=""/>
                                            </div> 
                                            <div>
                                                <div className={styles.description}>
                                                    <h4> {item.name} <small>({item.ml})</small></h4>
                                                </div>
                                                    <p><b> MRP: ₹ {item.price}</b></p>
                                                </div>
                                            <div className={styles.extras}>
                                                <div>
                                                    <button className={styles.button} onClick={()=> onDelete(item)}> <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                    </>

                                    )
                                }
                                <hr/>
                                <div className={styles.totalDiv}>
                                    <b className={styles.total}> Total : {total}</b>
                                    <button>Proceed</button>
                            </div>
                            </div>
                        )
                    }                    
                }
            </AppContext.Consumer>
        </div>
       
        </>
    )
}
export default Cart