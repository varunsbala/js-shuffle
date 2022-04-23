const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const boxesDiv = document.getElementById('boxes');
const btnShuffle = document.getElementById('shuffle');
const btnSort = document.getElementById('sort');

const shuffledArray = () => [...numbers].sort(() => Math.random() - 0.5);
const addToDom = (num) => {
    const div = document.createElement('div');
    div.className = `items item-${num}`;
    div.innerText = num;
    boxesDiv.appendChild(div);
}

const shuffleItem = (items) => {
    boxesDiv.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        addToDom(items[i]);
    }
}

window.onload = () => {
    const randomArray = shuffledArray()
    shuffleItem(randomArray)
};

btnShuffle.addEventListener('click', function() {
    const randomArray = shuffledArray()
    shuffleItem(randomArray)
})

btnSort.addEventListener('click', function() {
    shuffleItem(numbers)
})