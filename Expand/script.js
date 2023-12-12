const allToggleBtn = Array.from(document.querySelectorAll(".toggle"));
const paras = document.querySelectorAll(".para");

const toggleModal = (id) => {
  paras.forEach((ele, index) => {
    if (id === index) {
      ele.style.display = ele.style.display === "block" ? "none" : "block";
    }
  });
};

allToggleBtn.forEach((ele, id) => {
  ele.addEventListener("click", () => toggleModal(id));
});
