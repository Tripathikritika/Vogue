import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './../../ContextApi/AppContext'
import styles from './../../Styling/Skincare.module.css'

function HairCare (){
    return (
        <>
             <h3 className={styles.header}>HAIR CARE AND HAIR STYLING COLLECTION</h3>
            <div className={styles.facewash}>
                <div className={styles.leftDiv}> 
                    <h2>Your Guide To Hair Care & Styling</h2>
                    <p style={{textAlign:'center'}}>In need of some serious hair care or hair styline
                        inspo? Dive right into this curated guide for gorgeous hair, everyday!
                        <br/> Shop Now >
                    </p>
                </div>
                <div>
                    <img src="https://www.nykaa.com/media/categoryInfo/art_banner_image/hairstyling_contentbanner.jpg" alt=""/>
                </div>
            </div>
            
            <h3 className={styles.header}>HAIR OIL COLLECTION</h3>
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({productsCare}) => {
                            return (
                                <>
                                    {productsCare.filter(item => item.userdFor === "hairOil").map((item)=>
                                    <div key={item.id}>
                                       <Link to={`/products/haircare/${item.id}`}><img src={item.src} alt=""/></Link> 
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
            
            <h3 className={styles.header}>SHAMPOO COLLECTION - ANTI DANDRUFF, HAIRFALL AND SULPHATE FREE</h3>
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({productsCare}) => {
                            return (
                                <>
                                    {productsCare.filter(item => item.userdFor === "hairShampoo").map((item)=>
                                    <div key={item.id}>
                                       <Link to={`/products/haircare/${item.id}`}><img src={item.src} alt=""/></Link> 
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

            <h3 className={styles.header}>HAIR COLOUR ONLINE</h3>
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({productsCare}) => {
                            return (
                                <>
                                    {productsCare.filter(item => item.userdFor === "hairColor").map((item)=>
                                    <div key={item.id}>
                                       <Link to={`/products/haircare/${item.id}`}><img src={item.src} alt=""/></Link> 
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
export default HairCare