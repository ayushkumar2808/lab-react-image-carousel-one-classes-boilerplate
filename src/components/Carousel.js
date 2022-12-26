import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state={
            image:0
        }
    }
    imgBack(){
        if(this.state.image>0){
            this.setState({
                image:this.state.image-1
            })
        }
        else if(this.state.image===0){
            this.setState({
                image:2
            })
        }
    }
    imgForward(){
        if(this.state.image<2){
            this.setState({
                image:this.state.image+1
            })
        }
        else if(this.state.image===2){
            this.setState({
                image:0
            })
        }
    }



    render(){
        return(
            <>
            <div id="display">
                <div className="border" onClick={()=>this.imgBack()}><ArrowBackIosIcon /></div>
                <div id="imgdiv">
                <h1 id="title">{images[this.state.image].title}</h1>
                <img id="image" src={images[this.state.image].img} alt="" />
                <h1 id="subtitle">{images[this.state.image].subtitle}</h1>
                </div>
                <div className="border" onClick={()=>this.imgBack()}><ArrowForwardIosIcon /></div>
            </div>
            </>
        )
    }
  
}

export default Carousel;