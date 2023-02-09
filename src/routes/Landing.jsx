import { useState }  from 'react';
import  Carousel  from '../components/carousel/Carousel'
import {data} from "../data"
import  Navigation  from '../components/navigation/Navigation'
import '../proyecto.css'

const Home = ({setCurrId}) => {
    return (
        <div>
            <div id='home' className='typewriter child'>
                <h1 className='fadeInUp'>Daira</h1>
                <h2>creative <span id='developer'>developer</span></h2>
            </div>
            <div className='child'>
                <Carousel tellId={setCurrId}/>
            </div>
        </div>
  );
} 
const Proyecto = ({id,  setCurrId}) => {
    const proyecto = data[id-1];
    const [currVid, setCurrVid]=useState("desk");
    return (
        <div>
            <div id='project-wraper'>
            <Navigation tellId={setCurrId}/>
                <div className='projectWrap'>
                    <h1 id="top">{proyecto.name}</h1>
                    {proyecto.link!== "" ? <a className='button' href={proyecto.link} target="_blank">visitar sitio</a> : ""}
                    <span className='role'>{proyecto.role}</span>
                    <h3>Herramientas utilizadas</h3>
                    <div>
                        {proyecto.tecnical.map(skill=>{
                            return (
                                <span className='tag'>{skill}</span>
                            )
                        })}
                    </div>
                    <h3>Desarrollo del proyecto</h3>
                    <div id='content' dangerouslySetInnerHTML={ { __html: proyecto.content } }></div>
                    <div className='videos'>
                        {proyecto.videoDesk!==""&& proyecto.videoMob!=="" ? 
                        <div className='vidSwitch'>
                            <button className={currVid === "desk" ? 'button selected':'button'} onClick={()=>{setCurrVid("desk")}}>Landscape</button>                     
                            <button className={currVid === "mob" ? 'button selected':'button'} onClick={()=>{setCurrVid("mob")}}>Portrait</button>
                        </div>
                        :""}
                    <video className={currVid === "desk" ? 'vidDesk show':'hide vidDesk'} controls src={"/" + proyecto.videoDesk} />                      
                    <video className={currVid === "mob" ? 'vidMob show':'hide vidMob'} controls src={"/" + proyecto.videoMob} />
                        
                    </div>
                </div>
                    <Carousel tellId={setCurrId}/>
            </div>

        </div>
  );
}
function Landing() {
    const [id, setId]=useState(0);
    const setCurrId = (newId) => {
        setId(newId);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    return(
        <div>
            { id==0 ? <Home setCurrId={setCurrId}/> : <Proyecto id={id} setCurrId={setCurrId}/>}
        </div>
    )
}

export default Landing;
