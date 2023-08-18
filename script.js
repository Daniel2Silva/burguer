function InitMenuMobile() {
  const menuMobile = document.querySelector(".js-mobile");
  function ativarMenu() {
    const nav = document.querySelector(".nav-itens");
    nav.classList.toggle("ativo");
  }

  menuMobile.addEventListener("click", ativarMenu);
}
InitMenuMobile();
