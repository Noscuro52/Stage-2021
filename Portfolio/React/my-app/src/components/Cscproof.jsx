import React from "react";
import forma1 from '../img/CSC profile.PNG'
import forma2 from '../img/CSC team.PNG'
import forma3 from '../img/CSC points.PNG'
import forma4 from '../img/CSC mail.PNG'

function Cscproof() {    
    return (
        <div>
            <h1>Preuves de la participation au Cyber Security Challenge</h1>
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
        </div>
    )
    
}
export default Cscproof;