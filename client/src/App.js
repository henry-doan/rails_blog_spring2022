import { useState, useEffect } from 'react';
import axios from 'axios';
import PageForm from './components/pages/PageForm';
import PageList from './components/pages/PageList';
import Navbar from './components/shared/Navbar';
import Home from './components/shared/Home';
import About from './components/shared/About';

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

  const editPage = (id, page) => {
    axios.put(`/api/pages/${id}`, { page })
      .then( res => {
        const updatedPages = pages.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        setPages(updatedPages)
      })
      .catch( err => console.log(err))
  }

  const deletePage = (id) => {
    axios.delete(`/api/pages/${id}`)
      .then( res => setPages(pages.filter( p => p.id !== id)))
      .catch( err => console.log(err))
  }

  return(
    <>
      {/* <Navbar />
      <Home />
      <About /> */}
      <h1>All Pages</h1>
      <PageForm addPage={addPage} />
      <PageList 
        pages={pages} 
        editPage={editPage} 
        deletePage={deletePage}
      />
    </>
  )
}

export default App;
