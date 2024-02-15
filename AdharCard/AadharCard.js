let photo = document.getElementById("photo");
let name = document.getElementById("Name");
let dob = document.getElementById("DOB");
let gender = document.getElementById("Gender");
let contact = document.getElementById("Contact");
let aadharNumber = document.getElementById("aadharNumber");

let details = [
  {
    Photo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg",
    Name: "Sachin Tendulkar",
    Dob: "10 November 1967",
    Gender: "Male",
    Contact: 7788449955,
    AadharNumber: 123456789102,
  },
  {
    Photo: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQCfyDTGbjFnCjYpM2jjJhtwTMGvYu0IAsjGkPfHxXmL7nyn6psi58bFVzcVGcKtoC0",
    Name: "Hardik Pandya",
    Dob: "11 October 1993",
    Gender: "Male",
    Contact: 7512341245,
    AadharNumber: 987654321123,
  },
  {
    Photo: "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_.jpg",
    Name: "Akshay Kumar",
    Dob: "9 September 1967",
    Gender: "Male",
    Contact: 8946321565,
    AadharNumber: 123265455464,
  },
  {
    Photo: "http://t0.gstatic.com/images?q=tbn:ANd9GcRfa4OMPPaIKAEC0kbTJUYpvdgjdyD_Pk1srX7RBeaxe58sUFob8sCyPo0uJAbdpzFMwvTM",
    Name: "Sara Ali Khan",
    Dob: "12 August 1995",
    Gender: "Female",
    Contact: 3265415444,
    AadharNumber: 444155462345,
  },
  
  {
    Photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvZ9xfFTW7qiVN97QpvaP8K-VrnY7CzEgcdmgqumm_u76aBoFm",
    Name: "Saif Ali Khan",
    Dob: "12 August 1995",
    Gender: "male",
    Contact: 3265415444,
    AadharNumber: 444155462345,
  },
  

];

let currentIndex = 0;

function showDetails(index) {
    let currentDetails = details[index];
    photo.style.backgroundImage = `url('${currentDetails.Photo}')`;
    name.textContent = currentDetails.Name;
    dob.textContent = currentDetails.Dob;
    gender.textContent = currentDetails.Gender;
    contact.textContent = currentDetails.Contact;
    aadharNumber.textContent = currentDetails.AadharNumber;
}

function nextAadharDetails() {
    currentIndex = (currentIndex + 1) % details.length;
    showDetails(currentIndex);
}

function backAadharDetails() {
    currentIndex = (currentIndex - 1 + details.length) % details.length;
    showDetails(currentIndex);
}

// Show initial details
showDetails(currentIndex);
