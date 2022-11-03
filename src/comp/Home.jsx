import React from 'react'
import {useEffect,useRef} from "react";
import axios from "axios";
import Card from './Card';
import { SimpleGrid } from '@chakra-ui/react'


//import {SimpleGrid} from '@chakra-ui/react';
//import Card from "./Card";

function Home() {
  const myArr = useRef([])
  const requast= async() =>{
    
      const x =await axios.get("https://rickandmortyapi.com/api/character");
      myArr.current=x.data.results;
    
  }
  useEffect(() => {
     requast()
  
  },[])
  

  return (
    <>
       <SimpleGrid columns={[1,2,3,4]} spacing='10px'>
      {myArr.current.map((e,i)=>{
        return <div key={i}><Card imgr={e.image} name={e.name} gender={e.gender} origin={e.origin.name}/></div>
       
      })}</SimpleGrid>
    </>
  );
}

export default Home;
