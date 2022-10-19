import Layaut from "../../components/Layaut";
import { posts } from "../../profile";
import Link from 'next/link'
import stylesHome from '../../styles/Home.module.css'


const PostCard = ({p}) => (
  <Link href={`blog/post?title=${p.title}`} as={`/blog/post/${p.title}`}>
  <div className='col-md-4'>
    <div className={stylesHome.cursorLink}>
    <div className="card h-100">
      <div className="overflow">
        <img src={p.image} alt="" className='card-img-top'/>
      </div>
      <div className="card-body">
        <h1>{p.title}</h1>
        <p>{p.content}</p>
      </div>
    </div>
  </div>
  </div>
  </Link>
)

const Blog = () => (
    <Layaut dark title='My Blog'>
      <div className="row mx-0">
      {
        posts.map((p, i) => (
          <PostCard p={p} key={i}/>
        ))
      }
      </div>
    </Layaut>
);

export default Blog;
