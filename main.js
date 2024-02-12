var isClicking = false

function getBtnColor() {
  var toggleColor;
  if (isClicking) {
    toggleColor = "green";
  } else {
    toggleColor = "red";
  }
  return toggleColor; 
}

function getBtnText() {
  var toggleText;
  if (isClicking) {
    toggleText = "Кликер ON";
  } else {
    toggleText = "Кликер OFF";
  }
  return toggleText; 
}

function startClicking() {
  clickTimer = setInterval(function() {
    Game.lastClick -= 1000;
    Game.ClickCookie();
  }, 4);
}

function stopClicking() {
  clearInterval(clickTimer);
}

function switchClicker() {
  if (isClicking) {
      startClicking();
  } else stopClicking();
}

function toggleClicker() {
  const Clicker = document.querySelector('#clicker');
  isClicking = !isClicking;
  switchClicker();
  Clicker.style.color = getBtnColor();
  Clicker.textContent = getBtnText();
  
}

function addButton() {
  const topBar = document.querySelector('#topBar');
  let toggleElement = document.createElement('div');
  toggleElement.id = "clicker";
  toggleElement.style.color = "red";
  toggleElement.style.cursor = "pointer";
  toggleElement.textContent = "Кликер OFF";
  toggleElement.onclick = toggleClicker;
  topBar.appendChild(toggleElement);
}

addButton();
