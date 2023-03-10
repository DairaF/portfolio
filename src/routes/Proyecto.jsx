import React from 'react';
import  Carousel  from '../components/carousel/Carousel'
import { useParams } from 'react-router-dom';
import  Navigation  from '../components/navigation/Navigation'
import '../proyecto.css'
function Proyecto({data}) {
    const params = useParams();
    let id = params.id;
    const proyecto = data[id-1];
    const videoUrl = "/" + proyecto.video;
    return (
        <div>
            <div id='project-wraper'>
            <Navigation/>
                <div className='projectWrap'>
                    <h1>{proyecto.name}</h1>
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
                    <div dangerouslySetInnerHTML={ { __html: proyecto.content } }></div>
                    <video controls src={videoUrl} />
                </div>
                    <Carousel/>
            </div>

        </div>
  );
}

export default Proyecto;
