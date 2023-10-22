// create your App component here
import React, {useState, useEffect} from 'react'

const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState('')

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            if(data.status === 'success') {
                setImage(data.message)
                setIsLoading(true)
            }
        })
    },[])
    if(!isLoading) return <p>Loading ...</p>
  return (
    <div>
      <img src={image} alt='A Random Dog'></img>
    </div>
  )
}

export default App
