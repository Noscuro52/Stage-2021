import React from "react";
import forma1 from '../img/Scout.JPG'
import forma2 from '../img/Scout 2.JPG'
import forma3 from '../img/Scout 3.jpg'

function Scoutproof() {    
    return (
        <div>
            <h1>Preuves de mon implication dans les mouvements de jeunesse</h1>
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
export default Scoutproof;