document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    
    const inputs = {
        name: {
            el: document.getElementById('name'),
            error: document.getElementById('nameError'),
            validate: (val) => val.trim().length >= 3,
            message: 'Name must be at least 3 characters'
        },
        email: {
            el: document.getElementById('email'),
            error: document.getElementById('emailError'),
            validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
            message: 'Please enter a valid email address'
        },
        phone: {
            el: document.getElementById('phone'),
            error: document.getElementById('phoneError'),
            validate: (val) => /^[\d\s+\-()]{10,}$/.test(val),
            message: 'Please enter a valid phone number'
        },
        password: {
            el: document.getElementById('password'),
            error: document.getElementById('passwordError'),
            validate: (val) => val.length >= 8 && /[A-Z]/.test(val) && /[0-9]/.test(val),
            message: 'Min 8 chars, 1 uppercase, 1 number'
        }
    };

  
    const showError = (fieldKey) => {
        const field = inputs[fieldKey];
        field.el.classList.add('invalid');
        field.error.textContent = field.message;
        field.error.classList.add('show');
        field.el.parentElement.classList.add('shake');
        
        setTimeout(() => {
            field.el.parentElement.classList.remove('shake');
        }, 400);
    };

    
    const hideError = (fieldKey) => {
        const field = inputs[fieldKey];
        field.el.classList.remove('invalid');
        field.error.classList.remove('show');
    };

   
    const validateField = (fieldKey) => {
        const field = inputs[fieldKey];
        if (!field.validate(field.el.value)) {
            showError(fieldKey);
            return false;
        } else {
            hideError(fieldKey);
            return true;
        }
    };

    Object.keys(inputs).forEach(key => {
        const input = inputs[key].el;
        
        input.addEventListener('input', () => {
            if (input.classList.contains('invalid')) {
                validateField(key);
            }
        });

        input.addEventListener('blur', () => {
            validateField(key);
        });

        input.addEventListener('focus', () => {
            input.parentElement.querySelector('label').style.color = 'var(--primary-color)';
        });

        input.addEventListener('blur', () => {
            input.parentElement.querySelector('label').style.color = 'var(--text-secondary)';
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        Object.keys(inputs).forEach(key => {
            if (!validateField(key)) {
                isValid = false;
            }
        });

        if (isValid) {
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';

            setTimeout(() => {
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');
            }, 1500);
        }
    });
});
