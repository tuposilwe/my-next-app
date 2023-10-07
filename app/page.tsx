'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import _ from "lodash";
import HeavyComponent from "./components/HeavyComponent";



export default function Home() {
 const [isVisible,setVisible] = useState(false);

  return (
   <main className="relative h-screen">
    <h1>Hello World</h1>
    <button onClick={() => {
      const users = [
        {name:'c'},
        {name:'b'},
        {name:'a'},
      ]

    const sorted =_.orderBy(users,['name']);
    console.log(sorted)


    }}>Show</button>
    {isVisible && <HeavyComponent/>}
    </main>
  )
}
