import React from 'react';
import './contact.scss'
import Title from '../title_header';
class Contact extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='main-page'>
                 <Title title='Contact'></Title>
            </div>
        )
    }
}
export default Contact;