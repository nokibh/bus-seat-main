
// scroll banner to ticket section
// document.getElementById('bnrBtn').addEventListener('click', function(event){
//     const busTicket = document.getElementById('busticket');

//     busTicket.scrollIntoView('busticket');
// })
// select the button 
// let buttons = document.getElementsByClassName('green-btn');
// let count = 0;
// let seatLeft = 8;


// for(const button of buttons){
//     button.addEventListener('click', function(){
//         let select = button.style.backgroundColor = 'limegreen';
//         count = count + 1
//         setInnerText('total-seat', count);        
//     })
// }

// seat left

// for(const button of buttons){
//     button.addEventListener('click', function(){
//         seatLeft = seatLeft - 1;
//         setInnerText('seat-left', seatLeft);

//     })
// }

// innerText
// function setInnerText(id, value){
//     document.getElementById(id).innerText = value;

// }


//_____________________________________________________________________________________________________________________//

let buttons = document.getElementsByClassName('green-btn');

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        button.style.backgroundColor = 'green'
        const seatAdd = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[5].childNodes[1].childNodes[7].innerText
        
        const economy = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[5].childNodes[1].childNodes[7].childNodes[3].innerText
        console.log(economy)

        const selectedContainer = document.getElementById('ticket-add');

        const div = document.createElement('div');
        
        const p1 = document.createElement('p');
        p1.innerText = 2;
        const p2 = document.createElement('p');
        p2.innerText = economy;
        const p3 = document.createElement('p');
        p3.innerText = 550;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
         selectedContainer.appendChild(div);
    })

}

// innerText
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}

