import React from "react";
import forma1 from '../img/Ralf.jpg'
import forma2 from '../img/Ralfagram 3.PNG'
import forma3 from '../img/Ralfagram 4.PNG'
import forma4 from '../img/Ralfagram 5.PNG'

function Ralfproof() {    
    return (
        <div>
            <h1>Preuves de la participation au développement du site de Ralfagram</h1>
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
            <img id ='imgPreuve' src={forma4} alt='preuve3'></img>
            </div>
        </div>
    )
    
}
export default Ralfproof;