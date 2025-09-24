async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  if (!message) return;

  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML += `<div class="message user">${message}</div>`;
  input.value = "";

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gemma3:1b", prompt: message })
  });

  const data = await response.json();
  const botReply = data.response || "Hata oluştu.";

  messagesDiv.innerHTML += `<div class="message bot">${botReply}</div>`;
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
