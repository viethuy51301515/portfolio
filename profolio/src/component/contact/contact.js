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
                 <div>
                     <section>
                        <h1>Get In Touch</h1>
                     </section>
                     <section>
                        
                     </section>
                 </div>
            </div>
        )
    }
}
export default Contact;