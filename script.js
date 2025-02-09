document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
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
  "https://script.google.com/macros/s/AKfycbyHP4s82qhHAsMiZ8k7fUYlCMX_K5JSgWRW_AS4FJIG8Ybdhz8sfIV2nZdtewYxocaH/exec";

// Form IDs ka array banaye
let formIds = [
  "acform1",
  "acform2",
  "heaterform1",
  "gesform1",
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
