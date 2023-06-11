async function getJoke() {
    const response = await fetch('https://icanhazdadjoke.com/slack', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    const jokeObj = data.attachments[0].text; // Access the joke text
    document.querySelector('p').innerText = jokeObj;
}