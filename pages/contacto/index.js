import Image from "next/image";
import Link from "next/link";
import Layaut from "../../components/Layaut";

const Contact = () => {
  return (
    <Layaut title="Contactame">
      <div className="p-4 text-center">
        <h2>Canales de comunicacion</h2>
      </div>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-2 text-center">
          <Image
            priority
            height={70}
            width={70}
            alt="Celular"
            src={"/images/celIcon.png"}
          />
          <h4 className="my-3">0381-155479768</h4>
        </div>
        <div className="col-2 text-center">
          <Image
            priority
            height={70}
            width={70}
            alt="Celular"
            src={"/images/faceIcon.png"}
          />
          <h4 className="my-3">
            <Link href='https://www.facebook.com/atapenalba'><a target='_blank'>Alejandro Peñalba</a></Link>
          </h4>
        </div>
        <div className="col-2 text-center">
          <Image
            priority
            height={70}
            width={70}
            alt="Celular"
            src={"/images/linkedinIconRedondo.png"}
          />
          <h4 className="my-3">
            <Link href='https://www.linkedin.com/in/alejandro-pe%C3%B1alba/'><a target='_blank'>Alejandro Peñalba</a></Link>
          </h4>
        </div>
        <div className="col-2 text-center">
          <Image
            priority
            height={70}
            width={70}
            alt="Celular"
            src={"/images/emailIcon.png"}
          />
          <h4 className="my-3">atapenalba16@gmail.com</h4>
        </div>
      </div>
      </div>
    </Layaut>
  );
};

export default Contact;
