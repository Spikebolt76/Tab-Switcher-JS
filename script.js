const tabButtons = document.querySelectorAll('button');
const tabContents = document.querySelectorAll('.tab-content');

document.addEventListener("DOMContentLoaded", () => {
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.closest('.tab-btn').dataset.tab;

            tabContents.forEach((content) => {
                content.style.display = 'none';
            });
            tabButtons.forEach((but) => {
                but.style.borderBottomColor = "transparent";
            })

            document.querySelector(`.tab-content[data-tab="${target}"]`).style.display = "block";
            button.style.borderBottomColor = "black";
            // compound selector :-
            // has the class .tab-content
            // AND has the attribute data-tab="2"
        });
    });
});