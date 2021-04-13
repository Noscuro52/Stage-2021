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
                        <p>Nous avons en 3ème année réalisé un projet d'intégration en groupe de 7. Notre projet appelé DoorZ, il consistait à
                            développer une application qui permettrait d'ouvrir une porte. Il avait pour but d'aider les personnes à mobilité réduite
                            à accéder à des espaces plus efficacement.
                        </p>
                    </div>
            </div>
            <div class="view view-first">
                    <img src={ral} alt="Ralfagram"/>
                    <div class="mask">                  
                        <h2>Projet de développement Web</h2>
                        <p>Nous avons en 2ème année par groupe de 3, réalisé un site web pour un client. Le site web qu'on a développé s'appelle "Ralfagram",
                            il nous a été demandé par un photographe qui voulait une meilleur visibilité de son travail. Je suis particulièrement fier de 
                            ce projet que nous avons même continué en dehors du cadre des cours.
                        </p>
                    </div>
            </div>
                <div class="view view-first">
                    <img src={ts} alt="Traitement des signaux"/>
                    <div class="mask">         
                        <h2>Projet de traitement des signaux</h2>
                        <p>Nous avons en 3ème année par groupe de 5, réalisé un projet en python. Ce projet avait pour but grâce au traitement des signaux, de pouvoir
                            compter un nombre de personnes qui passe une ligne. Ce projet a été une base pour mon apprentissage d'IA par la suite.
                        </p>
                </div>
                </div>
                <div class="view view-first">
                    <img src={ar} alt="Admin réseau" />
                    <div class="mask">
                        <h2>Projet d'administration des réseaux</h2>
                        <p>Nous avons en 2ème année par groupe de 3, réalisé une infrastructure réseau pour une entreprise virtuelle. Nous avons 
                            implémenté un serveur web, mail, voip et toutes les sécurités liées à ces services
                        </p>
                    </div>
                </div>
                <br></br>
                  <h3 id="sous-lien">Tous ces projets et d'autres sont disponibles sur mon lien <a href="https://github.com/Noscuro52" target="_blank" rel="noreferrer"><i>Github</i></a></h3>                   
        </div>
    )
    
}
export default Projet;