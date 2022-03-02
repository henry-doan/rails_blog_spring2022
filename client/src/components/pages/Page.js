import { useState } from 'react';
import PageForm from './PageForm';

const Page = ({ id, title, author, body, editPage, deletePage }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        { editing ? 
          <>
            <PageForm 
              id={id}
              title={title}
              body={body}
              author={author}
              setEdit={setEdit}
              editPage={editPage}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
          : 
          <>
            <h1>{title}</h1>
            <h2>Author: {author}</h2>
            <p>{body}</p>
            <button onClick={() => setEdit(true)}>Edit</button>
            <button onClick={() => deletePage(id) }>Delete</button>
          </>
        }
      </li>
    </>
  )
}

export default Page;