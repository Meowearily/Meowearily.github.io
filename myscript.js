{/* <button id="myButton" class="intro button"></button> */}   //пример

// document.getElementById('myButton').style.color = "red";

var title = document.getElementById('myButton');
// title.style.color = "red";

title.onclick = function() {
    title.style.color = "red";
}

alert("Meow");

// Выберем кнопку и форму
// const $button = document.querySelector('a');
// const $form = document.querySelector('aboutme');
        
// // При клике на кнопку
// $button.addEventListener('click', e => {
//   // Прокрутим страницу к форме 
//   $form.scrollIntoView({ 
//     block: 'nearest', // к ближайшей границе экрана
//     behavior: 'smooth', // и плавно 
//   });
// });


// $(document).ready(function () {
//     $("#header_contents").on("click", "a", function (event) {
//         event.preventDefault();
//         var id = $(this).attr('href'),
//             top = $(id).offset().top - 80 + "px";
//         $('body,html').animate({
//             scrollTop: 1500
//         }, top);
//     });
// });

document.getElementById('scrollToAboutMe').addEventListener('click', function() {
    const AboutMe = document.getElementById('AboutMe');
    if (AboutMe) {
        AboutMe.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Element with ID "AboutMe" not found.');
    }
});

document.getElementById('scrollToProjects').addEventListener('click', function() {
    const Projects = document.getElementById('Projects');
    if (Projects) {
        Projects.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Element with ID "Projects" not found.');
    }
});

document.getElementById('scrollToQuestions').addEventListener('click', function() {
    const Questions = document.getElementById('Questions');
    if (Questions) {
        Questions.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Element with ID "Projects" not found.');
    }
});

document.getElementById('scrollToContacts').addEventListener('click', function() {
    const Contacts = document.getElementById('Contacts');
    if (Contacts) {
        Contacts.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Element with ID "Projects" not found.');
    }
});

document.getElementById('scrollToMainPage').addEventListener('click', function() {
    const MainPage = document.getElementById('MainPage');
    if (MainPage) {
        MainPage.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Element with ID "Projects" not found.');
    }
});