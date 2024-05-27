feye9 = document.getElementById("fy9")
const fors = document.getElementById("forsa")
var data= {
    "offre" : {
        "logo" : "machine1",
        "name" : "غسالة Indesit 5KG ",
        "description" : "فرصة مثالية، أفضل آلة موصى بها للاستخدام الفعّال",
        "price": "450"
    },

    "products" : [
        ["assets/img/machine2", "LG 7KG" , "359"],
        ["assets/img/machine3" , "Whirpool 6KG" ,"300"],
        ["assets/img/machine1", "Indesit 5KG", "450"]
    ],

    "repair": [
        
        ["assets/img/repair4", "غسالة مؤن Arcelik" , "329"]
        
    ]
}
       var  myData = data.repair
        // Do something with the JSON data
        if(myData.length > 0){
            for( var r of myData){
                feye9.innerHTML += "<article class=\"new__card swiper-slide\">"
                    +"<span class=\"new__tag\">للبيع</span>"

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
    



    document.addEventListener("DOMContentLoaded", function() {
        const seenButton = document.getElementById("seenButton");
        const selling = document.querySelector(".nechrik")
        selling.addEventListener("click", ()=>{
            alert("Contactez-nous sur les reseau sociaux \n ou \n contactez le numero 27 755 235")
        })})

        document.addEventListener("DOMContentLoaded", function() {
            const seenButton = document.getElementById("seenButton");
            const selling = document.querySelector(".nechrik")
            const imagesList = ["https://scontent.ftun4-2.fna.fbcdn.net/v/t45.5328-4/436749463_260118287127336_1771927376024930542_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=sYsVTDM2k8AQ7kNvgHsr3Or&_nc_ht=scontent.ftun4-2.fna&oh=00_AYCOc1elBuRR6tCgI2dfh7qrizJYXx5J6KBG0M3Yotzplg&oe=665A68E6", "https://scontent.ftun4-2.fna.fbcdn.net/v/t45.5328-4/438079985_7520212884735851_1183285963685205660_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=UZNs8fobkYoQ7kNvgFdFOsy&_nc_ht=scontent.ftun4-2.fna&oh=00_AYBxLlmeeB5kH84F8t7Co6A1KKGQw27e6VKgFfNjF0YgtA&oe=665A6970", "https://scontent.ftun4-2.fna.fbcdn.net/v/t45.5328-4/436749501_1761423547720162_1822584015440621562_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=Q0KoAUnnSfQQ7kNvgFdMRW0&_nc_ht=scontent.ftun4-2.fna&oh=00_AYCTV-m2NJpLYbsFpN3JePbG6pV3ZUoo6GVAeX2sv4Hw3Q&oe=665A5592", "https://scontent.ftun4-2.fna.fbcdn.net/v/t45.5328-4/436520485_1381076452577327_7961386766419743575_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=iqCCZAHeoXgQ7kNvgG8mZdm&_nc_ht=scontent.ftun4-2.fna&oh=00_AYBTa_cdbTpXcWqdiefS_osAonHldadQPujE9qX-qyRtYg&oe=665A62F1"]; // List of image URLs
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
        })
            


//     if (seenButton) {
//         seenButton.addEventListener("click", function(event) {
//             window.location.href = "https://www.facebook.com/marketplace/item/410167021973312";
//         })

//     } else {
//         console.error("Button with id 'seenButton' not found.");
//     }
// });

            