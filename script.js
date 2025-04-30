const enquiryButton = document.querySelector('.enquiry-button');
const enquiryForm = document.querySelector('.enquiry-form');

enquiryButton.addEventListener('mouseenter', () => {
    enquiryForm.style.display = 'block';
});

enquiryButton.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!enquiryForm.matches(':hover')) {
            enquiryForm.style.display = 'none';
        }
    }, 200);
});

enquiryForm.addEventListener('mouseleave', () => {
    enquiryForm.style.display = 'none';
});
enquiryForm.addEventListener('mouseenter', () => {
    enquiryForm.style.display = 'block';
});

//facebook
document.addEventListener("DOMContentLoaded", function () {
    const facebookIcon = document.querySelector('.social-icons a[href="#"] img[alt="Facebook"]');
  
    if (facebookIcon) {
      facebookIcon.parentElement.addEventListener("click", function (event) {
        event.preventDefault(); // prevent default <a> behavior
        window.open("https://www.facebook.com/login", "_blank");
      });
    }
  });

  //twitter
  document.addEventListener("DOMContentLoaded", function () {
    const twitterIcon = document.querySelector('.social-icons a[href="#"] img[alt="Twitter"]');
  
    if (twitterIcon) {
      twitterIcon.parentElement.addEventListener("click", function (event) {
        event.preventDefault(); // prevent default <a> behavior
        window.open("https://twitter.com/login", "_blank");
      });
    }
  });
  
  //apply online
  document.addEventListener("DOMContentLoaded", function () {
    const applyBtn = document.querySelector(".apply-button");
    const popup = document.getElementById("enquiry-popup");
    const closeBtn = document.getElementById("close-popup");
  
    applyBtn.addEventListener("click", function () {
      popup.style.display = "flex";
    });
  
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  
    // Optional: Close popup when clicking outside the box
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  
  // Highlight active nav link
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        // Remove 'active' from all links
        document.querySelectorAll("#nav a").forEach(el => el.classList.remove("active"));
        // Add 'active' to the clicked link
        this.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("courses-toggle");
    const menu = document.getElementById("courses-menu");
  
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });
  
    // Optional: click outside to close
    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
      }
    });
  });


//apply form
const modal = document.getElementById("formModal");
const closeBtn = document.querySelector(".close-btn");
const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault(); // prevent default anchor behavior
    modal.style.display = "block";
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// JavaScript for form submission
document.addEventListener('DOMContentLoaded', function() {
  const subscribeForm = document.querySelector('.subscribe-form');
  const emailInput = document.querySelector('.email-input');
  
  subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if(emailInput.value.trim() === '') {
          alert('Please enter your email address');
          return;
      }
      
      // Here you would typically send the email to your server
      alert('Thank you for subscribing!');
      emailInput.value = '';
  });
  
  // Add click event to button since it's not in a proper form
  document.querySelector('.submit-btn').addEventListener('click', function() {
    window.location.href = "rjtechnology@gmail.com";


    
    
    
    
    
    
    
    // if(emailInput.value.trim() === '') {
      //     alert('Please enter your email address');
      //     return;
      // }
      
      // // Here you would typically send the email to your server
      // alert('Thank you for subscribing!');
      // emailInput.value = '';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const subscribeButton = document.querySelector(".submit-btn");
  const emailInput = document.querySelector(".email-input");

  subscribeButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent any form submission behavior
      const userEmail = emailInput.value.trim();

      if (userEmail) {
          const subject = encodeURIComponent("Subscription Request");
          const body = encodeURIComponent(`Hello,\n\nPlease subscribe me to your newsletter.\n\nEmail: ${userEmail}`);
          window.location.href = `mailto:rjtechnology@gmail.com?subject=${subject}&body=${body}`;
      } else {
          alert("Please enter your email address.");
      }
  });
});

