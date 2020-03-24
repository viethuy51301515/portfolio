import React from 'react';
import Menu from '../menu';
import './layout.scss'
class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='layout'>
                <section className='menu'>
                    <Menu></Menu>
                </section>
            </div>
        )
    }
}
export default Layout;