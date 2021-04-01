import React from "react";
import rs from '../img/reseau-et-securite.jpg'
import el from '../img/electronique.png'
import pr from '../img/programmation.jpg'
import ai from '../img/Artificial-Intelligence-AI.jpg'

function Competences() {    
    return (
        <div class="main">
            <h1>Compétences</h1>
            <p>Voici la liste des principales compétences que j'ai acquise dans le cadre de mes études à l'EPHEC en Technologie de l'informatique</p>
            <div class="view view-first">
                <img src={rs} alt="Réseau et sécurité"/>
                    <div class="mask">
                        <h2>Réseau et sécurité</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
            </div>
            <div class="view view-first">
                    <img src={el} alt="Electronique"/>
                    <div class="mask">                  
                        <h2>Electronique</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
            </div>
                <div class="view view-first">
                    <img src={pr} alt="Programmation"/>
                    <div class="mask">         
                        <h2>Programmation</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
                </div>
                <div class="view view-first">
                    <img src={ai} alt="IA" />
                    <div class="mask">
                        <h2>Intelligence artificielle</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                </div>
                                     
        </div>
    )
    
}
export default Competences;