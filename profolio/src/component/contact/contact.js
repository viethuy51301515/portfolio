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
                        <div className='form__item'>
                            <label>
                                Enter your message
                            </label>
                            <textarea id='name' name='name' rows='10'/>
                        </div>
                        <div className='form__item'>
                            <button>Send Email</button>
                        </div>

                     </section>
                     <section className='contact__infor'>
                        <div className='infor__item'>
                            <div>
                                <span className='icon-mobile-phone'></span>
                            </div>
                            <div>
                                <h1>Phone</h1>
                                <p>0764895603</p>
                            </div>
                        </div>
                        <div className='infor__item'>
                            <div>
                                <span className='icon-email'></span>
                            </div>
                            <div>
                                <h1>Email</h1>
                                <p>viethuy51301515@gmail.com</p>
                            </div>
                        </div>
                        <div className='infor__item'>
                            <div>
                                <span className='icon-mobile-phone'></span>
                            </div>
                            <div>
                                <h1>GitHub</h1>
                                <p>https://github.com/viethuy51301515</p>
                            </div>
                        </div>
                     </section>
                 </div>
            </div>
        )
    }
}
export default Contact;