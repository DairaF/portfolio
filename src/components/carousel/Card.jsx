import { Link } from "react-router-dom";
const Card = ({ handlePointerEvent, name, thumbnail, cardStyle, id, role, description, tecnical, tellId }) => {
  return (
    <article className={cardStyle}>
        <div
          className="card"
          onMouseDown={handlePointerEvent}
          onTouchStart={handlePointerEvent}
        >
          <div className="cardImg" style={{backgroundImage: `url(/${thumbnail})`,}}>
          </div>
          <a href={"/proyectos/"+id}>
            <h2>{name}</h2>
          </a>
          <span className="roleCard">{role}</span>
          <p>{description}</p>
          <div className="skills">
          <div className="tag-container">
            {tecnical.map(skill=>{
            return(
              <span className="tag">{skill}</span>
            )
          })}
          </div>
          </div>
          <button className="button" onClick={()=>{tellId(id)}}>Ver más</button>
          {/* <a href="/proyectos/id" as={"/proyectos/"+id}>
            Ver más
          </a> */}
        </div>
    </article>
  );
};

export default Card;
