import React, { useEffect, useState } from "react";
import axios from "axios";
import "./countries.style.css"

export default function Countries() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function onload() {
            await axios.get("https://restcountries.com/v3.1/all")
            .then((data) => {
                console.log(data.data);
                setData(data.data);
            })
            .catch((error) => {
                console.error(error);
            })
        }
        onload();
    }, [])
  const Card = ({ img, alt, name }) => {
    return (<div key={name} className="Card">
        <img src={img} alt={alt} className="CardImage"/>
        <h3 className="CardName">{name}</h3>
    </div>);
  };

  return (<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
    {data.map((ele) => (
        <Card img={ele.flags.png} alt={ele.flags.alt} name={ele.name.common}/>
    ))}
  </div>);
}
