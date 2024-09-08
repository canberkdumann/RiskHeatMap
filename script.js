const tooltip = document.getElementById('tooltip');

document.querySelectorAll('td').forEach(cell => {
    cell.addEventListener('mouseover', function(event) {
        tooltip.textContent = this.dataset.risk;
        tooltip.style.display = 'block';
        tooltip.style.left = event.pageX + 10 + 'px';
        tooltip.style.top = event.pageY + 10 + 'px';
    });

    cell.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });
});
