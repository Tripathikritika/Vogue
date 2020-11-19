import React from 'react'
import styles from './../Styling/Footer.module.css'
import {Link} from 'react-router-dom'


function Footer(){
    return(
        <div>

            <div className={styles.blank}>
                <div className={styles.contact}>
                    <div>
                        <i class="fas fa-envelope">
                    Get SPECIAL DISCOUNT IN YOU INBOX </i> <br/>
                    </div>
                    <div>
                        <i class="fas fa-mobile-alt">EXPERIENCE THE NYKAA MOBILE APP</i>
                    </div>
                    
                    <div>
                        <i class="fas fa-phone">FOR ANY HELP YOU MAY CALL US</i>
                    </div>
                </div>
            </div>
            <div className={styles.questionsFooter}>
                <div className={styles.displayFlex}> 
                    <div>
                        <h6>NYKAA</h6>
                        <Link to='/about-us/whoweare'><h6>WHO ARE WE?</h6></Link> 
                        <h6>CAREERS</h6>
                        <h6>AUTHENTICITY</h6>
                        <h6>PRESS</h6>
                        <h6>TESTIMONIALS</h6>
                        <h6>NYKAA CSR</h6>
                        <h6>RESPONSIBLE DISCLOSURE</h6>
                    </div>
                    <div>
                        <h6>HELP</h6>
                        <h6>CONTACT US</h6>
                        <h6>FREQUENTLY ASKED QUESTIONS</h6>
                        <h6>STORE LOCATOR</h6>
                        <h6>CANCELLATION & RETURN</h6>
                        <h6>SHIPPING & DELIVERY</h6>
                    </div>

                    <div>
                        <h6>INSPIRE ME</h6>
                        <h6>BEAUTY BOOK</h6>
                        <h6>NYKAA TV</h6>
                        <h6>NYKAA NETWORK</h6>
                        <h6>ROUTINE FINDER</h6>
                        <h6>BUYING GUIDES</h6>
                    </div>
                    <div>
                        <h6>QUICK LINKS</h6>
                        <h6>OFFER ZONE</h6>
                        <h6>NEW LAUNCHES</h6>
                        <h6>NYKAA MAN</h6>
                        <h6>NYKAA FASHION</h6>
                        <h6>NYKAA PRO</h6>
                    </div>
                    <div>
                        <h6>TOP CATEGORIES</h6>
                        <h6>MAKE UP</h6>
                        <h6>SKIN</h6>
                        <h6>HAIR</h6>
                        <h6>PERSONAL CARE</h6>
                        <h6>APPLIANCES</h6>
                    </div>
                    <div>
                        <h6>MOM & BABY</h6>
                        <h6>WELLNESS</h6>
                        <h6>FRAGANCE</h6>
                        <h6>NATURAL</h6>
                        <h6>LUXE</h6>
                    </div>
                </div>
            </div>
            <div className={styles.iconsFooter}>
                <div style={{display:'flex'}}>
                    <div className={styles.footersCircle}></div>
                    <div >
                        <p><b>1500 + BRANDS</b> 
                        <p>Well Curated 3Lakh + Products</p></p>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div className={styles.footersCircle}></div>
                    <div >
                        <p><b>FREE SHIPPING</b> 
                        <p>For Orders Above INR 700</p></p>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div className={styles.footersCircle}></div>
                    <div >
                        <p><b>GENUINE PRODUCTS</b> 
                        <p>Sourced Directly From Bands</p></p>
                    </div>
                </div>
                <div>
                    <p><b>SHOW US SOME ON SOCIAL MEDIA</b></p>
                    <div className={styles.icon}>
                        <i style={{margin:'10px'}} class="fab fa-instagram-square" ></i>
                        <i style={{margin:'10px'}} class="fab fa-facebook-square"></i>
                        <i style={{margin:'10px'}} class="fab fa-youtube"></i>
                        <i style={{margin:'10px'}} class="fab fa-twitter"></i>
                        <i style={{margin:'10px'}} class="fab fa-pinterest"></i>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerFlex}>
                    <div>
                        TERMS & CONDITIONS 
                    </div>
                    <div>
                        SHIPPING POLICY
                    </div>
                    <div>
                        CANCELLATION POLICY
                    </div>
                    <div>
                        PRIVACY POLICY
                    </div>
                </div>
                <div >
                <p style={{textAlign:'center',marginBottom:'10px',color:'white'}}><i class="far fa-copyright"> 
                    2020 Nyka E-Retail Pvt. Ltf.All Rights Reserved
                </i></p>
                </div>
                
            </div>
        </div>
    )
    
}

export default Footer