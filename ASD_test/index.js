window.addEventListener('load', function () {
    const timeElement = document.getElementById('time1');
    const options = { day: 'numeric',  month: 'short', hour: '2-digit', minute: '2-digit' };
    timeElement.innerHTML = new Date().toLocaleDateString("en-US", options);
    setInterval(() => {
      timeElement.innerHTML = new Date().toLocaleDateString("en-US", options);
    }, 5000);
  });

  function changeBackground() { 
    document.body.style.backgroundImage = `url(${event.target.src})` 
  }