// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];

let userInput = document.getElementById('amigo');

function addFriend () {
  if (userInput.value === "") {
    alert("Por favor, ingrese un nombre");
  } else {
    friends.push(userInput.value);
    userInput.value = "";
    console.log("Amigos: ", friends);
    updateFriendList();
  };
};

function updateFriendList () {
  let list = document.getElementById('listaAmigos');
  list.innerHTML = "";

  for (let x = 0; x < friends.length; x++) {
    const li = document.createElement('li');
    li.textContent = friends[x];
    list.appendChild(li);
  }
};

function sortFriend () {
  let result = document.getElementById('resultado');

  if (friends.length === 0) {
    result.innerHTML = "No hay amigos para sortear";
  } else {
    let random = Math.floor(Math.random() * (friends.length));
    console.log(random);
    let friendSorted = friends[random];
    console.log(friendSorted);
    result.innerHTML = `El amigo sorteado es: ${friendSorted}`;
  }
};