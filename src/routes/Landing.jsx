import { useState, useEffect }  from 'react';
import  Carousel  from '../components/carousel/Carousel'
import {dataEsp} from "../dataEsp"
import {dataEng} from "../dataEng"
import  Navigation  from '../components/navigation/Navigation'
import '../proyecto.css'
import {UIText} from "../UIText"

const Home = ({setCurrId, setLanguage, language}) => {
    return (
        <div>
            <Navigation tellId={setCurrId} setLanguage={setLanguage} language={language} />
            <div id='home' className='typewriter child'>
                <h1 className='fadeInUp'>Daira</h1>
                <h2>creative <span id='developer'>developer</span></h2>
            </div>
            <div className='child'>
                <Carousel tellId={setCurrId} language={language}/>
            </div>
        </div>
  );
} 
const Proyecto = ({id,  setCurrId, setLanguage, language}) => {
    const text = UIText[0]
    let data
    let textKey
    if(language === "esp") { 
        data=dataEsp
        textKey = 0
    } else{ 
        data=dataEng
        textKey = 1
    }
    const proyecto = data[id-1];
    const [currVid, setCurrVid]=useState("desk");
    useEffect(() => {
        proyecto.videoDesk !== "" ? setCurrVid("desk") : setCurrVid("mob"); 
        proyecto.videoDesk !== "" ? console.log('setCurrVid("desk")') : console.log('setCurrVid("mob")'); 
    }, [proyecto.videoDesk])
    return (
        <div>
            <div id='project-wraper'>
            <Navigation tellId={setCurrId} setLanguage={setLanguage} language={language} />
                <div className='projectWrap'>
                    <h1 id="top">{proyecto.name}</h1>
                    {proyecto.link!== "" ? <a className='button' href={proyecto.link} target="_blank">{text.visit[textKey]}</a> : ""}
                    <span className='role'>{proyecto.role}</span>
                    <h3>{text.tools[textKey]}</h3>
                    <div>
                        {proyecto.tecnical.map(skill=>{
                            return (
                                <span className='tag'>{skill}</span>
                            )
                        })}
                    </div>
                    <h3>{text.poyectDescription[textKey]}</h3>
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
                    <Carousel tellId={setCurrId} language={language} />
            </div>

        </div>
  );
}
function Landing() {
    const [id, setId]=useState(0);
    var userLang = navigator.language || navigator.userLanguage
    let baseLang
    userLang === 'es-ES' ? baseLang = 'esp' : baseLang ='eng'
    const [language, setLanguage]=useState(baseLang)

    const setCurrId = (newId) => {
        setId(newId);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    
    const setCurrLanguage = () => {
        console.log ("The language is: " + userLang);
        setLanguage(language === 'esp'? 'eng': 'esp');
    }
    return(
        <div>
            { id===0 ? <Home setCurrId={setCurrId} setLanguage={setCurrLanguage} language={language}/> : <Proyecto id={id} setCurrId={setCurrId} setLanguage={setCurrLanguage} language={language} />}
        </div>
    )
}

export default Landing;
