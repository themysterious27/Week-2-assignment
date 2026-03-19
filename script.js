const addBtn = document.getElementById("addBenefitBtn");
const input = document.getElementById("newBenefit");
const list = document.getElementById("benefitsList");

addBtn.addEventListener("click", function () {

    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
});

document.querySelectorAll("#benefitsList li").forEach(function (item) {

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(deleteBtn);
});

document.getElementById("contactForm").addEventListener("submit", function () {
    alert("Form submitted successfully!");
});


function updateDateTime() {

    const now = new Date();

    const options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    };

    const date = now.toLocaleDateString("en-IN", options);
    const time = now.toLocaleTimeString("en-IN");

    document.getElementById("dateTime").textContent =
        date + ", " + time;
}

updateDateTime();
setInterval(updateDateTime, 1000);