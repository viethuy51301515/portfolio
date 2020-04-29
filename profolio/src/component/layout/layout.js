import React from 'react';
import Menu from '../menu';
import './layout.scss'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from '../home';
import About from '../about';
import Achivement from '../achivement';
import Contact from '../contact';
import Portfolios from '../portfolios';
import Resume from '../resume';
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
                        <Route path='/achivement' exact component={Achivement}></Route>
                        <Route path='/contact' exact component={Contact}></Route>
                        <Route path='/portfolios' exact component={Portfolios}></Route>
                        <Route path='/resume' exact component={Resume}></Route>

                    </section>
                </BrowserRouter>
            </div>
        )
    }
}
export default Layout;