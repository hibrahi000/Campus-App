import React from 'react'
import axios from 'axios'

const requestGet = () => {

    axios.get("")
    .then(response =>{
          console.log(response.data.data);
    })
    .catch(error =>{
        console.log(error);
    })

    return (
        <div>
            Data
        </div>
    )
}

export default requestGet;