import React from 'react'
import './mainpage.css'
import kutta from '../images/kutta.jpg'
import therapist from '../images/therapist.jpg'
import journal from '../images/journal.png'
import {useNavigate} from 'react-router-dom';

const Mainpage = () => {

    const navigate=useNavigate();

    return (

            <div className="main-section">

               <div className='row panel'>
                    <div className="pricing-plan column">
                        <img src={kutta} alt="" className="pricing-img"/>
                            <ul className="pricing-features">
                                <li className="pricing-features-item">Share your thoughts with Chatbot</li>
                            </ul>
                            <a href="/chat" className="pricing-button">Chat</a>
                    </div>
                    <div className="pricing-plan column">
                        <img src={journal} alt="" className="pricing-img"/>
                            <ul className="pricing-features">
                                <li className="pricing-features-item">Share with your community</li>
                            </ul>
                            <a href="/community" className="pricing-button">Community</a>
                    </div>
                </div>


                <div className="tips-container">
                    <div>
                        <h1 className="tips-head">TIPS</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-timeline">
                                <div className="timeline">
                                    <div className="timeline-icon">
                                    </div>
                                    <h3 className="title"> Eat healthy</h3>
                                    <p className="description">
                                        There is no magic diet that fixes depression. It's a good idea to watch what you eat, though. If depression tends to make you overeat, getting in control of your eating will help you feel better.
                                        Although nothing is definitive, Cook says there's evidence that foods with omega-3 fatty acids (such as salmon and tuna) and folic acid (such as spinach and avocado) could help ease depression.
                                    </p>
                                  
                                </div>
                                <div className="timeline">
                                    <div className="timeline-icon">
                                        <p>hiii</p>
                                    </div>
                                    <h3 className="title">Get in a routine</h3>
                                    <p className="description">
                                        If you’re depressed, you need a routine, says Ian Cook, MD. He's a psychiatrist and director of the Depression Research and Clinic Program at UCLA.
                                        Depression can strip away the structure from your life. One day melts into the next. Setting a gentle daily schedule can help you get back on track.
                                    </p>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-icon">

                                    </div>
                                    <h3 className="title">Set goals</h3>
                                    <p className="description">
                                        When you're depressed, you may feel like you can't accomplish anything. That makes you feel worse about yourself. To push back, set daily goals for yourself.
                                        "Start very small," Cook says. "Make your goal something that you can succeed at, like doing the dishes every other day."
                                        As you start to feel better, you can add more challenging daily goals.
                                    </p>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-icon">

                                    </div>
                                    <h3 className="title">Exercise</h3>
                                    <p className="description">
                                        t temporarily boosts feel-good chemicals called endorphins. It may also have long-term benefits for people with depression. Regular exercise seems to encourage the brain to rewire itself in positive ways, Cook says.
                                        How much exercise do you need? You don’t need to run marathons to get a benefit. Just walking a few times a week can help.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default Mainpage