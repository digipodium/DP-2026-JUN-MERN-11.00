import axios from 'axios';
import React, { useEffect } from 'react'

const BrowseProduct = () => {

    const fetchProduct = async () => {
        const res = await axios.get('http://localhost:5000/product/getall');
        const data = res.data;
        console.log(data);
    };

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third]);
    

    return (
        <div>BrowseProduct</div>
    )
}

export default BrowseProduct;