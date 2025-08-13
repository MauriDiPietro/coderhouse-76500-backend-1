const socket = io();

let username = null;

if (!username) {
  Swal.fire({
    title: "Bienvenido/a al chat!",
    input: "text",
    text: "Nombre de usuario:",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Ingresar",
    showLoaderOnConfirm: true,
    inputValidator: (value) => {
      if (!value) return "El nombre de usuario es obligatorio";
    },
  }).then((result) => {
    username = result.value;
    socket.emit("newUser", username);
  });
}

const message = document.getElementById("message");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const actions = document.getElementById("actions");

btn.addEventListener("click", () => {
  socket.emit("chat:message", {
    username,
    message: message.value,
  });
  message.value = "";
});

socket.on("messages", (data) => {
  actions.innerHTML = "";
  const chatRender = data
    .map((msg) => {
      return `<p><strong>${msg.username}</strong>: ${msg.message}</p>`;
    })
    .join(" ");
  output.innerHTML = chatRender;
});

socket.on("newUser", (user) => {
  Toastify({
    text: `${user} ha ingresado al chat`,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
});


message.addEventListener('keypress', ()=>{
    socket.emit('chat:typing', username)
})

socket.on('chat:typing', (user)=>{
    actions.innerHTML = `<p>${user} está escribiendo un mensaje...</p>`
})