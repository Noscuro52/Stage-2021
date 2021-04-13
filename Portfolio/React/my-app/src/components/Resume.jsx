import React from "react";

function Resume() {    
    return (
        <div>
            <h1>Resumé</h1>
            <table>
                <thead>
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
                <tbody>
                    <tr>
                        <td>Formation</td>
                        <td>Formation en React Native</td>
                        <td>"Open Classroom"</td>
                        <td>Du 30 septembre au 15 novembre</td>
                        <td>10h</td>
                        <td>30h</td>
                        <td>Lien dispo <a><i>ici</i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
}
export default Resume;