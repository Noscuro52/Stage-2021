import React from "react";
import app from '../img/Mobile-App-Development.png'
import ral from '../img/Ralf.jpg'
import ts from '../img/Safety.jpg'
import ar from '../img/AdminReseau.jpg'

function Projet() {    
    return (
        <div class="main">
            <h1>Projets</h1>
            <p>Voici la liste des principaux projets que j'ai réalisé dans le cadre de mes études à l'EPHEC en Technologie de l'informatique</p>
            <div class="view view-first">
                <img src={app} alt="Projet d'intégration"/>
                    <div class="mask">
                        <h2>Projet d'intégration</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
            </div>
            <div class="view view-first">
                    <img src={ral} alt="Ralfagram"/>
                    <div class="mask">                  
                        <h2>Projet de développement Web</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
            </div>
                <div class="view view-first">
                    <img src={ts} alt="Traitement des signaux"/>
                    <div class="mask">         
                        <h2>Projet de traitement des signaux</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
                </div>
                <div class="view view-first">
                    <img src={ar} alt="Admin réseau" />
                    <div class="mask">
                        <h2>Projet d'administration des réseaux</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                </div>
                <br></br>
                  <h3 id="sous-lien">Tous ces projets et d'autres sont disponibles sur mon lien <a href="https://github.com/Noscuro52" target="_blank" rel="noreferrer"><i>Github</i></a></h3>                   
        </div>
    )
    
}
export default Projet;