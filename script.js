const galleryImages = {
    classroom: [
        "images/classroom/img1.jpg",
        "images/classroom/img2.png",
        "images/classroom/img3.png"
    ],
    sports: [
        "images/sports/img1.png",
        "images/sports/2.jpg",
        "images/sports/3.jpg"
    ],
    art: [
        "images/art/1.jpg",
        "images/art/2.jpg"
    ],
    science: [
        "images/science/1.jpg",
        "images/science/2.jpg"
    ],
    annual: [
        "images/annual/img1.png",
        "images/annual/img2.png"
    ],
    trip: [
        "images/trip/1.jpg",
        "images/trip/2.jpg"
    ]
};

function openGallery(type) {
    const lightbox = document.getElementById("lightbox");
    const content = document.getElementById("lightboxContent");

    if (!galleryImages[type]) return;

    content.innerHTML = "";

    galleryImages[type].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = type + " image";
        content.appendChild(img);
    });

    lightbox.style.display = "block";
}

function closeGallery() {
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("lightboxContent").innerHTML = "";
}

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeGallery();
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


