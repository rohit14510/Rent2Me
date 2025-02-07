document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// once again design card
document.addEventListener("DOMContentLoaded", function () {
  // Select Elements
  let cardRating = document.getElementById("rating");
  let cardCapacity = document.getElementById("capacity");
  let cardDuration = document.getElementById("duration");
  let cardPrice = document.getElementById("price"); // Card Price

  let modalRating = document.getElementById("modal-rating");
  let modalCapacity = document.getElementById("modal-capacity");
  let modalDuration = document.getElementById("modal-duration");
  let modalTotalPrice = document.getElementById("modal-total-price"); // Modal Price

  function calculatePrice() {
      let basePrice = 6500;
      let extraPrice = 0;

      // Rating Based Price
      if (cardRating.value == "4") {
          basePrice = 7000;
      } else if (cardRating.value == "5") {
          basePrice = 7500;
      }

      // Capacity Based Price
      if (cardCapacity.value == "3ton") {
          extraPrice += 2000;
      } else if (cardCapacity.value == "2ton") {
          extraPrice += 4000;
      }

      // Duration Based Price
      if (cardDuration.value == "4") {
          extraPrice += 1000;
      } else if (cardDuration.value == "5") {
          extraPrice += 2000;
      }

      // Final Price
      let finalPrice = basePrice + extraPrice;
      cardPrice.innerText = `₹${finalPrice}`;

      // Update Modal Price (with Security Deposit)
      let totalPrice = finalPrice + 2000;
      modalTotalPrice.innerText = `₹${totalPrice}`;
  }

  // Card dropdowns change hone par price update ho
  cardRating.addEventListener("change", calculatePrice);
  cardCapacity.addEventListener("change", calculatePrice);
  cardDuration.addEventListener("change", calculatePrice);

  // Modal Open hone par values copy ho
  function updateModalValues() {
      modalRating.value = cardRating.value;
      modalCapacity.value = cardCapacity.value;
      modalDuration.value = cardDuration.value;
      calculatePrice(); // Modal price update kare
  }

  document.querySelector("[data-bs-target='#bookingFormModal1']").addEventListener("click", updateModalValues);
});



// Splide Slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 2000,
  }).mount();
});
// Product-splide
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#Product-splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 2000,
  }).mount();
});
// Testimonials_splide Slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#Testimonials_splide", {
    type: "loop",
    perPage: 3, // Default for larger screens
    autoplay: true,
    interval: 2000, // Delay between slides (in milliseconds, e.g., 5000ms = 5 seconds)
    breakpoints: {
      600: {
        // Mobile view (you can adjust this value as needed)
        perPage: 1, // Show 1 item on mobile
      },
    },
  }).mount();
});
document.querySelectorAll(".quick-view").forEach((button) => {
  button.addEventListener("click", function () {
    const product = this.getAttribute("data-product");
    document.querySelector("#services").value = product;
  });
});

const complaintBtn = document.getElementById("complaintBtn");
const enquiryForm = document.getElementById("enquiryForm");

complaintBtn.addEventListener("click", () => {
  enquiryForm.style.display =
    enquiryForm.style.display === "block" ? "none" : "block";
});

// Close form when clicking outside
window.addEventListener("click", (event) => {
  if (event.target !== complaintBtn && !enquiryForm.contains(event.target)) {
    enquiryForm.style.display = "none";
  }
});

let url =
  "https://script.google.com/macros/s/AKfycbzgTw9iVoEkmoGtp_B86Cx4ZB6GlPAZC8rO0wQUwkvn_J_GxtRBJeLE5Inc9iz4M-Y7/exec";

// Form IDs ka array banaye
let formIds = [
  "acform1",
  "acform2",
  "acform3",
  "acform4",
  "acform5",
  "acform6",
  "acform7",
  "acform8",
  "heaterform1",
  "heaterform2",
  "heaterform3",
  "heaterform4",
  "heaterform5",
  "heaterform6",
  "gesform1",
  "gesform2",
  "gesform3",
];

// Har form ID ke liye loop lagaye
formIds.forEach((formId) => {
  let form = document.getElementById(formId);

  if (form) {
    // Check karen ki form exist karta hai ya nahi
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Page reload ko roke
      let submitBtn = form.querySelector('[name="btn"]');
      submitBtn.innerHTML = "Submitting...";

      let formData = new FormData(form);
      formData.append("formId", formId); // Unique form ID ko bhi bheje

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.text())
        .then((response) => {
          submitBtn.innerHTML = "Submit";
          alert(`Form  Submitted Successfully!`);
          form.reset(); // Form ko reset kare
        })
        .catch((error) => {
          submitBtn.innerHTML = "Submit";
          alert("Error: " + error);
        });
    });
  }
});
