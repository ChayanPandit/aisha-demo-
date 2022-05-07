import React from 'react'
import './footer.css'

const Footer = () => {
    return (
       
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Skills</h3>
                                <ul>
                                    <li><a href="#">Web Development</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">React</a></li>
                                    <li><a href="#">Machine Learning</a></li>
                                    <li><a href="#">Python</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About Team</h3>
                                <ul>
                                    <li><a href="#">Chayan Pandit</a></li>
                                    <li><a href="#">Gyanam Modi</a></li>
                                    <li><a href="#">Ishu Chaudhary</a></li>
                                    <li><a href="#">Vatsal Mehta</a></li>
                                    <li><a href="#">Vedansh</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Aisha: </h3>
                                <p>A neurally enhanced bot to listen, understand your problems and help you overcome it</p>
                            </div>
                            <div className="col item social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-instagram" ></i></a>
                            </div>
                        </div>
                        <p className="copyright">Aisha © 2022</p>
                    </div>
                </footer>
            </div>
            
        
     
  
  )
}

export default Footer