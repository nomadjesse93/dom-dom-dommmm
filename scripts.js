document.addEventListener("DOMContentLoaded", function (event) {
    let containerDiv = document.createElement("div")
    let button = document.createElement("button")
    let btntext = document.createTextNode("Add Square")
    button.appendChild(btntext)
    containerDiv.appendChild(button)
    document.body.appendChild(containerDiv)

    let id = 1

  
 

    button.addEventListener("click", function addDiv() {
        let div = document.createElement("div")
        div.style.backgroundColor = "black"
        div.style.height = ("200px");
        div.style.width = ("200px");
        div.style.cssFloat = ("left")
        div.className = "divs"
        document.body.appendChild(div)


        div.setAttribute('id', id - 1);
        id++;
        div.style.textAlign = "center"
        div.style.webkitTextFillColor = "white"



        div.addEventListener("mouseover", function () {
            let divtext = document.createTextNode(this.id)
            div.appendChild(divtext)


            div.addEventListener("mouseout", function () {

                div.innerText = ""



            });

        });



        div.addEventListener("click", function () {
            div.style.backgroundColor = getRandomColor()

        });



        function remove() {
        

            if (div.id %2 === 0){
                div.remove(id.nextElementSibling);
                console.log(div.id +" even")
            } else if (div.id %2 === 1){
                
                console.log(div.id + " odd")
            }
    
        }
        

        div.addEventListener("click", function () {
            remove()
        });



    });


    let color = [
        "red", "blue", "green", "yellow", "orange", "brown", "cyan", "pink"
    ]

    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random() * color.length)]
        return randomColor

    }
    

  
    

 
});