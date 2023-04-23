// graphs
let ctx = document.getElementById('myratingChart');
let number_of_reviews=20
let number_of_rating_recived=17
let percentage = (number_of_rating_recived/number_of_reviews)*100
let not_p=100 -percentage

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Over all user review'
        ],
        datasets: [{
          label: 'Review percentage',
          data: [percentage, not_p],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',


          ],
          hoverOffset: 4
        }]
      },options: {
        responsive: true
      }
    
});

let cards = document.querySelectorAll('.rating');
let form = document.querySelector('#myForm');
let reviewCards = document.getElementById('review-cards');
cards.forEach(card => {
    let starIcons = card.querySelectorAll('.bi');
    let selectedRating = 0;

    starIcons.forEach((starIcon, index) => {
        starIcon.addEventListener('mouseover', () => {
            for (let i = 0; i <= index; i++) {
                starIcons[i].classList.remove('bi-star');
                starIcons[i].classList.add('bi-star-fill');
            }
        });

        starIcon.addEventListener('mouseout', () => {
            for (let i = 0; i <= index; i++) {
                if (i >= selectedRating) {
                    starIcons[i].classList.remove('bi-star-fill');
                    starIcons[i].classList.add('bi-star');
                }
            }
        });

        starIcon.addEventListener('click', () => {
            selectedRating = index + 1;
        });
    });
    form.addEventListener('submit', (event) => {
        
        event.preventDefault(); // prevent the form from submitting normally
        let name = form.elements['name'].value;
        let review = form.elements['review'].value;
        console.log(`Name: ${name}`);
        console.log(`Review: ${review}`);
        console.log(`Rating: ${selectedRating}`);
        // update chart data
    number_of_rating_recived += selectedRating;
    number_of_reviews += 5;
    let percentage = (number_of_rating_recived / number_of_reviews) * 100;
    let not_p = 100 - percentage;
    let chart = Chart.getChart(ctx);
    chart.data.datasets[0].data = [percentage, not_p];
    chart.update();
    
        // submit the form data to the server using AJAX or other methods
        let card = document.createElement('div');
        card.classList.add('col-sm-6', 'p-2');
        card.innerHTML = `
    
    <div class="card text-white bg-secondary h-10">
      <div class="card-body">
        <h5 class="card-title ps-1 text-uppercase">${name}</h5>
        <p class="card-text ps-1">${review}</p>
        <div>
          ${Array.from({ length: selectedRating }, () => '<i class="bi bi-star-fill ps-1"></i>').join('')}
          ${Array.from({ length: 5 - selectedRating }, () => '<i class="bi bi-star"></i>').join('')}
        </div>
      </div>
    </div>
    
    `;
        number_of_rating_recived+= selectedRating
        number_of_reviews+=5
        // Append card element to review cards container
        reviewCards.appendChild(card);
    
        // Reset form inputs
        form.reset();
        cards.forEach((card,index) => {
            let star = card.querySelectorAll('.bi');
            selectedRating = 0;
            star.forEach(s =>{
                s.classList.remove('bi-star-fill');
                s.classList.add('bi-star');

                s.addEventListener('mouseover', () => {
                    for (let i = 0; i <= index; i++) {
                        star[i].classList.remove('bi-star');
                        star[i].classList.add('bi-star-fill');
                    }
                });
        
                s.addEventListener('mouseout', () => {
                    for (let i = 0; i <= index; i++) {
                        if (i >= selectedRating) {
                            star[i].classList.remove('bi-star-fill');
                            star[i].classList.add('bi-star');
                        }
                    }
                });
        
                s.addEventListener('click', () => {
                    selectedRating = index + 1;
                });
            })
            
        })
    
    });
});


