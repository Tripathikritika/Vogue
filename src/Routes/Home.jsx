import React from 'react'
import { AppContext } from './../ContextApi/AppContext'
import styles from './Routes.module.css'

function Home(){
    return(
        <div className={styles.carousel}>
            <div>
                <img 
                style={{width:'100%'}}
                src="https://images-static.nykaa.com/uploads/2873484f-1fdd-478a-84e5-cc94a81583ad.jpg" 
                alt="Carosuel"/>
            </div>
            <div>
                <p className={styles.heading}>EDITOR'S CHOICE</p>
                
                <div className={styles.flexbody}>
                    <AppContext.Consumer>
                        {
                        ({favouritedata}) => {
                            return (
                                <>
                                    {favouritedata.map((item) => 
                                        <div key={item.id}>
                                            <img src={item.src} style={{borderRadius:'5x'}}/>
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
                <p className={styles.heading}>MORE OFFERS FOR YOU</p>
                
                <div className={styles.flexbody}>
                    <AppContext.Consumer>
                        {
                        ({moreOffersData}) => {
                            return (
                                <>
                                    { moreOffersData.map((item) => 
                                        <div key={item.id}>
                                            <img src={item.src} style={{borderRadius:'5x'}}/>
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
            </div>
        </div>
    )
}

export default Home
