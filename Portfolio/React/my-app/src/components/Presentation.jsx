import React from "react";
import hs from '../img/Collège_Saint-Etienne_des_Hayeffes.jpg'
import he from '../img/bg-ephec-home.jpg'
import cs from '../img/SouthKorea.jpg'
import ps from '../img/musique-cd.jpg'

function Presentation() {    
    return (
        <div class="main">
            <h1>Présentation</h1>
            <p>Je m'appelle Tom Ozorai, étudiant en informatique. Voici mon portfolio réalisé dans le cadre de l'EPHEC.</p>
            <div class="view view-first">
                <img src={hs} alt="High School"/>
                    <div class="mask">
                        <h2>Secondaire</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
            </div>
            <div class="view view-first">
                    <img src={he} alt="Univeristy"/>
                    <div class="mask">                  
                        <h2>Supérieur</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
            </div>
                <div class="view view-first">
                    <img src={cs} alt="Erasmus"/>
                    <div class="mask">         
                        <h2>Erasmus</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
                </div>
                <div class="view view-first">
                    <img src={ps} alt="Passion" />
                    <div class="mask">
                        <h2>Passion</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                </div>
                                     
        </div>
    )
    
}
export default Presentation;