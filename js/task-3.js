const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);


nameInput.addEventListener('input', updateGreeting);
function updateGreeting(event) {
    const initialValue = event.currentTarget.value;
    const trimmedValue = initialValue.trim();
    if (trimmedValue === "") {
        nameOutput.textContent = "Anonymous";
    }else{
        nameOutput.textContent = trimmedValue;
    }
}