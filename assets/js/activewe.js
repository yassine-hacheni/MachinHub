feye9 = document.getElementById("fy9")
const fors = document.getElementById("forsa")

var myData = {}
    fetch('/assets/js/objets.json')
    .then(response => response.json())
    .then(data => {
         myData = data.repair
        // Do something with the JSON data
        if(myData.length > 0){
            for( var r of myData){
                feye9.innerHTML += "<article class=\"new__card swiper-slide\">"
                    +"<span class=\"new__tag\">كلمني</span>"

                    +"<img src=\""+ r[0] +".png \"  class=\"new__img\"/>"

                    +"<div class=\"new__data\">"
                        +"<h3 class=\"new__title\">"+ r[1] +"</h3>"
                        +"<span class=\"new__price\">"+ r[2] +"DNT</span>"
                    +"</div>"

                    +"<button class=\"button new__button nechrik2\">نشري</button>"
                +"</article>"
                }
                var nchri = document.querySelector(".nechrik2");
                // Next, attach the event listener to the parent element and delegate to the button
                feye9.addEventListener("click", function(event) {
                                if (event.target && event.target.matches(".nechrik2")) {
                                   alert("Contactez-nous sur les reseau sociaux \n ou \n contactez le numero 27 755 235")
                                }
                            });
        }
        else{
            feye9.innerHTML = "<p>No data is here</P>" 
        }   
        if ((Object.keys(data).length !== 0) && (data.products.length > 0)) {
            const ms = data.products;
            for (var m of ms) { // Use "of" instead of ":" for iterating over array elements
                fors.innerHTML += "<article class=\"featured__card\">"
                + "<span class=\"featured__tag\">للبيع</span>"
                + "<img src=\"" + m[0] + ".png\"" + " class=\"featured__img\"/>" // Assuming "image" is the property in your product object
                + "<div class=\"featured__data\">"
                + "<h3 class=\"featured__title\">" + m[1] + "</h3>" // Assuming "title" is the property in your product object
                + "<span class=\"featured__price\">" + m[2] + "DNT</span>" // Assuming "price" is the property in your product object
                + "</div>"
                + "<button class=\"button featured__button nechrik\">نشري</button>"
                + "</article>";
            }
            var nchri = document.querySelector(".nechrik");
// Next, attach the event listener to the parent element and delegate to the button
            fors.addEventListener("click", function(event) {
                if (event.target && event.target.matches(".nechrik")) {
                    alert("Contactez-nous sur les reseau sociaux \n ou \n contactez le numero 27 755 235");
                    
                }
            });
        }
        
            else{
                fors.innerHTML = "<p>No data is put on ? <\p>"
            }
        
    
    })
    .catch(error => {
        console.error('Error:', error);
    });



    document.addEventListener("DOMContentLoaded", function() {
        const seenButton = document.getElementById("seenButton");
        const selling = document.querySelector(".nechrik")
        const imagesList = ["/assets/img/gauche1.jpeg", "/assets/img/face1.jpeg", "/assets/img/droite1.jpeg", "/assets/img/back1.jpeg"]; // List of image URLs
        selling.addEventListener("click", ()=>{
            alert("Contactez-nous sur les reseau sociaux \n ou \n contactez le numero 27 755 235")
        })
    if (seenButton) {
        seenButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default behavior of anchor tag
            
            // Check if imagesList is not empty
            if (imagesList.length > 0) {
                // Create a card to show the list of images
                const card = document.createElement("div");
                card.classList.add("image-card");

                // Create a container for the scrollable images
                const imageContainer = document.createElement("div");
                imageContainer.classList.add("image-container");

                // Add each image to the container
                imagesList.forEach(function(imageUrl) {
                    const image = document.createElement("img");
                    image.src = imageUrl;
                    image.style ="height : 500px"
                    imageContainer.appendChild(image);
                });

                // Append the container to the card
                card.appendChild(imageContainer);

                // Append the card to the body
                document.body.appendChild(card);

                // Add a close button to the card
                const closeButton = document.createElement("button");
                closeButton.textContent = "غلق";
                closeButton.addEventListener("click", function() {
                    document.body.removeChild(card);
                });
                card.appendChild(closeButton);
            } else {
                console.error("No images available to display.");
            }
        });
    } else {
        console.error("Button with id 'seenButton' not found.");
    }
});

            