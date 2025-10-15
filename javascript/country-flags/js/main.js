import flags from './model/flags.js';

const main = document.querySelector('.row');

function criarFlag(flag){
    return `<div class="flag col-2 my-2 text-center"> 
        <img src="${flag.image}" alt="${flag.name}"> 
        <p>${flag.name}</p> 
    </div>`;
}

for(const flag of flags){
    main.insertAdjacentHTML('beforeend', criarFlag(flag));
}