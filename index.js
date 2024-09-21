const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEll) => {
  counterEll.innerText = "0";

  incrementCounter();
  function incrementCounter() {
    let currentNumber = +counterEll.innerText;
    const dataCeil = counterEll.getAttribute("data-ceil");

    const increment = dataCeil / 15;
    currentNumber = Math.ceil(currentNumber + increment);

    if (currentNumber < dataCeil) {
      counterEll.innerText = currentNumber;
      setTimeout(incrementCounter, 50);
    } else {
      counterEll.innerText = dataCeil;
    }
  }
});
