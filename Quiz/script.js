document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = {
        q1: "b",
        q2: "a",
        q3: "b"
    };
    let score = 0;
    for (const question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            const selectedAnswer = selectedOption.value;
            if (selectedAnswer === answers[question]) {
                selectedOption.parentElement.style.color="green";
            }
            else{
                selectedOption.parentElement.style.color="red"
            }
        }
    }
});