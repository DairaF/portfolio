// import React from 'react';
// import  Carousel  from '../components/carousel/Carousel'
//  function Landing () {
//     return(
//         <div>
//             <div id='home' className='typewriter child'>
//                 <h1 className='fadeInUp'>Daira</h1>
//                 <h2>creative <span id='developer'>developer</span></h2>
//             </div>
//             <div className='child'>
//                 <Carousel/>
//             </div>
//         </div>
//     )
// }
// export default Landing;
import React from 'react';
import  Carousel  from '../components/carousel/Carousel'


function Landing() {


    return (
        <div>
            <div id='home' className='typewriter child'>
                <h1 className='fadeInUp'>Daira</h1>
                <h2>creative <span id='developer'>developer</span></h2>
            </div>
            <div className='child'>
                <Carousel/>
            </div>
        </div>
  );
}

export default Landing;
