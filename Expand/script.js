const toggleButtons = document.querySelectorAll("button");
const paragraphs = document.querySelectorAll("p");

toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (paragraphs[index].style.display === "none" || paragraphs[index].style.display === "") {
            paragraphs[index].style.display = "block";
            button.innerText = "Collapse";
        } else {
            paragraphs[index].style.display = "none";
            button.innerText = "Expand";
        }
    });
});