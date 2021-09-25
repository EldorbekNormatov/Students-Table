let tBody = document.querySelector('tbody');
let form = document.querySelector('form');

function renderer(data) {

    tBody.innerHTML = null

    data = mySort( data, filterSelect.value )

    for (let i in data) {

        let tr = document.createElement('tr')
        let tdIndex = document.createElement('td')
        let tdName = document.createElement('td')
        let tdAge = document.createElement('td')
        let tdScore = document.createElement('td')

        tdIndex.textContent = i - 0 + 1;
        tdName.textContent = data[i].name;
        tdAge.textContent = data[i].age;
        tdScore.textContent = data[i].score;

        tr.appendChild(tdIndex)
        tr.appendChild(tdName)
        tr.appendChild(tdAge)
        tr.appendChild(tdScore)

        tBody.appendChild(tr)

    }
}

renderer(dataBase);

filterSelect.addEventListener( "change", () => renderer(dataBase) )

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (scoreInput.value - 0 >= 1 && scoreInput.value - 0 <= 100) {

        let obj = {
            name: nameInput.value,
            age: ageInput.value,
            score: scoreInput.value,
        }
        dataBase.push(obj);
        renderer(dataBase);
        window.localStorage.setItem( 'dataBase', JSON.stringify(dataBase) )
        nameInput.value = null
        ageInput.value = null
        scoreInput.value = null

    } else {
        scoreInput.value = null
        scoreInput.style.borderColor = 'red'
        scoreInput.placeholder = " put between 1 and 100 "
    }

})


function mySort ( array, instruction ) {
    
    let sorted
    if ( instruction === "age" ) {
        sorted = array.sort( function( a, b ) {
            return a.age - b.age
        } )
    }
    else if ( instruction === "score" ) {
        sorted = array.sort( function( a, b ) {
            return a.score - b.score
        } )
    } 
    else if ( instruction === "name" ) {
        sorted = array.sort( function( a, b ) {
            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        } ) 
    }
    return sorted

}
