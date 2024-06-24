
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); //Add this if you want the scroll animations to be infinite
            }
    });
});    

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('showTwo');
            } else {
                entry.target.classList.remove('showTwo'); //Add this if you want the scroll animations to be infinite
            }
    });
});    

const hiddenElementsTwo = document.querySelectorAll('.hiddenTwo');
hiddenElementsTwo.forEach((el) => observerTwo.observe(el));

const observerThree = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('showThree');
            } else {
                entry.target.classList.remove('showThree'); //Add this if you want the scroll animations to be infinite
            }
    });
});    

const hiddenElementsThree = document.querySelectorAll('.hiddenThree');
hiddenElementsThree.forEach((el) => observerThree.observe(el));