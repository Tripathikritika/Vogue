import React from 'react'
import axios from 'axios'
const AppContext = React.createContext();

class AppContextProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favouritedata : [],
            moreOffersData : [],
            productsCare : [],
            cartArray : [],
            beautyAdvice :[],
            isAuth : false //false bhi karna h
        }
    }
    componentDidMount(){
        axios.get('https://mod-living-db.herokuapp.com/favourites')
        .then(res => this.setState({
            favouritedata : res.data
        }))
        .catch((err) => console.log("Error"))

        axios.get('https://mod-living-db.herokuapp.com/moreOffers')
        .then(res => this.setState({
            moreOffersData : res.data
        }))
        .catch((err) => console.log("Error"))

        axios.get('https://mod-living-db.herokuapp.com/product')
        .then(res => this.setState({
            productsCare : res.data
        }))
        .catch((err) => console.log("Error"))

        // axios.get('http://localhost:3000/hairCare')
        // .then(res => this.setState({
        //     hairCare : res.data
        // }))
        // .catch((err) => console.log("Error"))

        // axios.get('http://localhost:3000/nail')
        // .then(res => this.setState({
        //     nail : res.data
        // }))
        // .catch((err) => console.log("Error"))

        axios.get('https://mod-living-db.herokuapp.com/beautyAdvice')
        .then(res => this.setState({
            beautyAdvice : res.data
        }))
        .catch((err) => console.log("Error"))
      
    }
    addToCart = (items) =>{
        this.setState({
            cartArray : [...this.state.cartArray,items]
        })
    }
    onDelete = (items) =>{
        const { cartArray } = this.state
        const bachaHuyaItem = cartArray.filter(cartItem => cartItem.id !== items.id)
        this.setState({
            cartArray : bachaHuyaItem
        })
    }
    handleLogin = (email,pwd) =>{
        if(email == "admin" && pwd == "admin"){
            this.setState ({
                isAuth : true
            })
            
        }
    }
    render(){
        console.log(this.state.favouritedata)
        const { favouritedata , moreOffersData,productsCare,cartArray,isAuth,beautyAdvice} = this.state
        const { addToCart ,onDelete,handleLogin} = this
        return(
            <>
                <AppContext.Provider value={{favouritedata,moreOffersData,productsCare,onDelete,addToCart,cartArray,handleLogin,isAuth,beautyAdvice}}>
                    {this.props.children}
                </AppContext.Provider>
            </>
        )
    }
}
export  {AppContext,AppContextProvider}