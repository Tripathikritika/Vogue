import React from 'react'
import { Route , Switch} from 'react-router-dom'
import Home from  './../Routes/Home'

import MakeUp from './../Routes/HomeProducts/MakeUp'
import MakeupPage from './../Routes/HomeProducts/MakeupPage'

import Products from  '../Routes/HomeProducts/Products'
import HairCare from  '../Routes/HomeProducts/HairCare'
import SkinCare from '../Routes/HomeProducts/SkinCare'
import Nail from  '../Routes/HomeProducts/Nail'
import Beauty from  './../Routes/Beauty'
import Login from  './../Routes/Login'
import Search from  './../Routes/Search'
import Cart from  './../Routes/Cart'
import SkinPage from './../Routes/HomeProducts/SkinPage'
import HairPage from './../Routes/HomeProducts/HairPage'
import NailPage from './../Routes/HomeProducts/NailPage'
import AboutUs from '../Routes/Abouts/AboutUs'
import WhoAreWe from '../Routes/Abouts/WhoAreWe'
import Contact from './../Routes/Abouts/Contact'
import Error from './../Routes/Error'


function Routes(){
    return(
        <Switch>
            <Route path='/' exact><Home /></Route>
            
            <Route path='/products/makeup' exact  render={(props) => <MakeUp {...props}/> }/>
            <Route path='/products/makeup/:id' render={(props) => <MakeupPage {...props}/> }/>

            <Route path='/products/allProducts' exact render={(props) => <Products {...props}/> }/>
            <Route path='/products/skincare/:id' render={(props) => <SkinPage {...props}/>}/> 
            <Route path='/products/skincare' render={(props) => <SkinCare {...props}/> }/>
        

            <Route path='/products/haircare' exact render={(props) => <HairCare {...props}/> }/>
            <Route path='/products/haircare/:id' render={(props) => <HairPage {...props}/> }/>
            <Route path='/products/nail' exact render={(props) => <Nail {...props}/> }/>
            <Route path='/products/nail/:id' exact render={(props) => <NailPage {...props}/> }/>

            <Route path='/beauty'render={(props) => <Beauty {...props}/> }/>
            <Route path='/about-us'  exact render={(props) => <AboutUs {...props}/> }/>
            <Route path='/about-us/whoweare' render={(props) => <WhoAreWe {...props}/> }/>
            <Route path='/about-us/contact' render={(props) => <Contact {...props}/> }/>

            <Route path='/login'  render = {(props) => <Login {...props}/>} />
            <Route path='/search'><Search/></Route>
            <Route path='/cart' render = {(props) => <Cart {...props}/>} />

            <Route >
                <Error/>
            </Route>

        </Switch>
    )
}
export default Routes