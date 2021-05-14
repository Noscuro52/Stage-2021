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
                        <p>J'ai en 3 annnées à l'Ephec acquis des compétences en réseau. En passant par le routage, la connectivité, la disponibilité et la sécurité, j'ai
                            appris beaucoup de notion qui me permettent de comprendre et gérer des réseaux.
                        </p>
                    </div>
            </div>
            <div class="view view-first">
                    <img src={el} alt="Electronique"/>
                    <div class="mask">                  
                        <h2>Electronique</h2>
                        <p>L'électronique et l'électricité sont des matières que j'ai découverte et que j'apprécie grandement. Nous sommes constamment
                            entouré d'électronique et je trouve cela fascinant d'essayer de comprendre ces choses. C'est sans aucun doute un des domaines 
                            dans lequel je souhaite me perfectionner.
                        </p>
                    </div>
            </div>
                <div class="view view-first">
                    <img src={pr} alt="Programmation"/>
                    <div class="mask">         
                        <h2>Programmation</h2>
                        <p>J'ai chaque année au sein de l'Ephec appris plusieurs language plus ou moins utiles. J'ai commencé par apprendre les 
                            bases avec du Javascript et du HTML, du CSS et du SQL. J'ai par la suite appris le python et son framework Django ainsi que React et 
                            son alter mobile React Native.
                        </p>
                </div>
                </div>
                <div class="view view-first">
                    <img src={ai} alt="IA" />
                    <div class="mask">
                        <h2>Intelligence artificielle</h2>
                        <p>Je n'ai pas appris l'IA au sein de l'Ephec elle-même mais pendant mon stage. J'ai réalisé mon stage chez
                            Phoenix AI et j'ai donc appris à développer des modèles d'intelligence artificielle et à les intégrer sur des processeurs
                            capable de traiter un flux vidéo en temps réel.
                        </p>
                    </div>
                </div>
                                     
        </div>
    )
    
}
export default Competences;