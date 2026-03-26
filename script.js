const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});


const searchInput = document.querySelector(".center input");
const cards = document.querySelectorAll(".Video-card");

function searchVideos(){
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector(".title").textContent.toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", searchVideos);


const profileBtn = document.getElementById("profile-btn");
const dropdown = document.getElementById("dropdown");

profileBtn.addEventListener("click", () => {

    // toggle dropdown
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";

    // login logic
    let user = localStorage.getItem("user");

    if(!user){
        user = prompt("Enter your name:");
        localStorage.setItem("user", user);
        alert("Welcome " + user);
    }
});