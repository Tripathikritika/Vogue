import React from 'react'
import styles from './Components.module.css'
import Links from './Links'
function NavBar(props) {
    console.log(props)
    return (
        <div>
            <div className={styles.navbar}>
              <Links {...props}/>
            </div>
        </div>
    )
}
export default NavBar 