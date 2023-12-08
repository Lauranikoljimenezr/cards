function filterByCategory(category) {
    const containers = document.querySelectorAll('.card');

    containers.forEach(card => {
        const containerCategory = card.getAttribute('data-category');
        if (category === 'todo' || containerCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}