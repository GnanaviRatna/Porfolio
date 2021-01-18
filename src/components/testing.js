import React, { Component } from "react";
import {Navbar,Nav,Tabs,Tab} from 'react-bootstrap';
import { ImHome,ImUserTie, ImTrophy, ImAddressBook,ImFacebook2 } from "react-icons/im";
import {FaAddressCard} from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import HomePage from "./HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBarTesting extends Component{
    
    render(){
        const active={
            background: "#1d1e1e"
        }
        return(
            <>
            
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home"></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home"> <ImHome size="19" style={{paddingRight:5}}/>Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="/home">Home</Nav.Link>
            
            <Nav.Link href="/experience"> <ImUserTie size="19" style={{paddingRight:5}}/> Work Experience</Nav.Link>
            <Nav.Link href="/projects"> <FaAddressCard size="19" style={{paddingRight:5}}/> Projects</Nav.Link>
            <Nav.Link href="/certification"> <BsFillAwardFill size="19" style={{paddingRight:5}}/>Certification</Nav.Link>
            <Nav.Link href="/testing"> <ImAddressBook size="19" style={{paddingRight:5}}/> Social Media Contacts</Nav.Link>
            </Nav>
            
        </Navbar>
            
            </>
        )
    }
}


export default NavBarTesting;
