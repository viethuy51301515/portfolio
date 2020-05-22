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
                 <div className='contact'>
                     <section className='contact__form'>
                        <h1>Get In Touch</h1>
                        <div className='form__item'>
                            <label>
                                Enter your name
                            </label>
                            <input id='name' name='name'/>
                        </div>
                        <div className='form__item'>
                        <label>
                                Enter your name
                            </label>
                            <input id='name' name='name'/>
                        </div>
                        <div className='form__item'>
                            <label>
                                Enter your name
                            </label>
                            <input id='name' name='name'/>
                        </div>
                     </section>
                     <section className='contact__infor'>
                        <div className='infor__item'>
                            <div>
                                <span className='icon-mobile-phone'></span>
                            </div>
                            <div>
                                <h1>Phone</h1>
                                <p>01264895603</p>
                            </div>
                        </div>
                        
                     </section>
                 </div>
            </div>
        )
    }
}
export default Contact;