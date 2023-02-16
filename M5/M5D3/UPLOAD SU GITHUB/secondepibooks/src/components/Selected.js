import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react'
const Selected = () => {
    const [isClick, setIsClick] = useState(false)
    const buttonClick = () => {
      setIsClick(current => !current)
    }

    useEffect( () => {
        console.log(isClick);
    }, [isClick]);
    
  return (
<Button variant='outline-warning mb-2' onClick={buttonClick}>Selected</Button>  )
}

export default Selected