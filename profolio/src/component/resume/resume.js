import React from 'react';
import Title from '../title_header';
import './resume.scss';
const Header = (props) =>{
    return(
        <div className='resume-smallheader'>
            <span className="icon-lunchbox"></span>
            <h1>Working Experience</h1>
        </div>
    )
}
class Resume extends React.Component{
    constructor(props){
        super(props);
    }
     
    render(){
        let listSkill =[];
        let i = 0;
        while (i<6) {
            listSkill.push(
                <div className='process'>
                <h2 className='process-tilte'>
                    HTML5
                </h2>
                <div className='process-inner'>
                    <div className='process-percentange'>95%</div>
                    <div className='process-container'>
                        <span></span>
                    </div>
                </div>
 
            </div>
            )
            i++;
        }
        return(
            <div className='main-page resume'>
                <Title title='my skills'></Title>
                <section className='skills'>
                   {listSkill}
                </section>
                <Title title='resume'></Title>
                <Header />
                <section className='working'>
                    <div>
                        <aside className='time'>
                            <h1>2018 - Present</h1>
                        </aside>
                        <article>

                        </article>
                    </div>
                </section>
            </div>
        )
    }
}
export default Resume;