import React from 'react';
import './menu.scss'
class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className='user-profile'>
                    <figure>
                        <img src="" alt=""/>
                    </figure>
                </div>
                <div className='menu-list'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Resume</li>
                        <li>Portfolios</li>
                        <li>Achivement</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='author'>

                </div>
            </div>
        )
    }
}
export default Menu;