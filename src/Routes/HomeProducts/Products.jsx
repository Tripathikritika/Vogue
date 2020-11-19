import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './../../ContextApi/AppContext'
import styles from './../../Styling/Skincare.module.css'

function SkinCare (){
    return (
        <>
            <h3 className={styles.header}>ALL PRODUCTS</h3>
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({productsCare}) => {
                            return (
                                <>
                                    {productsCare.filter(item => item.category === "hairCare" || item.category === "makeup" || item.category === "skincare" || item.category ==="nail" ).map((item)=>
                                    <div key={item.id}>
                                       <Link to={`/products/makeup/${item.id}`}><img src={item.src} alt=""/></Link> 
                                        <p>{item.name}</p>
                                        <p>₹{item.price} <small>{item.off}</small> </p>
                                    </div>
                                    
                                    )}                                    
                                </>
                            )
                        }
                    }
                </AppContext.Consumer>
            </div>
           
        </>
    )
}
export default SkinCare