/**
 * Shows a popup message to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of message (success, error, warning, info)
 */
export function showPopupMessage(message, type = "info") {
  // Check if message container exists, create if not
  let messageContainer = document.getElementById("message-container");
  if (!messageContainer) {
    messageContainer = document.createElement("div");
    messageContainer.id = "message-container";
    messageContainer.style.position = "fixed";
    messageContainer.style.top = "20px";
    messageContainer.style.right = "20px";
    messageContainer.style.zIndex = "1000";
    document.body.appendChild(messageContainer);
  }

  // Create message element
  const messageElement = document.createElement("div");
  messageElement.className = `message ${type}`;
  messageElement.innerHTML = `
    <div class="message-content">
      <span class="message-text">${message}</span>
      <button class="close-btn">&times;</button>
    </div>
  `;
  
  // Style the message
  messageElement.style.padding = "10px 15px";
  messageElement.style.marginBottom = "10px";
  messageElement.style.borderRadius = "4px";
  messageElement.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  messageElement.style.display = "flex";
  messageElement.style.justifyContent = "space-between";
  messageElement.style.alignItems = "center";
  
  // Set color based on type
  switch (type) {
    case "success":
      messageElement.style.backgroundColor = "#d4edda";
      messageElement.style.color = "#155724";
      messageElement.style.borderLeft = "4px solid #28a745";
      break;
    case "error":
      messageElement.style.backgroundColor = "#f8d7da";
      messageElement.style.color = "#721c24";
      messageElement.style.borderLeft = "4px solid #dc3545";
      break;
    case "warning":
      messageElement.style.backgroundColor = "#fff3cd";
      messageElement.style.color = "#856404";
      messageElement.style.borderLeft = "4px solid #ffc107";
      break;
    default: // info
      messageElement.style.backgroundColor = "#d1ecf1";
      messageElement.style.color = "#0c5460";
      messageElement.style.borderLeft = "4px solid #17a2b8";
  }
  
  // Add close button functionality
  const closeBtn = messageElement.querySelector(".close-btn");
  closeBtn.style.background = "none";
  closeBtn.style.border = "none";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.fontSize = "20px";
  closeBtn.style.marginLeft = "10px";
  closeBtn.addEventListener("click", () => {
    messageContainer.removeChild(messageElement);
  });
  
  // Add to container
  messageContainer.appendChild(messageElement);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (messageElement.parentNode === messageContainer) {
      messageContainer.removeChild(messageElement);
    }
  }, 5000);
}