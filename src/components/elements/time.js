import React, { useState, useEffect } from 'react'

export default function Time() {

    let [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentDate(new Date().toLocaleString());
        }, 1000);

        return ()=> clearInterval(interval)
    }, []);

  return (
      <div>
        {currentDate}
    </div>
  )
}
