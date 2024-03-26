function toggleMode () {
   const html = document.documentElement
   /* if(html.classList.contains("light") {
      html.classList.remove("light") }
    else {
      html.classList.add("light") 
    } (uma outra forma de fazer mais elaborada)*/

    html.classList.toggle("light")

    /* Pegar a tag img */
    const img = document.querySelector("#profile img")
   
   /*substituir a imagem*/
    if(html.classList.contains("light"))
    /* Se tiver  light mode, adicionar imagem lighy */
        img.setAttribute("src","./assets/avatar-light.png")
    else {
    /* Se tiver sem light mode mantem imagem normal*/
    img.setAttribute("src","./assets/avatar.png")
    }   
}