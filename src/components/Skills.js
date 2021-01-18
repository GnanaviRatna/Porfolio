import React, { Component } from "react";
import 'react-slideshow-image/dist/styles.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// npm install --save-dev @iconify/react @iconify-icons/logos
import { Icon, InlineIcon } from '@iconify/react';
import javaIcon from '@iconify-icons/logos/java';
import pythonIcon from '@iconify-icons/logos/python';
import cIcon from '@iconify-icons/logos/c';
import reactIcon from '@iconify-icons/logos/react';
import fileTypeHtml from '@iconify-icons/vscode-icons/file-type-html';
import fileTypeCss from '@iconify-icons/vscode-icons/file-type-css';
import nodejsIcon from '@iconify-icons/logos/nodejs';
import fileTypeSql from '@iconify-icons/vscode-icons/file-type-sql';
import hadoopIcon from '@iconify-icons/logos/hadoop';
import postgresqlIcon from '@iconify-icons/logos/postgresql';
import mongodbIcon from '@iconify-icons/logos/mongodb';

import NavBar from "./navbar";
import bgImage from '../images/backGroundImg.jpg';

class Skills extends Component{
    render(){
        const backGroundStyle={ 
            position:'fixed', 
            flex:1, 
            width:"100%", 
            height:"100%",
            backgroundSize:"cover"

        }
        let cardStyle={
            border:"0.5px solid rgb(212, 212, 212)", 
            marginTop:"0.5%",
            marginBottom:"0.5%", 
            marginLeft:"1%" ,
            marginRight:"1%", 
            width:150, 
            height:200,
            WebkitBorderRadius:"5px",
            backgroundColor:"rgb(29,30,30,0)"
        }
        const textStyle={
            color:"#e4e8e6",
            fontFamily: 'unset', 
            textAlign:"center",
            marginBottom:"25%", 
            fontSize:25
        }
        let blue={
            backgroundColor:"rgb(3,169,244,0.6)"
        }
        let green={
            backgroundColor:"rgb(139, 195, 74,0.4)"
        }
        let yellow={
            backgroundColor:"rgb(255, 193, 7,0.7)"
        }
        let red={
            backgroundColor:"rgb(230, 74, 25,0.7)"
        }
        let pink={
            backgroundColor:"rgb(194, 24, 91,0.7)"
        }
        /*
        const properties = {
            duration: 5000,
            transitionDuration: 1000,
            infinite: true,
            indicators: true,
            arrows: false
          }
        //backgroundColor:"#202020"
        <img src={bgImage} alt="bg"  style={backGroundStyle} />
                <NavBar/>
        <Card.Img variant="top" src={java} style={{width:"100%",height:"100%"}}/>
        <MDBIcon icon="database" size="5x"/>
        */
        return(
            <div>
                <img src={bgImage} alt="bg"  style={backGroundStyle} />
                <NavBar/>
                <div >
                    <p style={{color:"#e4e8e6",fontFamily: 'cursive', fontSize:30, position:"relative", marginLeft:"2%"}}>Programming Languages:</p>
                    <CardGroup style={{position:"relative", display:"flex"}}>
                        <Card style={{...cardStyle}}>
                        
                            <Card.Body>
                            
                            <Card.Text style={textStyle}>
                            <p>
                            <Icon icon={javaIcon} width="90"/>
                            </p>
                            <p >
                            JAVA
                            </p>
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card style={{...cardStyle}}>
                            <Card.Body>   
                            <Card.Text style={textStyle}>
                                <p>
                                <Icon icon={pythonIcon} width="115"/>
                                </p>
                            <p>
                            PYTHON
                            </p>

                                
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card style={{...cardStyle}}>
                            <Card.Body>   
                            <Card.Text style={textStyle}>
                                <p>
                                <Icon icon={cIcon} width="100"/>
                                </p>
                                <p>

                                C
                                </p>

                                
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        
                    </CardGroup>
                </div>
                <div >
                    <p style={{color:"#e4e8e6",fontFamily: 'cursive', fontSize:30, position:"relative", marginLeft:"2%"}}>Web Technologies:</p>
                    <CardGroup style={{position:"relative", display:"flex"}}>
                        <Card style={{...cardStyle}}>
                            
                            <Card.Body>
                            
                            <Card.Text style={textStyle}>
                                <p>
                                <Icon icon={reactIcon} width="100"/>
                                </p>
                            
                                <p>
                                REACT NATIVE
                                </p>
                                
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        
                        <Card style={{...cardStyle}}>
                            <Card.Body>   
                            <Card.Text style={textStyle}>
                                <p>
                                <Icon icon={fileTypeHtml} width="100"/>
                                </p>
                                <p>
                                
                                HTML
                                </p>
                            
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card style={{...cardStyle}}>
                            <Card.Body>   
                            <Card.Text style={textStyle}>
                                <p>
                                <Icon icon={fileTypeCss} width="100"/>
                                </p>
                                <p>
                                CSS
                                </p>
                            
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card style={{...cardStyle}}>
                            <Card.Body>   
                            <Card.Text style={textStyle}>
                                <p>
                                <Icon icon={reactIcon} width="100"/>
                                </p>

                                <p>
                                REACT JS
                                </p>
                            
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card style={{...cardStyle}}>
                            <Card.Body>   
                            <Card.Text style={textStyle}>
                                <p>
                                <Icon icon={nodejsIcon} width="150" />
                                </p>
                                <p>
                                NODE JS
                                </p>
                            
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </CardGroup>
                </div>
                <div >
                    <p style={{color:"#e4e8e6",fontFamily: 'cursive', fontSize:30, position:"relative", marginLeft:"2%"}}>DATABASES:</p>
                    <CardGroup style={{position:"relative", display:"flex"}}>
                        <Card style={{...cardStyle}}>
                            
                            <Card.Body>
                            
                            <Card.Text style={textStyle}>
                                <p>
                                <Icon icon={fileTypeSql} width="100"/>
                                </p>
                            <p>
                            SQL
                            </p>
                                
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card style={{...cardStyle}}>
                            <Card.Body>   
                            <Card.Text style={textStyle}>
                                <p>
                                <Icon icon={postgresqlIcon} width="100" />
                                </p>
                                <p>

                                POSTGRE SQL
                                </p>
                            
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card style={{...cardStyle}}>
                            <Card.Body>   
                            <Card.Text style={textStyle}>
                                <p>
                                
                                <Icon icon={hadoopIcon} width="150"/>
                                </p>
                                <p>
                                HADOOP
                                </p>
                            
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        
                        <Card style={{...cardStyle}}>
                            <Card.Body>   
                            <Card.Text style={textStyle}>
                                <p>
                                <Icon icon={mongodbIcon}  width="250" />
                                </p>
                                <p>
                                MONGO DB
                                </p>
                            
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        
                    </CardGroup>
                </div>
            </div>
        )
    }
}
export default Skills;