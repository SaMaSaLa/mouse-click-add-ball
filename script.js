let countEl = document.getElementById("count");
let count = 0;
let container = document.getElementById("container");

container.addEventListener("click", (e) => {
    const containerClientRect = container.getBoundingClientRect();

    const ballDiv = document.createElement("div");
    ballDiv.classList.add("ball");
    ballDiv.style.left = e.clientX - 50 - containerClientRect.left + "px";
    ballDiv.style.top = e.clientY - 50 - containerClientRect.top + "px";
    container.append(ballDiv);
    count++;
    countEl.textContent = count;
});
