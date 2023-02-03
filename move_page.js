window.onload = function () {
    document.querySelector('#li_about').addEventListener('click', function () {
        const aboutSection = document.querySelector('#about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        let userName = document.getElementById('userName').value;
        console.log(userName);

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


}
