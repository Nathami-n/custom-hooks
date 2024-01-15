import React, { useState } from 'react'
import useFetch from './utils/useFetch'

const App = () => {

  const [url, setUrl] = useState('http://localhost:3000/Students');

  const {data, isPending, error} = useFetch(url);
  console.log(data[0].name)

  return (
    <div>
      {isPending && <h1>Loading...</h1> }
      {error && <h1>{`${error}`}</h1>}
      {data && data.map((item)=> {
        <h1> {item.name}</h1>
      })}
    </div>
  )
}

export default App