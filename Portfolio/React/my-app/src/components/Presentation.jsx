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
                        <p>J'ai réalisé mes études secondaires au Collège-Saint-Etienne des Hayeffes. J'avais pour option l'informatique, les langues et les mathématiques.
                            J'ai toujours été attiré par l'informatique dès mes secondaires et je savais déjà que c'était dans ce domaine que je voulais continuer mes études.
                        </p>
                    </div>
            </div>
                <div class="view view-first">
                    <img src={cs} alt="Erasmus"/>
                    <div class="mask">         
                        <h2>Année d'échange</h2>
                        <p>Après mes études secondaires, je ne me sentais pas de repartir directement dans des études supérieures, il me fallait une pause.
                            J'ai donc décidé de partir 10 mois à l'étranger pour faire une septième année. Je suis parti en Corée du Sud en 2017. 
                            Cette année a été une expérience exceptionnelle au niveau culturel, relationnel et social.
                        </p>
                </div>
                </div>
                <div class="view view-first">
                    <img src={he} alt="Univeristy"/>
                    <div class="mask">                  
                        <h2>Supérieur</h2>
                        <p>J'ai commencé mes études en informatique à l'Ephec en 2018. Je n'avais que très peu de notions d'informatique avant de commencer ces études.
                            J'ai tout de suite accroché à ce domaine et à la pédagogie de l'Ephec basée sur l'apprentisage et la pratique.
                        </p>
                    </div>
            </div>
                <div class="view view-first">
                    <img src={ps} alt="Passion" />
                    <div class="mask">
                        <h2>Passion</h2>
                        <p>Ma plus grande passion dans la vie est définitivement la musique. Pas un jour ne passe sans que je n'écoute des morceaux de musique.
                            Je joue de la guitare depuis 12 ans ansi que du ukulele et récemment du piano. La musique m'aide à me concentrer, me détendre, m'amuser et me dépasser.
                        </p>
                    </div>
                </div>
                                     
        </div>
    )
    
}
export default Presentation;