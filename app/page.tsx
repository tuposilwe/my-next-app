'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import('./components/HeavyComponent'),
{
  ssr:false,
  loading: () => <p>Loading...</p>
  
});

export default function Home() {
 const [isVisible,setVisible] = useState(false);

  return (
   <main className="relative h-screen">
    <h1>Hello World</h1>
    <button onClick={() => setVisible(!isVisible )}>Show</button>
    {isVisible && <HeavyComponent/>}
    </main>
  )
}
