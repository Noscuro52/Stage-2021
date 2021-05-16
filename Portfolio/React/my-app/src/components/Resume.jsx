import React from "react";

function Resume() {    
    return (
        <div id="userContenu">
            <h1 id="textAccueuil">Resumé</h1>
            <table id ="tableUser">
                <thead id="colonneUser">
                    <tr>
                        <th>Thème</th>
                        <th>Type d'activité</th>
                        <th>Lieu</th>
                        <th>Dates</th>
                        <th>h valorisées</th>
                        <th>h réelles</th>
                        <th>lien vers la preuve de participation</th>
                    </tr>
                </thead>
                <tbody id="colonneContenuUser">
                    <tr id="champUser">
                        <td>Formation</td>
                        <td>Formation en React Native</td>
                        <td>"Open Classroom"</td>
                        <td>Du 30 septembre au 15 novembre 2020</td>
                        <td>10h</td>
                        <td>30h</td>
                        <td>Lien disponible <a href='/rnproof'><i>ici</i></a></td>
                    </tr>
                    <tr>
                        <td>Formation</td>
                        <td>Formation en IA et en accessibilité</td>
                        <td>"Open Classroom"</td>
                        <td>Du 15 février au 15 avril 2021</td>
                        <td>10h</td>
                        <td>12h</td>
                        <td>Lien disponible <a href='/iaproof'><i>ici</i></a></td>
                    </tr>
                    <tr>
                        <td>Challenge</td>
                        <td>Cyber Security Challenge</td>
                        <td>"CSC"</td>
                        <td>Mars 2020 et mars 2021</td>
                        <td>10h</td>
                        <td>30h</td>
                        <td>Lien disponible <a href='/cscproof'><i>ici</i></a></td>
                    </tr>
                    <tr>
                        <td>Challenge</td>
                        <td>Brussel Management Challenge</td>
                        <td>"BMC"</td>
                        <td>Du 19 au 20 mars 2021</td>
                        <td>10h</td>
                        <td>28h</td>
                        <td>Lien disponible <a href='/bmcproof'><i>ici</i></a></td>
                    </tr>
                    <tr>
                        <td>Développement web</td>
                        <td>Site internet Ralfagram</td>
                        <td>Ralfagram</td>
                        <td>Du 01 août 2020 au 14 février 2021</td>
                        <td>10h</td>
                        <td>25h</td>
                        <td>Lien disponible <a href='/ralfproof'><i>ici</i></a></td>
                    </tr>
                    <tr>
                        <td>Mouvement de jeunesse</td>
                        <td>Animateur scout</td>
                        <td>"22e BW MSG"</td>
                        <td>Depuis le 01 septembre 2018</td>
                        <td>10h</td>
                        <td>+1000h</td>
                        <td>Lien disponible <a href='scoutproof'><i>ici</i></a></td>
                    </tr>
                </tbody>
            </table>
            <div id='lienCV'>
                <p>Télecharger mon CV : </p><button id='buttonDownload'><a href='https://we.tl/t-5xZC9kXi8G'>Télecharger</a></button>
            </div>
        </div>
    )
    
}
export default Resume;