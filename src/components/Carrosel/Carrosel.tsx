'use client'

import imgRocket from "../../assets/rocket.jpg"
import imgAstronaut from "../../assets/astronaut.jpg"
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import Image from 'next/image';
import {imageRocket, imageAstrnaut} from "@/assets/page";
import styled from  "../../styles/Carrosel.module.css"

const items = [
    {
        id: 1,
        title: "Swiper Carousel Example",
        text: "Lorem Ipsum  dolor sit amet consectetur adipisicing elit.",
        imageUrl: imageRocket,
    },
    {
        id: 2,
        title: "Swiper Carousel Example",
        text: "Lorem Ipsum  dolor sit amet consectetur adipisicing elit.",
        imageUrl: imageAstrnaut,
    },
]

export default class Carrosel extends Component { 
    render() { 
        return ( 
            <div className={styled.container}> 
              <h2>Some trips</h2> 
              <Carousel> 
                 {items.map((item) => {
                    return (
                        <div key={item.id} className={styled.carrosel}> 
                            <div>
                                <Image 
                                    src={item.imageUrl}
                                    fill
                                    alt=''
                                    className={styled.images}
                                />
                            </div>
                            <div className={styled.texts}>
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                 })}
              </Carousel> 
            </div> 
        ); 
    } 
};