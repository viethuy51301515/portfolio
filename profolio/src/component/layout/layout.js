import React from 'react';
import Menu from '../menu';
import './layout.scss'
import Home from '../home';
import {BrowserRouter,Route} from 'react-router-dom'
import About from '../about';
class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='layout'>
                <BrowserRouter>
                    <section className='menu'>
                        <Menu></Menu>
                    </section>
                    <section className='main'>
                        <div className='main__grid'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
        
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/about' exact component={About}></Route>
                    </section>
                </BrowserRouter>
            </div>
        )
    }
}
export default Layout;