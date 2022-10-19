import Head from "next/head";
import Image from "next/image";
import Layaut from "../components/Layaut";
import { skills, experience, projects } from "../profile";
import Link from "next/link";

const Index = ({user}) => (
  <Layaut footer>
    <div className="container">
      <header className="row">
        <div className="col-md-12">
          <div className="cardcard-body bg-secondary text-light">
            <div className="row p-4">
              <div className="col-md-4">
                <Image
                  priority
                  height={220}
                  width={210}
                  src="/images/profile.jpg"
                  alt="Alejandro Penalba"
                />
              </div>
              <div className="col-md-8">
                <h1>Alejandro Penalba</h1>
                <h3>Programador Full Stack</h3>
                <p>
                  Soy un Programador en FullStack, en búsqueda de nuevos
                  desafíos, donde pueda crecer tanto en lo profesional como en
                  lo personal, y desarrollar las habilidades adquiridas en mis
                  estudios y experiencias prvias. Facilidad para las relaciones
                  interpersonales y trabajo en equipo. Gran capacidad
                  autodidacta. En constante aprendizaje de nuevas tecnologías.
                </p>
                <Link href="/contact">
                  <a className="btn btn-primary">Contactarme</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="row py-2">
        <div className="col-md-4">
          <div className="card h-100 bg-light">
            <div className="card-body">
              <h1>Habilidades</h1>
              {skills.map((skill, i) => (
                <div className="py-3 row justify-content-between" key={i}>
                  <div className="col-8 text-start">
                    <h5>{skill.skill}</h5>
                  </div>
                  <div className="col-4 text-end">
                    <h5>{skill.percentage}%</h5>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card h-100 bg-light">
            <div className="card-body">
              <h1>Experiencias</h1>
              <ul>
                {experience.map((exp, i) => (
                  <li key={i} className='my-5'>
                    <h3>{exp.title}</h3>
                    <h5>{exp.company}</h5>
                    <h5>
                      {exp.from}-{exp.to}
                    </h5>
                    <p>{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(({ name, description, image, web }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      {/* <Image
                        priority
                        height={200}
                        width={100}
                        src={`${image}`}
                        alt="Alejandro Penalba"
                      /> */}
                      <img src={`${image}`} alt="" className="card-img-top h-100" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <Link href={web}>
                        <a target='_blank' className="btn btn-outline-primary">Ver Mas</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href={user.html_url}>
                <a className="btn btn-outline-light" target='_blank'>Mas Projectos</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layaut>
);

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/canto1380");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;
  return {
    props: {
      user: data
    },
  };
}

export default Index;
