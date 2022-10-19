import Link from "next/link";
import Layaut from "../components/Layaut";

const custom404 = () => (
  <Layaut>
    <div className="text-center">
      <h1>404</h1>
      <p>This page does not exists. Please return to
        <Link href='/'><a> Home</a></Link>
      </p>
    </div>
  </Layaut>
)

export default custom404
