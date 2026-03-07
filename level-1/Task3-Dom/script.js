document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('countDisplay');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');

    let count = 0;

    
    const updateDisplay = () => {
        display.textContent = count;
        
        display.classList.remove('pop-animation');
        void display.offsetWidth; 
        display.classList.add('pop-animation');
        
        if (count === 0) {
            decrementBtn.style.opacity = '0.5';
            decrementBtn.style.cursor = 'not-allowed';
        } else {
            decrementBtn.style.opacity = '1';
            decrementBtn.style.cursor = 'pointer';
        }
    };

    incrementBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    decrementBtn.addEventListener('click', () => {
        if (count > 0) {
            count--;
            updateDisplay();
        }
    });

    resetBtn.addEventListener('click', () => {
        if (count !== 0) {
            count = 0;
            updateDisplay();
        }
    });

    updateDisplay();
});
