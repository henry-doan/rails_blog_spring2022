import { useState, useEffect } from 'react';

const PageForm = ({ addPage, id, title, body, author, setEdit, editPage }) => {
  const [page, setPage] = useState({ title: '', body: '', author: '' })

  useEffect( () => {
    if (id) {
      setPage({ title, body, author })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editPage(id, page)
      setEdit(false)
    } else {
      addPage(page)
    }
    setPage({ title: '', body: '', author: '' })
  }

  return (
    <>
      <h1>{id ? 'Edit' : 'New'} Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='title' 
          value={page.title}
          onChange={(e) => setPage({ ...page, title: e.target.value })}
          required
          placeholder='Title'
        />
        <input
          name='author' 
          value={page.author}
          onChange={(e) => setPage({ ...page, author: e.target.value })}
          required
          placeholder='Author'
        />
        <textarea
          name='body' 
          value={page.body}
          onChange={(e) => setPage({ ...page, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default PageForm;