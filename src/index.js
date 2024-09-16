import React from "react";
import ReactDom from "react-dom/client";
import "./style.css"

import d1 from "./assets/images/d1.jpeg"
import d2 from "./assets/images/d2.jpeg"
import d3 from "./assets/images/d3.jpeg"
import d4 from "./assets/images/d4.jpeg"
import d5 from "./assets/images/d5.jpeg"
import d6 from "./assets/images/d6.jpeg"
import d7 from "./assets/images/d7.jpeg"
import d8 from "./assets/images/d8.jpeg"


function Gallery(props) {
    return (
        <div className="image">
            <img className="pic" src={props.image} alt="dog"></img>
            <h3> {props.Name}</h3>  
        </div>

    )
}

const root=ReactDom.createRoot(document.getElementById("root"))

var list = [
    {
        image: d1,
        Name: "Australian Coober dog",
    },
    {
        image: d2,
        Name: "Cairn heir",
    },
    {
        image: d3,
        Name: "puppy",
    },
    {
        image: d4,
        Name: "Cavalier King charles spaniel",
    },
    {
        image: d5,
        Name: "Maltipoo",
    },
    {
        image: d6,
        Name: "golden doodle",
    },
    {
        image: d7,
        Name: "Shih tzu",
    },
    {
        image: d8,
        Name: "Yorkshire Terrier",
    }
]

root.render
    (
        list.map(function (item) {
            return <Gallery image={item.image} Name={item.Name} ></Gallery>
        }))