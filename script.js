function scrollToSection() {
    document.getElementById("cta").scrollIntoView({ behavior: "smooth" });
}

function submitForm(e) {
    e.preventDefault();
    alert("Message sent!");
}