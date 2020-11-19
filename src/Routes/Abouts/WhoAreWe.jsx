import React from 'react'
import styles from './../../Styling/AboutComponent.module.css'

function WhoAreWe (){
    return (
        <>
            <div>
                <h1 className={styles.header}>The Nykaa Story
                    <br/>India’s largest omnichannel beauty destination
                </h1>
                <p className={styles.para}>Since its inception in 2012, Nykaa has quickly emerged as 
                    India’s largest omnichannel beauty destination with millions 
                    of happy customers across the country. From bringing you your 
                    favorite brands and keeping you up-to-date with the latest beauty
                    trends, expert advice and videos, to more than 68 Luxe and On-Trend
                    Stores, an ever growing online community for beauty buffs, and a
                    Beauty Helpline, we go out of our way to give you only the very 
                    best. With 1200+, 100% genuine brands, and six warehouses across 
                    India that stock lakhs of well curated, well priced products, 
                    Nykaa offers a comprehensive selection of makeup, skincare, 
                    hair care, fragrances, personal care, luxury and wellness 
                    products for women and men. <br/> <br/>
                    Derived from the Sanskrit word ‘Nayaka’ meaning actress or one in 
                    the spotlight, Nykaa is all about celebrating the star in each woman,
                    and being her confidante and companion as she embarks on her own journey
                    to discover her unique identity and personal style. From the widest 
                    selection of genuine beauty products from around the world to beauty
                    advice, Nykaa is truly passionate about catering to your every beauty 
                    and wellness need. Because after all, Your Beauty is Our Passion.
                </p>
            </div>
            <div>
                <div className={styles.header}>
                    <img src="https://adn-static1.nykaa.com/media/wysiwyg/2019/who-we-are/icons-8-morale-filled.svg" alt="value"/>
                    <h3>The Values We Abide By</h3>
                </div>
                <div>
                    <p className={styles.para}>We believe that the Nykaa woman deserves nothing but the best, purest, most 
                        trustworthy beauty and wellness products money can buy. From our inception, 
                        we have strived to set the benchmark in product quality control so that our 
                        customers are assured of receiving only 100% genuine and fresh products. 
                        Unlike other online players, we NEVER source anything from the ‘grey market’, 
                        only offering products that are 100% authentic and sourced directly from the brands 
                        or their authorized distributors. This authenticity extends to all aspects of how 
                        we run our business and we’re always bettering our processes to ensure we’re always delivering the best.
                    </p>
                </div>
            </div>
            
            
        </>
    )
}
export default WhoAreWe