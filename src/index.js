window.onload = function () {
  document.querySelector('#li-about').addEventListener('click', function () {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({behavior: 'smooth'});
  });
  document.querySelector('#li-works').addEventListener('click', function () {
    const aboutSection = document.querySelector('#works');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('#li-news').addEventListener('click', function () {
    const aboutSection = document.querySelector('#news');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('#li-contact').addEventListener('click', function () {
    const aboutSection = document.querySelector('#contact');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('#contact-button').addEventListener('click', function () {
    const userName = document.getElementById('userName').value;
    if (!userName) {
      const tableElem = document.getElementById("contact");
      const createElement = document.createElement("h1");
      createElement.innerHTML = "userName is null";
      tableElem.appendChild(createElement);
    }
  });
}
