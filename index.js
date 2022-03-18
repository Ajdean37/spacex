//handler

function handleSuccess( e ) {
    console.log("Success Clicked");
}

function handleReuse( e ) {
    console.log("Reuse Clicked");
}

function handleReddit( e ) {
    console.log("Reddit Clicked");
}

async function handleGetData( e ) {
    console.log("refreshed clicked");

    let response = await fetch('https://api.spacexdata.com/v4/launches/');
    console.log(response);
    let data = await response.json();
    console.log(data);
    for (const launch of data) {
        // console.log(launch.links.patch.small);
        // console.log(launch.name);
        // console.log(launch.upcoming);
        let date = new Date(launch.date_utc);
        // console.log (date.toLocalDateString() );
        // console.log(launch.details);
        // console.log(launch.id);
        // console.log(launch.links.article);

        let tableBody = document.querySelector('#table-body-target');
        let tr = document.createElement('tr')

        let innerHTML = `<td scope="row"><img src="${launch.links.patch.small}" alt=falconSat height="25px"></td>
        <td>${launch.name}</td>
        <td>${launch.upcoming}</td>
        <td>${date.toLocaleDateString()}</td>
        <td>${launch.details}</td>
        <td>${launch.flight_number}</td>
        <td><a href="${launch.links.article}"><i class="fa-solid fa-link"></i></a></td>`;

        tr.innerHTML = innerHTML;
        tableBody.appendChild(tr);

    }

}

function testAppend (e) {
    // console.log(e);
    let tableBody = document.querySelector('#table-body-target');
    // console.log(tableBody);
    let tr = document.createElement('tr')
    console.log(tr);
    tr.innerHTML =  `<td scope="row"><img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt=falconSat height="25px"></td>
    <td>FalconSat</td>
    <td>Merlin A</td>
    <td>03/24/2006</td>
    <td>Engine failure at 33 seconds and loss of vehicle</td>
    <td>1</td>
    <td id="id1"><i class="fa-solid fa-link"></i><a href="https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html"></a></td>`;

    tableBody.appendChild(tr);

}






//listen

function readyDOM() {
    let checkboxSuccess = document.querySelector('#checkboxSuccess');
    checkboxSuccess.addEventListener('click', handleSuccess);

    let checkboxReuse = document.querySelector('#checkboxReuse');
    checkboxReuse.addEventListener('click', handleReuse);

    let checkboxReddit = document.querySelector('#checkboxReddit');
    checkboxReddit.addEventListener('click', handleReddit);

    let testAppendBtn = document.querySelector('#testAppendBtn');
    testAppendBtn.addEventListener('click', testAppend)

    let refreshBtn = document.querySelector('#refresh');
    refreshBtn.addEventListener('click', handleGetData)
}



readyDOM();

