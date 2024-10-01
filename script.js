const cells = document.querySelectorAll('.cell');

const cellsArray = Array.from(cells);
cellsArray.forEach((box, index)=>{
    box.addEventListener('click', ()=> {
        alert(`Box ${index+1} clicked!`);
    })
})