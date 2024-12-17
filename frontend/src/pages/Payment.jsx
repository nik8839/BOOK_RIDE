import React from 'react'
import axios from 'axios';
const  Payment=()=> {
  const handle=async()=>{
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKENED_URL}/paymentgateway/payment`);

      if (res && res.data) {
        console.log(res.data)
        window.location.href = res.data.links[1].href;
      }
    } catch (error) {
      console.error('Error:', error);
    }

  }
      return (
        <>
        {handle}
        </>
      )
    };

export default Payment