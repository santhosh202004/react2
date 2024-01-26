import React, { useState,useEffect } from 'react'

export default function Usestate() {
    const [data,setData] =useState(null);
    useEffect(()=>{
        fetch()
        .then(response => response.json())
        .then(result => setData(result));

        return()=>{

        };
        }, []);
  return (
    <div>
        {data ?(
            <p> Data: {JSON.stringify(data)}</p>):(<p>Loading...</p>)
            
            }
            </div>


           )
}

