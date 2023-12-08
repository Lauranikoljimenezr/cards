searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    document.querySelectorAll('.card').forEach((tarjeta) => {
        const title = tarjeta.querySelector('.text-title').textContent.toLowerCase();

        if (title.includes(searchTerm)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
});