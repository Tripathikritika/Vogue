import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './../../ContextApi/AppContext'
import styles from './../../Styling/Skincare.module.css'

function SkinCare (){
    return (
        <>
            <h3 className={styles.header}>MAKE UP COLLECTION - MAKEUP ITEMS ONLINE</h3>
            <div className={styles.facewash}>
                <div className={styles.leftDiv}> 
                    <h2>Top Beauty Looks Trending In 2020</h2>
                    <p style={{textAlign:'center'}}>Ahead, an inspirational moodboard and a 
                    foolproof guide to the most worth-it makeup to buy now
                        <br/> Shop Now >
                    </p>
                </div>
                <div>
                    <img src="https://www.nykaa.com/media/categoryInfo/art_banner_image/topmakeuptrends_contentbanner.jpg" alt=""/>
                </div>
            </div>
                <h4 className={styles.header}>EYE KAJAL ONLINE SHOPPING </h4>
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({productsCare}) => {
                            return (
                                <>
                                    {productsCare.filter(item => item.userdFor === "eyes").map((item)=>
                                    <div key={item.id}>
                                       <Link to={`/products/makeup/${item.id}`}><img src={item.src} alt=""/></Link> 
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
            <h4 className={styles.header}>LIP MAKEUP COLLECTION</h4>
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({productsCare}) => {
                            return (
                                <>
                                    {productsCare.filter(item => item.userdFor === "lips").map((item)=>
                                    <div key={item.id}>
                                       <Link to={`/products/makeup/${item.id}`}><img src={item.src} alt=""/></Link> 
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