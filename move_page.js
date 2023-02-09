window.onload = function () {
    document.querySelector('#li_about').addEventListener('click', function () {
        const aboutSection = document.querySelector('#about');
        aboutSection.scrollIntoView({});
    });
    document.querySelector('#li_works').addEventListener('click', function () {
        const aboutSection = document.querySelector('#works');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('#li_news').addEventListener('click', function () {
        const aboutSection = document.querySelector('#news');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('#li_contact').addEventListener('click', function () {
        const aboutSection = document.querySelector('#contact');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('#contact_button').addEventListener('click', function(){
        let userName = document.getElementById('userName').value;
        if (!userName) {
          var tableElem = document.getElementById("contact");
          var createElement = document.createElement("h1");
          createElement.innerHTML = "userName is null";
          tableElem.appendChild(createElement);
        }
      });
}
