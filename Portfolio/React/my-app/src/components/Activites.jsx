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
                <img src={rn} alt="Réseau et sécurité"/>
                    <div class="mask">
                        <h2>Formation React Native</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
            </div>
            <div class="view view-first">
                    <img src={ai} alt="Electronique"/>
                    <div class="mask">                  
                        <h2>Formation IA</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
            </div>
                <div class="view view-first">
                    <img src={csc} alt="Programmation"/>
                    <div class="mask">         
                        <h2>Cyber Security Challenge</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
                </div>
                <div class="view view-first">
                    <img src={bmc} alt="IA" />
                    <div class="mask">
                        <h2>Brussel Management Challenge</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                </div>
                <div class="view view-first">
                    <img src={ral} alt="IA" />
                    <div class="mask">
                        <h2>Ralfagram</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                </div>
                <div class="view view-first">
                    <img src={scout} alt="IA" />
                    <div class="mask">
                        <h2>Scouts</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                </div>
                                     
        </div>
    )
    
}
export default Activites;