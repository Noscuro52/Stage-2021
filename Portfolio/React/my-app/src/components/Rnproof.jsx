import React from "react";
import forma1 from '../img/Formation React Native.PNG'
import forma2 from '../img/Formation React Native 2.PNG'
import forma3 from '../img/Formation React Native 3.PNG'

function Rnproof() {    
    return (
        <div>
            <h1>Preuves de la formation en React Native</h1>
            <div id='divImgPreuve'>
            <img id ='imgPreuve' src={forma1} alt='preuve1'></img>
            </div>
            <div id='divImgPreuve'>
            <img id ='imgPreuve' src={forma2} alt='preuve2'></img>
            </div>
            <div id='divImgPreuve'>
            <img id ='imgPreuve' src={forma3} alt='preuve3'></img>
            </div>
        </div>
    )
    
}
export default Rnproof;