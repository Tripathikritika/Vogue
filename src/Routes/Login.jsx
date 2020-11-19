import React from 'react'
import { Redirect } from 'react-router-dom'
import { AppContext } from './../ContextApi/AppContext'
import styles from './../Styling/Login.module.css'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email :"",
            pwd:""
        }
    }
    onChange = (e) => {
        const { name ,value} = e.target
        this.setState ({
            [name] : value
        })
    }
    render(){
        const { history } = this.props
        const { handleLogin , isAuth} = this.context
        const { email , pwd } = this.state
        console.log(history , isAuth)
        if(isAuth){
            return <Redirect to='./cart' />
            // history.push('/cart')
        }
        return(
            <>
            <div className={styles.mainDiv}>
                <form class="form-example">
                    <div class="form-example">
                        <label for="name">Username: 
                        <input type="text" value={email} name="email" onChange = {this.onChange} placeholder='email address'/></label>
                    </div>
                    <div class="form-example">
                        <label for="email">Password: 
                        <input type="password" value={pwd} name="pwd" onChange = {this.onChange}/></label>
                    </div>

                    <button className={styles.button} onClick={() => handleLogin(email,pwd)}>LOGIN</button>
                </form>
            </div>
            </> 
        )
    }
}
Login.contextType = AppContext
export default Login