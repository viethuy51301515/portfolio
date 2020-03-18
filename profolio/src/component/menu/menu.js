import React from 'react';
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
                <div>
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