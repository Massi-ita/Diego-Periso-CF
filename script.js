const nextMatch = {
    rival: "Pendiente de actualizar",
    date: "Próximamente",
    venue: "Madrid"
};

const standings = [];

const results = [];

document.getElementById("nextMatch").innerHTML = `
    <h3>Periso A vs ${nextMatch.rival}</h3>
    <p>${nextMatch.date}</p>
    <p>${nextMatch.venue}</p>
`;

const tbody = document.querySelector("#standings tbody");

if (standings.length === 0) {
    tbody.innerHTML = `
        <tr>
            <td colspan="3">
                Clasificación pendiente de sincronización con RFFM
            </td>
        </tr>
    `;
}

const resultList = document.getElementById("results");

if (results.length === 0) {
    resultList.innerHTML = `
        <li>Resultados pendientes de sincronización con RFFM</li>
    `;
}
