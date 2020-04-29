import React from 'react';
import Title from '../title_header';

class Portfolios extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='main-page'>
                <Title title='Portfolios'></Title>
            </div>
        )
    }
}
export default Portfolios;