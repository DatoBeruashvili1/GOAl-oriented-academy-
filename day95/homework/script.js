function generateEmail(firstName, lastName, age) {
    
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}.${age}${randomNumber}@example.com`;
  }

  function addPerson() {
  
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const age = document.getElementById("age").value;
    const personalNumber = document.getElementById("personal-number").value;
    const height = document.getElementById("height").value;
    const description = document.getElementById("description").value;

   
    const email = generateEmail(firstName, lastName, age);


    const personCard = document.createElement("div");
    personCard.classList.add("person-card");


    personCard.innerHTML = `
      <h3>${firstName} ${lastName}</h3>
      <div class="person-info">
        <strong>Age:</strong> ${age} years<br>
        <strong>Personal Number (ID):</strong> ${personalNumber}<br>
        <strong>Height:</strong> ${height} cm<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Email:</strong> ${email}
      </div>
    `;

   
    document.getElementById("people-list").appendChild(personCard);

   
    document.getElementById("first-name").value = '';
    document.getElementById("last-name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("personal-number").value = '';
    document.getElementById("height").value = '';
    document.getElementById("description").value = '';
  }