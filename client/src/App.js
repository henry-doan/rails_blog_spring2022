import { useState, useEffect } from 'react';
import axios from 'axios';
import PageNew from './components/pages/PageNew';

const App = () => {
  const [pages, setPages] = useState([])

  useEffect( () => {
    axios.get('/api/pages')
      .then( res => setPages(res.data))
      .catch( err => console.log(err))
  }, [])

  const addPage = (page) => {
    axios.post('/api/pages', { page })
      .then( res => setPages([...pages, res.data]))
      .catch( err => console.log(err))
  }

  return(
    <>
      <h1>All Pages</h1>
      <PageNew addPage={addPage} />
      <ul>
        { pages.map( p => (
          <p key={p.id}>{p.title}</p>
        ))}
      </ul>
    </>
  )
}

export default App;
