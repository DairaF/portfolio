import { Link } from "react-router-dom";
import {UIText} from "../../UIText"
const Card = ({ handlePointerEvent, name, thumbnail, cardStyle, id, role, description, tecnical, tellId, language }) => {
  const text = UIText[0]
  let textKey
  language === "esp" ? textKey=0 : textKey=1
  return (
    <article className={cardStyle}>
        <div
          className="card"
          onMouseDown={handlePointerEvent}
          onTouchStart={handlePointerEvent}
        >
          <div className="cardImg" style={{backgroundImage: `url(/${thumbnail})`,}}>
          </div>
            <h2>{name}</h2>
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
          <button className="button" onClick={()=>{tellId(id)}}>{text.expand[textKey]}</button>
          {/* <a href="/proyectos/id" as={"/proyectos/"+id}>
            Ver más
          </a> */}
        </div>
    </article>
  );
};

export default Card;
