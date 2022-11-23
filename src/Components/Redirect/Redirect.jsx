import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Redirect({redir}) {
    const navigate=useNavigate();
    useEffect(()=> navigate(redir),[])
  return null;
}
