import Content from './Content';

const Blog = () => {
  return (
    <section
      id='blog'
      className='
  container containerBlog'
    >
      <h5>Blog</h5>
      <h2>Read My Blog</h2>
      <div className='articles'>
        <Content />
      </div>
    </section>
  );
};

export default Blog;
