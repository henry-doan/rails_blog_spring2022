import Page from './Page';

const PageList = ({ pages, editPage, deletePage }) => (
  <>
    <ul>
      { pages.map( p => (
        // <Page key={p.id} id={p.id} title={p.title} body={p.body} author={p.author} />
        <Page key={p.id} {...p} editPage={editPage} deletePage={deletePage} />
      ))}
    </ul>
  </>
)

export default PageList;