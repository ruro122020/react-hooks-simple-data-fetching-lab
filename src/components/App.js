// create your App component here
import React, {useState, useEffect} from 'react'

const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState('')

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => console.log(data))
    })
  return (
    <div>
      
    </div>
  )
}

export default App
