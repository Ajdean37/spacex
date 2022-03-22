//handler

function handleSuccess( e ) {
    e.preventDefault();
    console.log("Success Clicked");
    
    let successFlights = launch.filter( item => {
        if( launch.success === true ){
          return item;
        }
      });
      return successFlights;
}

function handleReuse( e ) {
    e.preventDefault();

    console.log("Reuse Clicked");
        
}

function handleReddit( e ) {
    e.preventDefault();

    console.log("Reddit Clicked");
}

async function handleGetData( e ) {

    let response = await fetch('https://api.spacexdata.com/v4/launches/');
    let data = await response.json();
    for (const launch of data) {
        
        let date = new Date(launch.date_utc);
    
        let tableBody = document.querySelector('#table-body-target');
        let tr = document.createElement('tr')
        tr.id = launch.id;

        let innerHTML = `<td scope="row"><img src="${launch.links.patch.small}" alt=falconSat height="25px"></td>
        <td>${launch.name}</td>
        <td>${launch.upcoming}</td>
        <td>${date.toLocaleDateString()}</td>
        <td>${launch.details}</td>
        <td>${launch.flight_number}</td>
        <td><a href="${launch.links.article}"><i class="fa-solid fa-link"></i></a></td>`;

        tr.innerHTML = innerHTML;
        tr.classList.add('table-success')

        tableBody.appendChild(tr);

    }

}

//listen

function readyDOM() {
    let checkboxSuccess = document.querySelector('#checkboxSuccess');
    checkboxSuccess.addEventListener('click', handleSuccess);

    let checkboxReuse = document.querySelector('#checkboxReuse');
    checkboxReuse.addEventListener('click', handleReuse);

    let checkboxReddit = document.querySelector('#checkboxReddit');
    checkboxReddit.addEventListener('click', handleReddit);

    let refreshBtn = document.querySelector('#refresh');
    refreshBtn.addEventListener('click', handleGetData);
}



readyDOM();

// handleGetData();
