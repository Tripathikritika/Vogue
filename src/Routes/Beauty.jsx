import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './../ContextApi/AppContext'
import styles from './../Styling/Beauty.module.css'

function Beauty (){
    return (
        <>
            {/* <h1>FACE WASH</h1>
            <div className={styles.facewash}>
                <div className={styles.leftDiv}> 
                    <h2>The Best Face Wash For Every Skin Type</h2>
                    <p style={{textAlign:'center'}}>Wheather you have normal, breakout-prone,oily,dry or sensitive
                        skin,there's a cleanser meant for just your skin type.
                        <br/> READ MORE >
                    </p>
                </div>
                <div>
                    <img src="https://www.nykaa.com/media/categoryInfo/art_banner_image/Best_Face_Washes_for_Every_Skin_Type.jpg" alt=""/>
                </div>
            </div> */}
            <div>
                <h1>BEAUTY ADVICE</h1>
            </div>
            
            <div className={styles.flexbody}>
                <AppContext.Consumer>
                    {
                        ({beautyAdvice}) => {
                            return (
                                <>
                                    {beautyAdvice.map((item)=>
                                    <div key={item.id}>
                                       {/* <Link to={`/products/beautyAdvice/${item.id}`}><img src={item.src} alt=""/></Link>  */}
                                        <img src={item.src} alt=""/>
                                        <p>{item.name}</p>
                                        <p>{item.description}</p>
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
export default Beauty