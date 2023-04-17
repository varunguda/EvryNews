import React, { useState, useEffect } from 'react'

export default function Time() {

    let [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentDate(new Date().toLocaleString());
        }, 1000);

        return ()=> clearInterval(interval)
    }, []);

    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const getMonth = (num) =>{
        return months[num-1];
    }
  return (
    <div>
        {getMonth(currentDate.slice(3,4)) + ' '+ currentDate.slice(0,2) + ', '+ currentDate.slice(5,9) + ' | '+ currentDate.slice(11).toUpperCase()}
    </div>
  )
}
