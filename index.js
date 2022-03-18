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

function handleId1( e ) {
    console.log("link Clicked");
}









//listen

function readyDOM() {
    let checkboxSuccess = document.querySelector('#checkboxSuccess');
    checkboxSuccess.addEventListener('click', handleSuccess);

    let checkboxReuse = document.querySelector('#checkboxReuse');
    checkboxReuse.addEventListener('click', handleReuse);

    let checkboxReddit = document.querySelector('#checkboxReddit');
    checkboxReddit.addEventListener('click', handleReddit);

    let id1 = document.querySelector('#id1');
    id1.addEventListener('click', handleId1);
}



readyDOM();

