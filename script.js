document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Dynamic Price Calculation

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('.modal form');
    const cardPriceElements = document.querySelectorAll('.CardPrice');

    const priceData = {
        "form1": {
            "prices": {
                "3": {"3": 6500, "4": 7500, "5": 8500, "6": 9500, "7": 10500, "8": 10500, "1": 10500},
                "4": {"3": 7500, "4": 8500, "5": 9500, "6": 10500, "7": 11500, "8": 11500, "1": 11500},
                "5": {"3": 8500, "4": 9500, "5": 10500, "6": 11500, "7": 12500, "8": 12500, "1": 12500}
            },
            "securityDeposit": 1500
        },
        "form2": {
            "prices": {
                "3": {"3": 6500, "4": 7500, "5": 8500, "6": 9500, "7": 10500, "8": 10500, "1": 10500},
                "4": {"3": 7500, "4": 8500, "5": 9500, "6": 10500, "7": 11500, "8": 11500, "1": 11500},
                "5": {"3": 8500, "4": 9500, "5": 10500, "6": 11500, "7": 12500, "8": 12500, "1": 12500}
            },
            "securityDeposit": 1500
        },
        "form3": {
            "prices": {
                "3": {"3": 6500, "4": 7500, "5": 8500, "6": 9500, "7": 10500, "8": 10500, "1": 10500},
                "4": {"3": 7500, "4": 8500, "5": 9500, "6": 10500, "7": 11500, "8": 11500, "1": 11500},
                "5": {"3": 8500, "4": 9500, "5": 10500, "6": 11500, "7": 12500, "8": 12500, "1": 12500}
            },
            "securityDeposit": 1500
        },
        "form4": {
            "prices": {
                "3": {"3": 7500, "4": 8500, "5": 9500, "6": 10500, "7": 11500, "8": 11500, "1": 12000},
                "4": {"3": 8500, "4": 9500, "5": 10500, "6": 11500, "7": 12500, "8": 12500, "1": 13000},
                "5": {"3": 9900, "4": 10500, "5": 11500, "6": 12500, "7": 13500, "8": 13500, "1": 14000}
            },
            "securityDeposit": 2000
        },
        "form5": {
            "prices": {
                "3": {"3": 11000, "4": 12000, "5": 13000, "6": 14000, "7": 15000, "8": 16000, "1": 16000},
                "4": {"3": 12000, "4": 13000, "5": 14000, "6": 15000, "7": 16000, "8": 17000, "1": 17000},
                "5": {"3": 13000, "4": 14000, "5": 15000, "6": 16000, "7": 17000, "8": 18000, "1": 18000}
            },
            "securityDeposit": 1500
        },
        "form6": {
            "prices": {
                "3": {"3": 11000, "4": 12000, "5": 13000, "6": 14000, "7": 15000, "8": 16000, "1": 16000},
                "4": {"3": 12000, "4": 13000, "5": 14000, "6": 15000, "7": 16000, "8": 17000, "1": 17000},
                "5": {"3": 13000, "4": 14000, "5": 15000, "6": 16000, "7": 17000, "8": 18000, "1": 18000}
            },
            "securityDeposit": 1500
        },
        "form7": {
            "prices": {
                "3": {"3": 11000, "4": 12000, "5": 13000, "6": 14000, "7": 15000, "8": 16000, "1": 16000},
                "4": {"3": 12000, "4": 13000, "5": 14000, "6": 15000, "7": 16000, "8": 17000, "1": 17000},
                "5": {"3": 13000, "4": 14000, "5": 15000, "6": 16000, "7": 17000, "8": 18000, "1": 18000}
            },
            "securityDeposit": 1500
        },
        "form8": {
            "prices": {
                "3": {"3": 7, "4": 8000, "5": 9000, "6": 10000, "7": 11000, "8": 11000, "1": 11000},
                "4": {"3": 8000, "4": 9000, "5": 10000, "6": 11000, "7": 12000, "8": 12000, "1": 12000},
                "5": {"3": 9000, "4": 10000, "5": 11000, "6": 12000, "7": 13000, "8": 13000, "1": 13000}
            },
            "securityDeposit": 2000
        }
    };

    forms.forEach(form => {
        const modal = form.closest('.modal');
        const formId = modal.getAttribute('data-form') || 'form1';
        const ratingField = form.querySelector('[name="Rented Product"]');
        const durationField = form.querySelector('[name="Duration"]');
        const priceField = form.querySelector('[name="Price"]');
        const totalPriceField = form.querySelector('[name="Total Price"]');

        const cardPriceElement = document.querySelector(`.CardPrice[data-form='${formId}']`);

        function calculatePrice() {
            const rating = parseInt(ratingField.value);
            const duration = parseInt(durationField.value);

            if (priceData[formId] && priceData[formId].prices[rating] && priceData[formId].prices[rating][duration]) {
                const basePrice = priceData[formId].prices[rating][duration];
                const securityDeposit = priceData[formId].securityDeposit;

                priceField.value = `₹${basePrice}`;
                totalPriceField.value = `₹${basePrice + securityDeposit}`;

                if (cardPriceElement) {
                    cardPriceElement.textContent = `₹${basePrice} /Seasonal`;
                }
            } else {
                priceField.value = '₹0';
                totalPriceField.value = '₹0';

                if (cardPriceElement) {
                    cardPriceElement.textContent = '₹0 /Seasonal';
                }
            }
        }

        ratingField.addEventListener('change', calculatePrice);
        durationField.addEventListener('change', calculatePrice);

        modal.addEventListener('shown.bs.modal', calculatePrice);

        calculatePrice();
    });
});




// Splide Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 2000,
    }).mount();
});
// Product-splide
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Product-splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 2000,
    }).mount();
});
// Testimonials_splide Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Testimonials_splide', {
        type: 'loop',
        perPage: 3, // Default for larger screens
        autoplay: true,
        interval: 2000, // Delay between slides (in milliseconds, e.g., 5000ms = 5 seconds)
        breakpoints: {
            600: { // Mobile view (you can adjust this value as needed)
                perPage: 1, // Show 1 item on mobile
            },
        },
    }).mount();
});
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', function () {
      const product = this.getAttribute('data-product');
      document.querySelector('#services').value = product;
    });
  });
  
  const complaintBtn = document.getElementById('complaintBtn');
  const enquiryForm = document.getElementById('enquiryForm');

  complaintBtn.addEventListener('click', () => {
    enquiryForm.style.display = enquiryForm.style.display === 'block' ? 'none' : 'block';
  });

  // Close form when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target !== complaintBtn && !enquiryForm.contains(event.target)) {
      enquiryForm.style.display = 'none';
    }
  });

// data form in google sheet
let url='https://script.google.com/macros/s/AKfycbzgTw9iVoEkmoGtp_B86Cx4ZB6GlPAZC8rO0wQUwkvn_J_GxtRBJeLE5Inc9iz4M-Y7/exec';
let Form=document.querySelector('#form');
Form.addEventListener("submit",(e)=>{
    e.target.btn.innerHTML="Submitting.."
    let formData=new FormData(Form);
    fetch(url,{
        method:"POST",
        body:formData
    }).then((res)=>res.text())
    .then((finalres)=>{
        e.target.btn.innerHTML="Submit"
    })
    e.preventDefault();
})
