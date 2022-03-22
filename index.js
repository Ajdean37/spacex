//application state
let launches = [];


function handleFilterUpcoming( e ) {
    e.preventDefault();
    
    let upcomingFlights = launches.filter( item => {
        if( item.upcoming === true ){
          return item;
        }
      });
      renderRows( upcomingFlights );
}

function handleWithArticles( e ) {
    e.preventDefault();

    let articleFlights = launches.filter( item => {
        if( item.links.article !== null ){
          return item;
        } else {
            console.log(item);
        }
      });
      renderRows( articleFlights );
}

async function handleGetData( e ) {

    let response = await fetch('https://api.spacexdata.com/v4/launches/');
    let data = await response.json();
    launches = [...data];
    renderRows( launches );
}


//render functions
// data: [{}]
function renderRows( filteredLaunchData ) {

    let tableRows = document.querySelectorAll('tr');

    tableRows.forEach( el => el.remove() )
    for (const launch of filteredLaunchData) {
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
    checkboxSuccess.addEventListener('click', handleFilterUpcoming);

    let checkboxReddit = document.querySelector('#checkboxReddit');
    checkboxReddit.addEventListener('click', handleWithArticles);

    let refreshBtn = document.querySelector('#refresh');
    refreshBtn.addEventListener('click', handleGetData);
}



readyDOM();

handleGetData();
