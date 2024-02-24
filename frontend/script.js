/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    let dropbtn = document.querySelector(".dropbtn");
    dropbtn.classList.toggle("clicked");
  }
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const unilectivesButton = document.querySelector(".unilectives-logo");
unilectivesButton.addEventListener("click", function() {
    myFunction2();
});

function myFunction2() {
    const unilectivesButton = document.querySelector(".unilectives-text");
    unilectivesButton.style.color = getRandomColor();
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const jsonData = [
    {
      "course_prefix": "COMP",
      "course_code": 1511,
      "course_title": "Programming Fundamentals",
      "average_stars": 4.8,
      "total_reviews": 68,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 1531,
      "course_title": "Software Engineering Fundamentals",
      "average_stars": 3.9,
      "total_reviews": 47,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 1521,
      "course_title": "Computer Systems Fundamentals",
      "average_stars": 4,
      "total_reviews": 40,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 2521,
      "course_title": "Data Structures and Algorithms",
      "average_stars": 4,
      "total_reviews": 36,
      "offered_terms": ["Summer", "Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 2511,
      "course_title": "Object-Oriented Design & Programming",
      "average_stars": 3,
      "total_reviews": 33,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 3311,
      "course_title": "Database Systems",
      "average_stars": 4,
      "total_reviews": 33,
      "offered_terms": ["Term 1", "Term 3"]
    }
  ]

// Function to generate a card
function generateCard(course) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const filledStars = '★'.repeat(Math.round(course.average_stars));
    const emptyStars = '★'.repeat(5 - Math.round(course.average_stars));

    const cardContent = `
        <a href="#">        
            <div class="card-content">
                <div class="card-content-name">
                    <h2>${course.course_prefix}${course.course_code}</h2>
                    <div class="right-name">
                        <div class="star">
                            <span class="filled-card-star">${filledStars}</span>${emptyStars}
                        </div>
                        <p class="card-review">${course.total_reviews} reviews</p>
                    </div>
                </div>
                <div class="card-description">${course.course_title}</div>
                <div class="card-term">${course.offered_terms.map(term => `<div class="card-term-items">${term}</div>`).join('')}</div>
            </div>
        </a>
    `;

    cardDiv.innerHTML = cardContent;
    return cardDiv;
}

function populateCards() {
    const cardContainer = document.querySelector('.card-container');
    jsonData.forEach(course => {
        const card = generateCard(course);
        cardContainer.appendChild(card);
    });
}

populateCards();

const searchBar = document.querySelector(".search-bar-container");
searchBar.addEventListener("click", function() {
    console.log("hello");
    showDiv();
});

function showDiv() {
    const div = document.getElementById("hidden-div");
    div.style.display = "block";
}

function hideDiv() {
    const div = document.getElementById("hidden-div");
    div.style.display = "none";
}

