import React from "react";
import forma1 from '../img/Formation IA.PNG'
import forma2 from '../img/Formation IA 2.PNG'
import forma3 from '../img/Formation accessible 1.PNG'
import forma4 from '../img/Formation accessible 2.PNG'
import forma5 from '../img/Formation React Native 3.PNG'

function Iaproof() {    
    return (
        <div>
            <h1>Preuves de la formation en intelligence artificielle et au web accessible</h1>
            <div id='divImgPreuve'>
            <img id ='imgPreuve' src={forma1} alt='preuve1'></img>
            </div>
            <div id='divImgPreuve'>
            <img id ='imgPreuve' src={forma2} alt='preuve2'></img>
            </div>
            <div id='divImgPreuve'>
            <img id ='imgPreuve' src={forma3} alt='preuve3'></img>
            </div>
            <div id='divImgPreuve'>
            <img id ='imgPreuve' src={forma4} alt='preuve4'></img>
            </div>
            <div id='divImgPreuve'>
            <img id ='imgPreuve' src={forma5} alt='preuve5'></img>
            </div>
        </div>
    )
    
}
export default Iaproof;