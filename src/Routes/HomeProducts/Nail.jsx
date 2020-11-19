import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './../../ContextApi/AppContext'
import styles from './../../Styling/Skincare.module.css'

function Nail (){
    return (
        <>
            <h1 className={styles.header}>MAKEUP PRODUCTS FOR NAILS</h1>
            <div className={styles.facewash}>
                <div className={styles.leftDiv}> 
                    <h2>The Classic Blue Beauty Edit</h2>
                    <p style={{textAlign:'center'}}>Say hello to Classic Blue, the Pantone Color of 
                    the Year 2020 that gave makeup junkies (and us!) a field day. Finally, here is a color we're familiar with!
                        <br/> Shop Now >
                    </p>
                </div>
                <div>
                    <img src="https://www.nykaa.com/media/categoryInfo/art_banner_image/theclassicbeautyeditcontentbanner_1.jpg" alt=""/>
                </div>
            </div>
            <h1 className={styles.header}>ALL PRODUCTS FOR NAILS</h1>
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({productsCare}) => {
                            return (
                                <>
                                    {productsCare.filter(item => item.category === "nail").map((item)=>
                                    <div key={item.id}>
                                       <Link to={`/products/nail/${item.id}`}><img src={item.src} alt=""/></Link> 
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
export default Nail