var visor = document.querySelector('#res');

document.addEventListener('click', event => {
    const el = event.target;
    if (el.classList.contains('calc_botao')) addNumvisor(el);
    if (el.classList.contains('calc_botao_limpa')) clear();
    if (el.classList.contains('calc_botao_op')) operador(el);
    if (el.classList.contains('btn_round')) arredonda();
    if (el.classList.contains('btn_raiz')) raizQuadrada();
    if (el.classList.contains('btn_potencia')) potencia();
    if (el.classList.contains('calc_botao_res')) calcular();
  });

const addNumvisor = el => visor.value += el.innerText;
const clear = () =>  visor.value = '';
const operador = el => visor.value += el.value;
const arredonda = () => exibir(Math.round(Number(visor.value)));
const raizQuadrada = () => exibir(Math.sqrt(Number(visor.value)));
const potencia = () => visor.value += '**'
const calcular = () => {
    try{
        const resultado = eval(visor.value); 
        exibir(resultado);
    }catch(e){
        exibir('ERROR');
    }
} 

const exibir = (resultado) => visor.value = resultado;