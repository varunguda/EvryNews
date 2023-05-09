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
    const getMonthName = (num) =>{
        return months[num-1];
    }

    const getMonth = (str) =>{
        let res = '';
        for(let i=0; i<str.length; i++){
            if(str[i]==='/'){
                return res;
            }
            else{
                res += str[i];
            }
        }
        return getMonthName(Number.parseInt(res));
    }

  return (
    <div>
        {getMonth(currentDate) + ' '+ currentDate.slice(0,2) + ', '+ currentDate.slice(5,9) + ' | '+ currentDate.slice(11).toUpperCase()}
    </div>
  )
}
