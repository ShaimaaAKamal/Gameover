import React from 'react'
import { useLoaderData } from 'react-router-dom'
export default function GameDetails() {
  const {data}=useLoaderData();
  return (
    <div>GameDetails</div>
  )
}
