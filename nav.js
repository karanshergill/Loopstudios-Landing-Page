fetch('nav-items.json')
    .then(response => response.json())
    .then(data => {
        const navList = document.getElementById('nav-list');

        data.items.forEach(item => {
            const listItem = document.createElement('li');

            const anchor = document.createElement('a');
            anchor.textContent = item.title;
            anchor.href = item.link;

            anchor.classList.add(`text-primary-white`)

            listItem.appendChild(anchor);
            navList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching nav-items.json:', error));