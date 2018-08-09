
let celebrities = [
    {
        name: "Abdul Satar Edhi",
        title: "Founder, Edhi Foundation",
        URL: "edhi.jpg",
        qoute: "No religion is higher than humanity.",
        readurl: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi"
    },
    {
        name: "Malala Yousufzai",
        title: "Activist",
        URL: "malala.jpg",
        qoute: "One child, one teacher, one book, one pen can change the world.",
        readurl: "https://en.wikipedia.org/wiki/Malala_Yousafzai"      
    },
    {
        name: "Quid-e-Azam",
        title: "Founder of Pakistan",
        URL: "Quid-e-Azam.jpg",
        qoute: "No nation can rise to the height of glory unless your women are side by side with you.",
        readurl: "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah"
    },
    {
        name: "Abdul Qadeer Khan",
        title: "Physicist ",
        URL: "abdul-qadeer-khan.jpg",
        qoute: "Dream is Not that What you See in Sleep. Dream is The Thing Which Does Not allow you to sleep.",
        readurl: "https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan"
    },
    {
        name: "Pervez Musharaf",
        title: "Pakistani politician",
        URL: "pervez.jpg",
        qoute: "Pakistan has been made a soft state where the supremacy of law is questioned. This situation can not be tolerated any more.",
        readurl: "https://en.wikipedia.org/wiki/Pervez_Musharraf"
    },
    {
        name: "General Raheel Shareef",
        title: "Lieutenant-General",
        URL: "raheel-shareef.jpg",
        qoute: "We will not stop unless we achieve our end objective of a terror-free Pakistan.",
        readurl: "https://en.wikipedia.org/wiki/Raheel_Sharif"
    },
    {
        name: "Arfa Karim",
        title: "World's youngest Microsoft Certified Professional,",
        URL: "arfa-karim.jpg",
        qoute: "Never let shyness conquer your mind.",
        readurl: "https://en.wikipedia.org/wiki/Arfa_Karim"
    },
    {
        name: "Diana",
        title: "Diana, Princess of Wales",
        URL: "diana.jpg",
        qoute: "Everyone needs to be valued. Everyone has the potential to give something back",
        readurl: "https://en.wikipedia.org/wiki/Diana,_Princess_of_Wales"
    },
    {
        name: "Mother Teresa",
        title: "Saint Teresa of Calcutta",
        URL: "teresa.jpg",
        qoute: "Be faithful in small things because it is in them that your strength lies.",
        readurl: "https://en.wikipedia.org/wiki/Mother_Teresa"
    }
    

]

function initialize() {
    let celebritiesGroupEL = document.querySelector("#celebrities-list");
    for(let i = 0; i < celebrities.length; i++) {
        
        celebritiesGroupEL.innerHTML += `<div class="celebrity-img-div" 
                             style="background-image:
                             url('images/${celebrities[i].URL}')" onclick="changeCeleb(${i})">
                             <p class="celebs-name"> ${celebrities[i].name}</p>
                             </div>`
                            
   
    }   
}
function changeCeleb(celebIndex){
   
    document.querySelector("#celeb-name").innerHTML = celebrities[celebIndex].name;
    document.querySelector("#celeb-title").innerHTML = celebrities[celebIndex].title;
    document.querySelector("#celeb-image").style["background-image"] = `url(images/${celebrities[celebIndex].URL})`;
    document.querySelector("#celebs-qoute").innerHTML = `"${celebrities[celebIndex].qoute}"`;
    document.querySelector(".card-footer a").href = celebrities[celebIndex].readurl;
    

    
}