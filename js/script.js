// untuk di navigation
let section = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top > offset && top < offset + height) {
            navLink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id +']')
                .classList.add('active');
            });
        };
    });
};


// untuk di form
const myForm = document.getElementById("myForm");
const submittedName = document.getElementById("submittedName");
const submittedDate = document.getElementById("submittedDate");
const submittedGender = document.getElementById("submittedGender");
const submittedMessage = document.getElementById("submittedMessage");
const currentTime = document.getElementById("currentTime");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message").value;
  submittedName.textContent = name;
  submittedDate.textContent = date;
  submittedGender.textContent = gender;
  submittedMessage.textContent = message;

  currentTime.textContent = new Date().toLocaleString();
});