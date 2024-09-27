function addItem() {
    const item = document.getElementById("item");
    const itemValue = item.ariaValueMax.trim();

    if (itemValue) {
        const list = document.getElementById("list");
        const li = document.createElement("li");
        li.textContent = itemValue;

        const removeButton = document.createElement("button");
        removeButton.textContent = "remover";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", function() {
            list.removeChild(li);
        });
        li.appendChild(removeButton);
        list.appendChild(li);
        item.value = "";
    }else{
        alert("Por favor, digite um item");
    }
}function addItem() {
    const item = document.getElementById("item");
    const itemValue = item.value.trim();

    if (itemValue) {
        const list = document.getElementById("list");
        const li = document.createElement("li");
        li.textContent = itemValue;

        const removeButton = document.createElement("button");
        removeButton.textContent = "remover";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", function() {
            list.removeChild(li);
        });
        li.appendChild(removeButton);
        list.appendChild(li);
        item.value = "";
    } else {
        alert("Por favor, digite um item");
    }
}

