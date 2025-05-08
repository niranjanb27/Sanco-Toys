import React, { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import axios from 'axios';

function AllUsers() {
    const {getToken} = useAuth();
    const fetchUsers=async()=>{
        const token =await getToken();
        try {
            const res= await axios.post("");
        } catch (error) {
            
        }   
     }
  return (
    <div>AllUsers</div>
  )
}

export default AllUsers