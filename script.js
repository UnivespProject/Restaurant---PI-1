// Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 3000);

// Reserva mesas
function reservarMesa(numero) {
  const btn = event.target;
  const linha = btn.closest('tr');
  const statusCelula = linha.querySelectorAll('td')[1];

  if (btn.classList.contains('reservado')) {
    btn.classList.remove('reservado');
    btn.style.backgroundColor = 'green';
    statusCelula.textContent = 'Disponível';
    alert(`Reserva da mesa ${numero} foi cancelada.`);
  } else {
    btn.classList.add('reservado');
    btn.style.backgroundColor = 'gray';
    statusCelula.textContent = 'Indisponível';
    alert(`Mesa ${numero} reservada com sucesso!`);
  }
}

// Mostrar/ocultar itens do cardápio
function mostrarCategoria(categoria) {
  const container = document.getElementById("itens-cardapio");
  if(container.getAttribute('data-categoria') === categoria) {
    container.innerHTML = "";
    container.removeAttribute('data-categoria');
    return;
  }
  container.setAttribute('data-categoria', categoria);
  container.innerHTML = "";

  const cardapio = {
    aperitivos: [
      { nome: "Bruschetta", desc: "Pão italiano, tomate e manjericão." },
      { nome: "Batata Rústica", desc: "Batatas com alecrim e páprica." }
    ],
    entradas: [
      { nome: "Salada Caesar", desc: "Alface, frango grelhado, parmesão e croutons." },
      { nome: "Sopa de Abóbora", desc: "Cremosa com toque de gengibre." }
    ],
    principais: [
      { nome: "Risoto de Camarão", desc: "Arroz arbóreo com camarão e ervas." },
      { nome: "Picanha Grelhada", desc: "Servida com legumes assados." }
    ],
    sobremesas: [
      { nome: "Pudim", desc: "Clássico brasileiro com calda de caramelo." },
      { nome: "Brownie", desc: "Com sorvete de creme e calda quente." }
    ],
    bebidas: [
      { nome: "Suco Natural", desc: "Laranja, limão ou abacaxi." },
      { nome: "Refrigerante", desc: "Coca-Cola, Guaraná, etc." }
    ],
    frutos: [
      { nome: "Moqueca", desc: "Peixe com leite de coco e dendê." },
      { nome: "Camarão ao Alho", desc: "Servido com arroz branco." }
    ]
  };

  cardapio[categoria].forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<h4>${item.nome}</h4><p>${item.desc}</p>`;
    div.classList.add('visible');
    container.appendChild(div);
  });
}

// Modal Login/Cadastro
const modal = document.getElementById('modal-login');
const btnLogin = document.getElementById('btn-login');
const closeModal = document.getElementById('close-modal');
const tabLogin = document.getElementById('tab-login');
const tabCadastro = document.getElementById('tab-cadastro');
const contentLogin = document.getElementById('content-login');
const contentCadastro = document.getElementById('content-cadastro');
const reservasSection = document.getElementById('reservas');

// Abre modal ao clicar em login
btnLogin.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// Fecha modal ao clicar no X
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Alterna abas do modal
tabLogin.addEventListener('click', () => {
  tabLogin.classList.add('active');
  tabCadastro.classList.remove('active');
  contentLogin.classList.remove('hidden');
  contentCadastro.classList.add('hidden');
});
tabCadastro.addEventListener('click', () => {
  tabCadastro.classList.add('active');
  tabLogin.classList.remove('active');
  contentCadastro.classList.remove('hidden');
  contentLogin.classList.add('hidden');
});

// Ao enviar login - fecha modal e mostra Reservas
document.getElementById('form-login').addEventListener('submit', (e) => {
  e.preventDefault();
  modal.classList.add('hidden');
  mostrarAbaReservas();
});

// Ao enviar cadastro - fecha modal e mostra Reservas
document.getElementById('form-cadastro').addEventListener('submit', (e) => {
  e.preventDefault();
  modal.classList.add('hidden');
  mostrarAbaReservas();
});

// Função para mostrar a aba reservas e rolar para ela
function mostrarAbaReservas() {
  reservasSection.style.display = 'block';
  reservasSection.scrollIntoView({ behavior: 'smooth' });
}
