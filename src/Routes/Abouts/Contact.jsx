import React from 'react'
import styles from './../../Styling/AboutComponent.module.css'
function Contact (){
    return (
        <>
           <div>
               <h1 className={styles.header}>Help Categories</h1>
               <div className={styles.methods}>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-shipping-fast"></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-credit-card"></i>
                    <i class="fas fa-info-circle"></i>
                    <i class="fas fa-question-circle"></i>
               </div>
               <div  className={styles.methodsPara}>
                    <h6>Order Related</h6>
                    <h6>Shopping</h6>
                    <h6>Nykaa Account</h6>
                    <h6>Payments</h6>
                    <h6>Others</h6>
                    <h6>Sumbit Request</h6>
               </div>
           </div>
           <hr/>
           <div>
               <p className={styles.para}>
                    <h3>Email: support@nykaa.com <br/>
                        Email for international orders: internationalsupport@nykaa.com

                    </h3>
                    <h3>
                        GRIEVANCE OFFICER - CUSTOMER SERVICES <br/>
                        Name : Mr. Saurabh Merh <br/>
                        Email : grievanceofficercs@nykaa.com

                    </h3>
               </p>
           </div>
          
            
        </>
    )

}
export default Contact