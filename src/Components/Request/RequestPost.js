import React from 'react'
import axios from 'axios'

const requestPost = (props) => {

    axios.post(postRequest)
    .then(response =>{
          console.log(response.data.data);
    })
    .catch(error =>{
        console.log(error);
    })

    return (
        <div>
            
        </div>
    )
}

export default requestPost;