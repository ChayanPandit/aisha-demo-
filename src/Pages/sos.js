import React from 'react'
import van from '../images/van.png'
import icall from '../images/ical.jpg'
import trans from '../images/trns.png'
import trevor from '../images/trevor.png'
import vet from '../images/vet.jpg'
import calm from '../images/calm.jpg'
import sam from '../images/sam.png'
import sp from '../images/spbuk.png'
import smh from '../images/smh.jpg'
import zu from '../images/zu.jpg'
import lf from '../images/lf.jpg'
import sam1 from '../images/sam1.png'
import yl from '../images/yl.jpg'
import csp from '../images/csp.jpg'
import ctl from '../images/ctl.jpg'
import sam2 from '../images/sam2.jpg'
import smhc from '../images/smhc.png'

import './sos.css'
import { Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const SOS = () => {

    const navigate = useNavigate();
    let [country, setCountry] = useState("India");
    let [data, setData] = useState([
        {
            name: "Samaritans Mumbai",
            link: "samaritansmumbai.com",
            contact: "+91 8422984528",
            img: van
        },
        {
            name: "Vandrevala Foundation ",
            link: "www.vandrevalafoundation.com",
            contact: "+91 9999666555",
            img: van
        },
        {
            name: "iCall",
            link: "https://icallhelpline.org/",
            contact: "+91 9152987821 ",
            img: van
        }
    ])

    function get_data(data) {
        { console.log(data) }
        return (<>{data.map((data1) =>
            < Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{data1.name}</Card.Title>
                    <Card.Text>
                        Website Link: {data1.link}

                        Contact : {data1.contact}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )}</>)
    }
    useEffect(() => {
        if (country === "USA") {
            setData(
                [
                {
                    key: '1',
                    name: "Trans Lifeline ",
                    link: "https://www.translifeline.org/",
                    contact: "1-877-565-8860",
                    img: trans
                },
                {
                    key: '2',
                    name: " The Trevor Project",
                    link: "http://www.thetrevorproject.org/",
                    contact: "1-866-488-7386",
                    img: trevor
                },
                {
                    key: '3',
                    name: "Veterans Crisis Line ",
                    link: "https://www.veteranscrisisline.net/",
                    contact: "1-800-273-8255 ",
                    img: vet
                }
            ])
        }
        else if (country === "China") {
            setData(
                [
                {
                    key: '1',
                    name: "Shanghai Mental Health Center",
                    link: "http://www.smhc.org.cn",
                    contact: "021–64387250",
                    img: smh
                },
                {
                    key: '2',
                    name: "Shenzhen Mental Health Center ",
                    link: "http://www.szknyy.com/",
                    contact: "0755-25629459",
                    img: smhc
                },
                {
                    key: '3',
                    name: "Mental Health Center of School of Medicine of Zhejiang University",
                    link: "http://www.hz7hospital.com/",
                    contact: "0571-85029595",
                    img: zu
                }
            ])
        }
        else if (country === "Canada") {
            setData(
                [
                {
                    key: '1',
                    name: "Canada Suicide Prevention Service ",
                    link: "http://www.crisisservicescanada.ca/",
                    contact: "1-833-456-4566",
                    img: csp
                },
                {
                    key: '2',
                    name: "Crisis Text Line",
                    link: "http://www.szknyy.com/",
                    contact: "686868",
                    img: ctl
                },
                {
                    key: '3',
                    name: "Trans Lifeline",
                    link: "http://www.translifeline.org/",
                    contact: " 1-877-330-6366",
                    img: trans
                }
            ])
        }
        else if (country === "New Zealand") {
            setData(
                [{
                    key: '1',
                    name: "Lifeline Aotearoa",
                    link: "http://www.lifeline.org.nz",
                    contact: "09 5222 999",
                    img: lf
                },
                {
                    key: '2',
                    name: "Samaritans",
                    link: "http://www.samaritans.org.nz",
                    contact: "0800 72 66 66",
                    img: sam1
                },
                {
                    key: '3',
                    name: "Youthline ",
                    link: "https://www.youthline.co.nz",
                    contact: "0800 376 633",
                    img: yl
                }])
        }
        else if (country === "United Kingdom") {
            setData(
                [
                {
                    key: '1',
                    name: "Campaign Against Living Miserably",
                    link: "https://www.thecalmzone.net/",
                    contact: " 0800 58 58 58 ",
                    img: calm
                },
                {
                    key: '2',
                    name: "Samaritans",
                    link: "http://www.samaritans.org/",
                    contact: "116 123",
                    img: sam
                },
                {
                    key: '3',
                    name: "National Suicide Prevention Helpline UK",
                    link: " https://www.spbristol.org/",
                    contact: "0800 689 5652",
                    img: sp
                }
            ])
        }
        else if(country=="India")
        {
            setData(
                [
                    {
                        name: "Samaritans Mumbai",
                        link: "https://samaritansmumbai.com",
                        contact: "+91 8697259597",
                        img: sam2
                    },
                    {
                        name: "Vandrevala Foundation ",
                        link: "https://www.vandrevalafoundation.com",
                        contact: "+91 9999666555",
                        img: van
                    },
                    {
                        name: "iCall",
                        link: "https://icallhelpline.org/",
                        contact: "+91 9152987821 ",
                        img: icall
                    }
            ]) 
        }}, [country])


    return (
        <div className="panel-sos">
            <div className="search-section">
                <ul className='head-country'>Select the country you are in: </ul>
                <select
                    id="location"
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    onChange={(e) => {
                        setCountry(e.target.value);
                        console.log(data);
                    }}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="China">China</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Canada">Canada</option>

                </select>
                <div className='details'>
                    {data.map((data1)=>{
                        return(
                            <>
                            < Card className='detail' style={{ weight: '10rem' }}>
                                <Card.Img className='img-detail' variant="top" src={data1.img} />
                                <Card.Body>
                                    <Card.Title>{data1.name}</Card.Title>
                                    <Card.Text className='det-link'>
                                        <li>Website Link: <a href={data1.link}>{data1.link}</a></li>
                                        <li>Contact : {data1.contact}  
                                        <a className='call-sos' href={"tel:"+data1.contact}><i className="fa fa-phone"></i></a>
                                      </li>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default SOS