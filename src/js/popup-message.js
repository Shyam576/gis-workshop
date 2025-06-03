/**
 * Show a popup message that automatically disappears
 * @param {string} message - The message to display
 * @param {string} type - Message type: 'success', 'error', 'warning', or 'info'
 * @param {number} duration - Duration in milliseconds before the message disappears
 */
export function showPopupMessage(message, type = 'info', duration = 5000) {
  // Create popup element
  const popup = document.createElement('div');
  popup.className = `popup-message ${type}`;
  popup.textContent = message;
  
  // Add to document
  document.body.appendChild(popup);
  
  // Remove after duration
  setTimeout(() => {
    popup.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 500); // Wait for fade out animation
  }, duration);
}