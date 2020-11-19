import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './../../ContextApi/AppContext'
import styles from './../../Styling/Skincare.module.css'

function SkinCare (){
    return (
        <>
            <h2 className={styles.header}>SKIN CARE PRODUCTS COLLECTION </h2>
            <div className={styles.facewash}>
                <div className={styles.leftDiv}> 
                    <h2>The Right Skincare Regime For Every Age</h2>
                    <p style={{textAlign:'center'}}>The Skincare By Age Buying Guide It's important to note
                    that great skin in your 40s is always the result of adequate care and attention in your 20s.
                    Therefore, we bring you a guide to the right skincare regime for every age
                        <br/>Shop Now>
                    </p>
                </div>
                <div>
                    <img src="https://www.nykaa.com/media/categoryInfo/art_banner_image/skincarebyage_contentbanner_2_.jpg" alt=""/>
                </div>
            </div>
            <h2 className={styles.header}>FACE WASH PRODUCTS COLLECTION</h2>
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({productsCare}) => {
                            return (
                                <>
                                    {productsCare.filter(item => item.userdFor === "face").map((item)=>
                                    <div key={item.id}>
                                       <Link to={`/products/skincare/${item.id}`}><img src={item.src} alt=""/></Link> 
                                        <p>{item.name}</p>
                                        <p>{item.price} <small>{item.off}</small> </p>
                                    </div>
                                    
                                    )}
                                </>
                            )
                        }
                    }
                </AppContext.Consumer>
            </div>
           
            <h2 className={styles.header}>MOISTURIZERS PRODUCTS COLLECTION </h2>
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({productsCare}) => {
                            return (
                                <>
                                    {productsCare.filter(item => item.userdFor === "moisturizes").map((item)=>
                                    <div key={item.id}>
                                       <Link to={`/products/skincare/${item.id}`}><img src={item.src} alt=""/></Link> 
                                        <p>{item.name}</p>
                                        <p>{item.price} <small>{item.off}</small> </p>
                                    </div>
                                    )}
                                </>

                            )
                        }
                    }
                </AppContext.Consumer>
            </div>
                    
            <h2 className={styles.header}>MASKS PRODUCTS COLLECTION </h2>
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({productsCare}) => {
                            return (
                                <>
                                    {productsCare.filter(item => item.userdFor === "mask").map((item)=>
                                    <div key={item.id}>
                                       <Link to={`/products/skincare/${item.id}`}><img src={item.src} alt=""/></Link> 
                                        <p>{item.name}</p>
                                        <p>{item.price} <small>{item.off}</small> </p>
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