import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      setTours = response.json
      setLoading(false)
    } catch (error) {
      setLoading(false)
      return (
        error
      )
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if(loading) {
    return <Loading />
  }

  const clickHandler = (id) => {
    const newTours = tours.map((tours) => tours.id !== id)
  }

  return (
    <main>
      <Tours tours={tours} clickHandler={clickHandler}/>
    </main>
  );
};

export default App
