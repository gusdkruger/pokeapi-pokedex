export function showError(message) {
    const alertDiv = document.getElementById("error-alert");
    alertDiv.classList.remove("d-none");
    alertDiv.textContent = message;

    setTimeout(() => {
        alertDiv.classList.add("d-none");
    }, 5000);
}
