import todolist from '../../assets/todolist.jpg';

const Blog = () => {
  return (
    <section
      id='blog'
      className='
  container containerBlog'
    >
      <h2>Read My Blog</h2>
      <h5>Blog</h5>
      <div className='articles'>
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default Blog;

function Article() {
  return (
    <div className='article'>
      <img src={todolist} alt='' />
      <div className='cardBody'>
        <h4 className='cardTitle'>This is the title</h4>
        <p className='cardText'>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
        <button className='btn btnArticle'>Read more</button>
      </div>
      <div className='cardFooter'>
        <small className='textMuted'>updated 2023-05-18</small>
      </div>
    </div>
  );
}
