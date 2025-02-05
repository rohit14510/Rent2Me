document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Dynamic Price Calculation

document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".modal form");
  const cardPriceElements = document.querySelectorAll(".CardPrice");

  const priceData = {
    form1: {
      prices: {
        3: { 3: 6500, 4: 7500, 5: 8500, 6: 9500, 7: 10500, 8: 10500, 1: 10500 },
        4: {
          3: 7500,
          4: 8500,
          5: 9500,
          6: 10500,
          7: 11500,
          8: 11500,
          1: 11500,
        },
        5: {
          3: 8500,
          4: 9500,
          5: 10500,
          6: 11500,
          7: 12500,
          8: 12500,
          1: 12500,
        },
      },
      securityDeposit: 1500,
    },
    form2: {
      prices: {
        3: { 3: 6500, 4: 7500, 5: 8500, 6: 9500, 7: 10500, 8: 10500, 1: 10500 },
        4: {
          3: 7500,
          4: 8500,
          5: 9500,
          6: 10500,
          7: 11500,
          8: 11500,
          1: 11500,
        },
        5: {
          3: 8500,
          4: 9500,
          5: 10500,
          6: 11500,
          7: 12500,
          8: 12500,
          1: 12500,
        },
      },
      securityDeposit: 1500,
    },
    form3: {
      prices: {
        3: { 3: 6500, 4: 7500, 5: 8500, 6: 9500, 7: 10500, 8: 10500, 1: 10500 },
        4: {
          3: 7500,
          4: 8500,
          5: 9500,
          6: 10500,
          7: 11500,
          8: 11500,
          1: 11500,
        },
        5: {
          3: 8500,
          4: 9500,
          5: 10500,
          6: 11500,
          7: 12500,
          8: 12500,
          1: 12500,
        },
      },
      securityDeposit: 1500,
    },
    form4: {
      prices: {
        3: {
          3: 7500,
          4: 8500,
          5: 9500,
          6: 10500,
          7: 11500,
          8: 11500,
          1: 12000,
        },
        4: {
          3: 8500,
          4: 9500,
          5: 10500,
          6: 11500,
          7: 12500,
          8: 12500,
          1: 13000,
        },
        5: {
          3: 9500,
          4: 10500,
          5: 11500,
          6: 12500,
          7: 13500,
          8: 13500,
          1: 14000,
        },
      },
      securityDeposit: 2000,
    },
    form5: {
      prices: {
        3: {
          3: 11000,
          4: 12000,
          5: 13000,
          6: 14000,
          7: 15000,
          8: 16000,
          1: 16000,
        },
        4: {
          3: 12000,
          4: 13000,
          5: 14000,
          6: 15000,
          7: 16000,
          8: 17000,
          1: 17000,
        },
        5: {
          3: 13000,
          4: 14000,
          5: 15000,
          6: 16000,
          7: 17000,
          8: 18000,
          1: 18000,
        },
      },
      securityDeposit: 1500,
    },
    form6: {
      prices: {
        3: {
          3: 11000,
          4: 12000,
          5: 13000,
          6: 14000,
          7: 15000,
          8: 16000,
          1: 16000,
        },
        4: {
          3: 12000,
          4: 13000,
          5: 14000,
          6: 15000,
          7: 16000,
          8: 17000,
          1: 17000,
        },
        5: {
          3: 13000,
          4: 14000,
          5: 15000,
          6: 16000,
          7: 17000,
          8: 18000,
          1: 18000,
        },
      },
      securityDeposit: 1500,
    },
    form7: {
      prices: {
        3: {
          3: 11000,
          4: 12000,
          5: 13000,
          6: 14000,
          7: 15000,
          8: 16000,
          1: 16000,
        },
        4: {
          3: 12000,
          4: 13000,
          5: 14000,
          6: 15000,
          7: 16000,
          8: 17000,
          1: 17000,
        },
        5: {
          3: 13000,
          4: 14000,
          5: 15000,
          6: 16000,
          7: 17000,
          8: 18000,
          1: 18000,
        },
      },
      securityDeposit: 1500,
    },
    form8: {
      prices: {
        3: {
          3: 12000,
          4: 13000,
          5: 14000,
          6: 15000,
          7: 16000,
          8: 17000,
          1: 17000,
        },
        4: {
          3: 13000,
          4: 14000,
          5: 15000,
          6: 16000,
          7: 17000,
          8: 18000,
          1: 18000,
        },
        5: {
          3: 14000,
          4: 15000,
          5: 16000,
          6: 17000,
          7: 18000,
          8: 19000,
          1: 19000,
        },
      },
      securityDeposit: 2000,
    },
    heater_form1: {
      prices: {
        7: { 1: 3899 },
        9: { 1: 3899 },
        11: { 1: 4899 },
        13: { 1: 5899 },
      },
      securityDeposit: 1500,
    },
    heater_form2: {
      prices: {
        7: { 1: 3899 },
        9: { 1: 3899 },
        11: { 1: 4899 },
        13: { 1: 5899 },
      },
      securityDeposit: 1500,
    },
    heater_form3: {
      prices: {
        7: { 1: 3899 },
        9: { 1: 3899 },
        11: { 1: 4899 },
        13: { 1: 5899 },
      },
      securityDeposit: 1500,
    },
    heater_form4: {
      prices: {
        7: { 1: 3899 },
        9: { 1: 3899 },
        11: { 1: 4899 },
        13: { 1: 5899 },
      },
      securityDeposit: 1500,
    },
    heater_form5: {
      prices: {
        7: { 1: 3899 },
        9: { 1: 3899 },
        11: { 1: 4899 },
        13: { 1: 5899 },
      },
      securityDeposit: 1500,
    },
    heater_form6: {
      prices: {
        7: { 1: 3899 },
        9: { 1: 3899 },
        11: { 1: 4899 },
        13: { 1: 5899 },
      },
      securityDeposit: 1500,
    },
    Geyser_form1: {
      prices: {
        25: { 1: 3800 },
      },
      securityDeposit: 1000,
    },
    Geyser_form2: {
      prices: {
        20: { 1: 3500 },
      },
      securityDeposit: 1000,
    },
    Geyser_form3: {
      prices: {
        15: { 1: 3000 },
      },
      securityDeposit: 1000,
    },
  };

  forms.forEach((form) => {
    const modal = form.closest(".modal");
    const formId = modal.getAttribute("data-form") || "form1";
    const ratingField = form.querySelector('[name="RentedProduct"]');
    const durationField = form.querySelector('[name="Duration"]');
    const priceField = form.querySelector('[name="Price"]');
    const totalPriceField = form.querySelector('[name="TotalPrice"]');

    const cardPriceElement = document.querySelector(
      `.CardPrice[data-form='${formId}']`
    );

    function calculatePrice() {
      const rating = parseInt(ratingField.value);
      const duration = parseInt(durationField.value);

      if (
        priceData[formId] &&
        priceData[formId].prices[rating] &&
        priceData[formId].prices[rating][duration]
      ) {
        const basePrice = priceData[formId].prices[rating][duration];
        const securityDeposit = priceData[formId].securityDeposit;

        priceField.value = `₹${basePrice}`;
        totalPriceField.value = `₹${basePrice + securityDeposit}`;

        if (cardPriceElement) {
          cardPriceElement.textContent = `₹${basePrice} /Seasonal`;
        }
      } else {
        priceField.value = "₹0";
        totalPriceField.value = "₹0";

        if (cardPriceElement) {
          cardPriceElement.textContent = "₹0 /Seasonal";
        }
      }
    }

    ratingField.addEventListener("change", calculatePrice);
    durationField.addEventListener("change", calculatePrice);

    modal.addEventListener("shown.bs.modal", calculatePrice);

    calculatePrice();
  });
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
