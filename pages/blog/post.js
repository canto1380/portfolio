import { useRouter } from "next/router";
import { posts } from "../../profile";
import Layaut from "../../components/Layaut";
import Image from "next/image";

const Post =() => {
  const router = useRouter()
  const title = router.query.title
  const currentPost = posts.filter(post => post.title === router.query.title)[0]
  return (
    <Layaut title={`Post to ${currentPost.title}`}>
      <div className="text-center pt-3">
        <Image priority src={currentPost.image} height={400} width={500} alt={title}/>
        {/* <img src={currentPost.image} className='img-fluid' alt=""/> */}
        <p className="">{currentPost.content}</p>
      </div>
    </Layaut>
  )
}

export default Post
