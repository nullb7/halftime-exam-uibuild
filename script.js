const createMessageBordHtml = () => {
  return `
    <h1>Visszajelzés</h1>
    <input type="text" placeholder="Tárgy">
    <textarea placeholder="Megjegyzés"></textarea>
    <div class="terms">
      <input type="checkbox">
      <p>Elolvastam és elfogadtam az Adatkezelési Tájékoztatót</p>
    </div>
    <div class="terms">
      <input type="checkbox">
      <p>Szeretnék hírlevelet kapni</p>
    </div>
    <button>Mentés</button>
  `
}

const loadEvent = () => {
  const rootElement = document.querySelector("#root");
  rootElement.insertAdjacentHTML("beforeend", createMessageBordHtml())
}

window.addEventListener("load", loadEvent)