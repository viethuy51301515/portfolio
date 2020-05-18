import React from 'react';
import Title from '../title_header';
import './portfolios.scss'
class Portfolios extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='main-page'>
                <Title title='Portfolios'></Title>
                <div className='grid'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
export default Portfolios;