document.addEventListener("DOMContentLoaded", function(event) {
    let containerDiv = document.createElement("div")
    let button = document.createElement("button")
    let btntext = document.createTextNode("Add Square")
    button.appendChild(btntext)
    containerDiv.appendChild(button)
    document.body.appendChild(containerDiv)

    let id = 1

    button.addEventListener("click",  function addDiv(){
    let div = document.createElement("div")
    div.style.backgroundColor= "blue"
    div.style.height = ("200px");
    div.style.width = ("200px");
    div.style.cssFloat = ("left")
    div.className ="divs"
    document.body.appendChild(div)
    div.setAttribute('id',id - 1);
    id++;
    
    
    

    div.addEventListener("mouseover", function(){
        let divtext = document.createTextNode(this.id)
      div.appendChild(divtext)
      
      
    
    

      div.addEventListener("mouseout", function() {
        
       div.removeChild("divtext")
      

    });

    });
    
});




    

  });