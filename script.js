document.addEventListener("DOMContentLoaded", function() {
    const root = document.querySelector('.root');

    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h1');
    title.textContent = 'Tugas-2 Praktikum Pemrograman Web';
    container.appendChild(title);

    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    container.appendChild(form);

    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username';
    form.appendChild(usernameLabel);

    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('name', 'username');
    usernameInput.setAttribute('value', 'Cikita Natasya Br Sembiring');
    form.appendChild(usernameInput);

    const nimLabel = document.createElement('label');
    nimLabel.textContent = 'NIM';
    form.appendChild(nimLabel);

    const nimInput = document.createElement('input');
    nimInput.setAttribute('type', 'text');
    nimInput.setAttribute('name', 'nim');
    nimInput.setAttribute('value', '231401121');
    form.appendChild(nimInput);

    const komLabel = document.createElement('label');
    komLabel.textContent = 'KOM';
    form.appendChild(komLabel);

    const komInput = document.createElement('input');
    komInput.setAttribute('type', 'text');
    komInput.setAttribute('name', 'kom');
    komInput.setAttribute('value', 'A');
    form.appendChild(komInput);

    const fileLabel = document.createElement('label');
    fileLabel.textContent = 'Upload Photo';
    form.appendChild(fileLabel);

    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('name', 'photo');
    form.appendChild(fileInput);

    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    form.appendChild(submitButton);

    root.appendChild(container);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        form.style.display = 'none'; 

        const card = document.createElement('div');
        card.classList.add('card');

      
        const username = usernameInput.value;
        const nim = nimInput.value;
        const kom = komInput.value;

        
        card.innerHTML = `<p><strong>Username:</strong> ${username}</p><p><strong>NIM:</strong> ${nim}</p><p><strong>KOM:</strong> ${kom}</p>`;

        
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.setAttribute('src', e.target.result);
                card.appendChild(img);
            };
            reader.readAsDataURL(file);
        }

        container.appendChild(card);
    });
});
