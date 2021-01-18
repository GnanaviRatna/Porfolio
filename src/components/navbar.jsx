import React, { Component } from "react";
import {Navbar,Nav} from 'react-bootstrap';
import { ImHome,ImUserTie, ImTrophy, ImLinkedin,ImFacebook2,ImInstagram,ImStatsDots } from "react-icons/im";
import {FaAddressCard} from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import HomePage from "./HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends Component{
    //<Nav.Link style={{fontSize:21}} href="/testing"> <ImAddressBook size="21" style={{paddingRight:3,paddingBottom:4}}/> Social Media Contacts</Nav.Link>
    
    render(){
        const active={
            background: "#1d1e1e"
        }
        return(
            <>
            
            <Navbar variant="dark" defaultActiveKey="/home" >
                <Navbar.Brand href="/home"></Navbar.Brand>
                
                <Nav className="container-fluid" >
                <Nav.Item >
                <Nav.Link style={{fontSize:21}} href="/home"> <ImHome size="21" style={{paddingRight:3,paddingBottom:4}}/> Home </Nav.Link>
                
                </Nav.Item>
                <Nav.Item >
                <Nav.Link style={{fontSize:21}} href="/skills"> <ImTrophy size="21" style={{paddingRight:3,paddingBottom:4}}/>Skills</Nav.Link>
                
                </Nav.Item>
                <Nav.Item  >
                <Nav.Link style={{fontSize:21}} href="/experience"> <ImUserTie size="21" style={{paddingRight:3,paddingBottom:4}}/> Work Experience</Nav.Link>
                
                </Nav.Item>
                <Nav.Item  >
                <Nav.Link style={{fontSize:21}} href="/projects"> <FaAddressCard size="21" style={{paddingRight:3,paddingBottom:4}}/> Projects</Nav.Link>
                
                </Nav.Item>
                <Nav.Item  >
                <Nav.Link style={{fontSize:21}} href="/certification"> <BsFillAwardFill size="21" style={{paddingRight:3,paddingBottom:4}}/>Certification</Nav.Link>
                </Nav.Item>
                <Nav.Item  >
                <Nav.Link style={{fontSize:21}} href="/achievements"> <ImStatsDots size="21" style={{paddingRight:3,paddingBottom:4}}/>Academic Statistics</Nav.Link>
                </Nav.Item>
                <Nav.Item  className="ml-auto">
                <Nav.Link href="https://www.facebook.com/profile.php?id=100005598285161"><ImFacebook2 size="22" style={{paddingRight:3,paddingBottom:4}}></ImFacebook2></Nav.Link>
                </Nav.Item>
                <Nav.Item  >
                <Nav.Link href="https://www.instagram.com/gnanavi_punjala/"><ImInstagram size="22" style={{paddingRight:3,paddingBottom:4}}></ImInstagram></Nav.Link>
                </Nav.Item>
                <Nav.Item  >
                <Nav.Link href="https://www.linkedin.com/in/gnanavi-ratna-punjala/"><ImLinkedin size="22" style={{paddingRight:3,paddingBottom:4}}></ImLinkedin></Nav.Link>
                </Nav.Item>
                
                </Nav>
                
                
                
            </Navbar>
            
            </>
        )
    }
}


export default NavBar;
