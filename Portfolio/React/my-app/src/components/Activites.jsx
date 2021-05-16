import React from "react";
import rn from '../img/ReactNative.png'
import csc from '../img/cybersecurity.png'
import bmc from '../img/BMC.png'
import ai from '../img/formation.jpg'
import ral from '../img/Ralf.jpg'
import scout from '../img/scout.png'

function Activites() {    
    return (
        <div class="main">
            <h1>Activités</h1>
            <p>Voici la liste des activités réalisées en dehors du cadre des cours de l'EPHEC TI</p>
            <div class="view view-first">
                <img src={rn} alt="Formation React Native"/>
                    <div class="mask">
                        <h2>Formation React Native</h2>
                        <p>J'ai réalisé une formation React Native sur le site Open Classroom. Cette formation m'a aidée à
                            développer une application dans le cadre du cours d'intégration. La formation a duré une trentaine d'heures.
                        </p>
                    </div>
            </div>
            <div class="view view-first">
                    <img src={ai} alt="Formation IA et accessibilité"/>
                    <div class="mask">                  
                        <h2>Formation IA et accessibilité</h2>
                        <p>Au début de mon stage, j'ai pris l'initiative de suivre une formation d'introduction à l'IA qui est un domaine qui
                            m'était complètement flou. J'ai aussi suivi une formation sur l'accessibilité numérique suite à la séance d'information
                            que nous avons reçue lors des cours à l'Ephec.
                        </p>
                    </div>
            </div>
                <div class="view view-first">
                    <img src={csc} alt="CSC"/>
                    <div class="mask">         
                        <h2>Cyber Security Challenge</h2>
                        <p>J'ai en 2020 et 2021 participé à l'édition du Cyber Security Challenge. Un jeu virtuel basé sur la sécurité qui consiste à retrouver des flags
                            de différentes manières dans différents domaines. Ce challenge très complexe m'a beaucoup amusé et m'a beaucoup appris.
                        </p>
                </div>
                </div>
                <div class="view view-first">
                    <img src={bmc} alt="BMC" />
                    <div class="mask">
                        <h2>Brussel Management Challenge</h2>
                        <p>Les 19 et 20 mars 2021, nous avons dans une équipe de 5, participé au BMC. 3 cases nous ont été soumises et nous avions 4h pour
                            trouver une solution à chacune d'elles. Cette expérience très différente de ce que nous faisons en informatique m'a appris
                            beaucoup de choses que je n'ai jamais eu l'occasion d'expérimenter.
                        </p>
                    </div>
                </div>
                <div class="view view-first">
                    <img src={ral} alt="Ralfagram" />
                    <div class="mask">
                        <h2>Ralfagram</h2>
                        <p>Nous avons avec un autre étudiant d'IT à la suite du projet de développement web continué celui-ci. Le photographe Jerome Duikers a souhaité
                            nous engager pour continuer son site en dehors du cadre du cours. Nous avons travaillé une soixantaine d'heures (25h pour moi) supplémentaires pour
                            rendre ce site totalement utilisable.
                        </p>
                    </div>
                </div>
                <div class="view view-first">
                    <img src={scout} alt="Scouts" />
                    <div class="mask">
                        <h2>Scouts</h2>
                        <p>Les scouts ont toujours fait partie de ma vie. J'ai commencé les baladins en 2005 à Brussel avant de rejoindre la 22ème BW à Mont-Saint-Guibert en
                            2007. Je n'y ai pas bougé depuis, je suis chef louveteaux depuis 3 ans ou j'organise : jeu, journée, week-end et camp pour 40 enfants
                            de 8 à 12 ans.
                        </p>
                    </div>
                </div>
                                     
        </div>
    )
    
}
export default Activites;