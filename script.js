const buttons = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('.card');

const updateVisibility = (filter) => {
  cards.forEach((card) => {
    const shouldShow = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('hidden', !shouldShow);
  });
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    updateVisibility(button.dataset.filter);
  });
});

// Provide CSS hook for hidden state without inline styles
const style = document.createElement('style');
style.textContent = '.card.hidden { display: none; }';
document.head.appendChild(style);
