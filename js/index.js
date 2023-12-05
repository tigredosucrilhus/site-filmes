const screenWidth = window.screen.width;

if(screenWidth < 524){
  document.getElementById("nav").innerHTML = ''
  document.getElementById("nav-2").innerHTML = ''
  document.getElementById("header").innerHTML =`<div style="display: inline-block; margin-top: 8pt; margin-left: 13pt;"></div>
  
  <style>.titulo{font-size: 200%}</style>

  <div class="dropdown" style="display: inline-block;">
  <svg style="margin-top:2.5%" fill="#fffafa" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 24.75 24.75" xml:space="preserve" stroke="#fffafa"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.0495"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2 c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2 c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"></path> </g> </g></svg>
    <div class="dropdown-content">
      <a href="#">Terror e Suspense</a>
      <a href="#">Documentário</a>
      <a href="#">Drama</a>
      <a href="#">Comédia</a>
      <a href="#">Ficção Científica</a>
      <a href="#">Romance</a>
      <a href="#">Animação</a>
      <a href="#">Ação</a>
      <a href="#">Musical</a> 
    </div>
  </div>
    <a class = "h-50;" href = "index.html" style="text-decoration: none; display: inline-block;">
      <h1 style="color:#ff3131; display: inline-block;">I</h1><h1 style="color:#00bf63; display: inline-block;">F</h1><h1 style="color:#ffffff; display: inline-block;">ilmes</h1>
    </a>
      <div style="display: inline-block; border: 2.5pt solid #fff; height: 43pt; width: 100pt; margin-top: 8pt; border-radius: 3pt;"><a class = "h-50" target="_blank" onclick="login()" style="text-decoration: none; cursor: pointer; color: #ffffff; font-size: 23pt; margin-left: 18pt;">Entrar</a></div>`
}else{
  document.getElementById("header").innerHTML = `
  <div style="display: inline-block; margin-top: 8pt; margin-left: 13pt;">
  <a class = "h-50;" href = "index.html" style="text-decoration: none; display: inline-block;">
    <h1 style="color:#ff3131; display: inline-block;">I</h1><h1 style="color:#00bf63; display: inline-block;">F</h1><h1 style="color:#ffffff; display: inline-block;">ilmes</h1>
  </a>
  </div>

  <form class = "d-flex justify-content-center w-25 ms-0 mt-4">
    <a href = "#">
    <img class = "position-absolute" src = "./img/icon.png"></a>
    <input type = "text" class = "w-100 h-50 fs-6 rounded-4 border border-white" placeholder = "matrix" style=" outline:none; padding: 0 30px"> 
  </form>

  <style>.titulo{font-size: 40pt;}</style>

  <div style="border: 2.5pt solid #fff; height: 43pt; width: 100pt; margin-top: 8pt; border-radius: 3pt;"><a class = "h-50" target="_blank" onclick="login()" style="text-decoration: none; cursor: pointer; color: #ffffff; font-size: 23pt; margin-left: 18pt;">Entrar</a></div>
`
}

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

window.addEventListener(
  "resize",
  debounce(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

if(viewportWidth < 524){
  document.getElementById("nav").innerHTML = ''
  document.getElementById("nav-2").innerHTML = ''
  document.getElementById("header").innerHTML = `<div style="display: inline-block; margin-top: 8pt; margin-left: 13pt;"></div>

    <style>.titulo{font-size: 200%;}</style>

  <div class="dropdown" style="display: inline-block;">
    <svg style="margin-top:2.5%" fill="#fffafa" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 24.75 24.75" xml:space="preserve" stroke="#fffafa"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.0495"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2 c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2 c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"></path> </g> </g></svg>
    <div class="dropdown-content">
      <a href="#">Terror e Suspense</a>
      <a href="#">Documentário</a>
      <a href="#">Drama</a>
      <a href="#">Comédia</a>
      <a href="#">Ficção Científica</a>
      <a href="#">Romance</a>
      <a href="#">Animação</a>
      <a href="#">Ação</a>
      <a href="#">Musical</a> 
    </div>
  </div>

  <a class = "h-50;" href = "index.html" style="text-decoration: none; display: inline-block;">
    <h1 style="color:#ff3131; display: inline-block;">I</h1><h1 style="color:#00bf63; display: inline-block;">F</h1><h1 style="color:#ffffff; display: inline-block;">ilmes</h1>
  </a>

  <div style="display: inline-block; border: 2.5pt solid #fff; height: 43pt; width: 100pt; margin-top: 8pt; border-radius: 3pt;"><a class = "h-50" target="_blank" onclick="login()" style="text-decoration: none; cursor: pointer; color: #ffffff; font-size: 23pt; margin-left: 18pt;">Entrar</a></div>`
}else{
      document.getElementById("header").innerHTML = ` <div style="display: inline-block; margin-top: 8pt; margin-left: 13pt;">
      <a class = "h-50;" href = "index.html" style="text-decoration: none; display: inline-block;">
          <h1 style="color:#ff3131; display: inline-block;">I</h1><h1 style="color:#00bf63; display: inline-block;">F</h1><h1 style="color:#ffffff; display: inline-block;">ilmes</h1>
      </a>
  </div>

  <form class = "d-flex justify-content-center w-25 ms-0 mt-4">
    <a href = "#">
    <img class = "position-absolute" src = "./img/icon.png"></a>
    <input type = "text" class = "w-100 h-50 fs-6 rounded-4 border border-white" placeholder = "matrix" style=" outline:none; padding: 0 30px"> 
  </form>

  <style>.titulo{font-size: 40pt;}</style>

  <div style="border: 2.5pt solid #fff; height: 43pt; width: 100pt; margin-top: 8pt; border-radius: 3pt;"><a class = "h-50" target="_blank" onclick="login()" style="text-decoration: none; cursor: pointer; color: #ffffff; font-size: 23pt; margin-left: 18pt;">Entrar</a></div>`
}

    console.log(`Resolução da janela de visualização: ${viewportWidth}x${viewportHeight}`);
  }, 250)
);

let sectionate = (titulo, img) => {
  let basic = `<section>
  <div class="destaque">
    <a class="titulo">${titulo}</a>
    <img src="${img}">
    <a class="destacado">Assistir agora</a>
    <!--<a class="destacado2">Mais informações</a>-->
  </div>
  </section>`
  document.getElementById("matrix").innerHTML = document.getElementById("matrix").innerHTML + basic
}

let generatecolun = (titulo, gene, imgs) => {
  let imagens = ``
  for (let i = 0; i < imgs.length; i++) {
    imagens += `<img src="${imgs[i][0]}" alt="img5" class = "item " onclick="redirect('${imgs[i][1]}')">`
  }
  var base = `<section class = "container position-relative my-0 mx-auto" style = "max-width: 900px;">
  <a class = "text-decoration-none" link href = "${gene}.html">
      <h1 class = "text-white fs-2 mb-2 ml-5 mt-5">${titulo}</h1>
  </a>
  <button class = "arrow-left control position-absolute top-0 start-0 end-auto bottom-0 fs-6 text-center text-light cursor-pointer border-0 z-3" aria-label = "Previous-image" onclick="retornar('${gene}')">ᐊ</button> <!--arrow-left control-->
  <button class = "arrow-right control position-absolute top-0 start-auto end-0 bottom-0 fs-6 text-center text-light cursor-pointer border-0 z-3" aria-label = "Next-image" onclick="passar('${gene}')">ᐅ</button> <!--arrow-rigth control-->
  <style>
      .arrow-left, .arrow-right{
      background: linear-gradient(to left, transparent 0%, black 200%); 
      opacity:0.1;
      transition: all 600ms ease-in-out; 
      line-height: 200pt; 
      width: 30pt;
      }
      .arrow-left:hover, .arrow-right:hover {
      opacity: 1;
      }  
  </style>
  <article class = "gallery-wrapper" style = "overflow-x: auto" id="${gene}">
      <!--gallery-wrapper-->
      <Style>
          .gallery-wrapper::-webkit-scrollbar {
          display: none;
          }
          .gallery-wrapper {
          -ms-overflow-style: none;  
          scrollbar-width: none;  
          }
      </Style>
      <div class = "gallery d-flex" style = "flex-flow: row nowrap; gap: 15px;">
          <!--gallery-->
          ${imagens}
      </div>
  </article>
</section>`
document.getElementById("filmes").innerHTML = document.getElementById("filmes").innerHTML + base
}

async function redirect(genesis) {
    window.open(`${genesis}`)
}

let contas = new Map().set("email@gmail.com", "senha1234@")
let passar = async (id) =>{
  document.querySelector(`#${id}`).scroll({
        left: document.querySelector(`#${id}`).scrollLeft + 184,
        behavior: "smooth",
      });
} 

let retornar = async (id) =>{
  document.querySelector(`#${id}`).scroll({
        left: document.querySelector(`#${id}`).scrollLeft - 184,
        behavior: "smooth",
      });
} 
window.scroll({
  top: 15,
  behavior: 'smooth',
})
window.sr = ScrollReveal();
let login = async () =>{
  const { value: formValues } = await Swal.fire({
    title: 'Entrar',
    color: 'black',
    background: '#e5e5e5',
    html:
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg><input type="email" id="swal-input1" class="swal2-input">` +
      `<br><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
      <path d="M42,21H8c-1.654,0-3,1.346-3,3v23c0,1.654,1.346,3,3,3h34c1.654,0,3-1.346,3-3V24C45,22.346,43.654,21,42,21z M13,38 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C15,37.105,14.105,38,13,38z M21,38c-1.105,0-2-0.895-2-2 c0-1.105,0.895-2,2-2s2,0.895,2,2C23,37.105,22.105,38,21,38z M29,38c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2 C31,37.105,30.105,38,29,38z M37,38c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C39,37.105,38.105,38,37,38z M12,19v-4.01 C12,7.827,17.827,2,24.99,2h0.02C32.173,2,38,7.827,38,14.99V19h-2v-4.01C36,8.93,31.069,4,25.01,4h-0.02C18.931,4,14,8.93,14,14.99 V19H12z"></path>
  </svg><input type="password" id="swal-input2" class="swal2-input"><br><br><a href="javascript:criarconta()" style="color:black; text-decoration:underline; cursor: pointer;">Criar Nova Conta</a><br><br><a href="javascript:deualzhimer()" style="color:black; text-decoration:underline; cursor: pointer;">Esqueci minha senha</a>`,
    focusConfirm: false,
    preConfirm: () => {
      if(document.getElementById('swal-input1').value && document.getElementById('swal-input2').value){
      if(document.getElementById('swal-input2').value.length > 7){
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }else{
      Swal.fire({    color: 'black',
      background: '#e5e5e5',
      title:"Sua senha está incorreta."})
    }
    }else{
    Swal.fire({    color: 'black',
    background: '#e5e5e5',
    title:"Os campos devem ser preenchidos."})
  }
  }
})
console.log(formValues)
if(contas.has(formValues[0])){
  if(contas.get(formValues[0]) === formValues[1]){
    Swal.fire({    color: 'black',
    background: '#e5e5e5',
    title:"Logado com sucesso"})
  }else{
    Swal.fire({    color: 'black',
    background: '#e5e5e5',
    title:"Senha incorreta."})
  }
}else{
  Swal.fire({    color: 'black',
  background: '#e5e5e5',
  title:"Email inexistente."})
}
}