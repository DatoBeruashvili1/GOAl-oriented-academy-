let userCount = 0;
document.getElementById('loadUser').addEventListener('click', async () => {
    const userList = document.getElementById('userList');
    userCount++; 

   
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userCount}`);
    const userData = await response.json();

    const userDiv = document.createElement('div');
    userDiv.classList.add('user-info');
    userDiv.innerHTML = `
        <h3>მომხმარებელი #${userCount}</h3>
        <p><strong>სახელი:</strong> ${userData.name}</p>
        <p><strong>ბოლოს სახელი:</strong> ${userData.username}</p>
        <p><strong>ელ-ფოსტა:</strong> ${userData.email}</p>
        <p><strong>მისამართი:</strong> ${userData.address.street}, ${userData.address.city}</p>
    `;

    userList.appendChild(userDiv);
});