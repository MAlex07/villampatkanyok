import { ElectricRat } from "./ElectricRat"


const form = document.querySelector<HTMLFormElement>('#patkanyform');
const input = document.querySelector<HTMLInputElement>('#name')!;
const kartyak = document.querySelector<HTMLDivElement>('#kartyak');

const patkanyLista: ElectricRat[] = [];


function rndSzam(min: number, max: number):number{
  return Math.floor(Math.random()*(max-min+1)+min);
}

form?.addEventListener("submit", (e)=>{
  e.preventDefault();
try{
  const name = input.value;
  const atk = rndSzam(10, 20);
  const hp = rndSzam(50, 100);
  const patkany = new ElectricRat(name, atk, hp);
  patkanyLista.push(patkany);

  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
  <div class="container">
  <h3>${patkany.getName()}</h3>
  <p>sebzés: ⚔️${patkany.getAtk()}</p>
  <p>életerő: ❤️${patkany.getHp()}</p>
  </div>
  `;
  kartyak?.appendChild(card);

  input.value = '';
  //console.log(patkanyLista)
}

catch(error){
  if(error instanceof Error){
    alert(error.message)
  }
}

})

