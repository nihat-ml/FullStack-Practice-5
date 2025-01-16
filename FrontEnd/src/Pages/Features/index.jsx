import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import axios from 'axios'


function Features() {
    const [features, setFeatures] = useState([])
    function getFeatures(){
        axios.get("http://localhost:3000/features")
        .then((res)=>{
            setFeatures(res.data)
        })
    }

    useEffect(()=>{
        getFeatures()
    },[])
  return (
    <>
      <div className={styles.container}>
        <h1 style={{textAlign:"center", margin:"10px 0px"} }>Featured Products</h1>
            <div className={styles.cards}>
                {features.map((feature)=>(
                    <div className={styles.card} key={feature._id}>
                    <img style={{objectFit:"cover", width:"100%", height:"100%"}} src={feature.image} alt="" />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <span>${feature.price}</span>
                </div>
                ))}
            </div>
      </div>
    </>
  )
}

export default Features
