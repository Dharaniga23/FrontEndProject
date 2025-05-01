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
  
  //instagram
  document.getElementById("instagram-link").addEventListener("click", function (e) {
    e.preventDefault(); // Prevents the default "#" behavior
    window.open("https://www.instagram.com/accounts/login/", "_blank");
  });
  
  //linkedin
  document.getElementById("linkedin-link").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.open("https://www.linkedin.com/login", "_blank"); // Open LinkedIn login in a new tab
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

document.getElementById("facebook-link").addEventListener("click", function (e) {
  // Optional: track clicks or show a message
  console.log("Redirecting to Facebook login...");
  // No need to preventDefault unless you're doing something custom
});

document.getElementById("twitter-link").addEventListener("click", function () {
  console.log("Redirecting to Twitter login...");
});

document.getElementById("instagram-link").addEventListener("click", function () {
  console.log("Redirecting to Instagram login...");
});

document.getElementById("linkedin-link").addEventListener("click", function () {
  console.log("Redirecting to LinkedIn login...");
});

document.getElementById("gmail-button").addEventListener("click", function () {
  window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
});

// Frontend Course Page Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get the frontend link elements
  const frontendLinks = document.querySelectorAll('#frontend-link');
  
  // Get the frontend course container
  const frontendCourse = document.getElementById('frontendCourse');
  
  // Add click event listeners to all frontend links
  frontendLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Show the frontend course container
          frontendCourse.classList.add('active');
          
          // Scroll to the frontend course container
          frontendCourse.scrollIntoView({ behavior: 'smooth' });
      });
  });
  
  // Optional: Add event listener for the "Back" button if you want to add one
  // This would hide the course page and show the main content again
  const addBackButton = () => {
      // Create a back button element
      const backButton = document.createElement('button');
      backButton.textContent = 'Back to Homepage';
      backButton.className = 'back-button';
      backButton.style.cssText = 'margin: 20px 0; padding: 8px 16px; background-color: #333; color: white; border: none; border-radius: 5px; cursor: pointer;';
      
      // Insert it at the top of the course container
      frontendCourse.insertBefore(backButton, frontendCourse.firstChild);
      
      // Add click event listener
      backButton.addEventListener('click', function() {
          // Hide the frontend course container
          frontendCourse.classList.remove('active');
      });
  };
  
  // Uncomment the line below if you want to add a back button
  // addBackButton();
});


       


document.addEventListener('DOMContentLoaded', function() {
  // Handle dropdown menu toggle
  const coursesToggle = document.getElementById('courses-toggle');
  const coursesMenu = document.getElementById('courses-menu');
  
  // Toggle dropdown when clicking on Courses
  if(coursesToggle) {
      coursesToggle.addEventListener('click', function(e) {
          e.preventDefault();
          coursesMenu.classList.toggle('show');
      });
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
      if(!e.target.matches('#courses-toggle') && !coursesMenu.contains(e.target)) {
          coursesMenu.classList.remove('show');
      }
  });
  
  // Frontend course page functionality
  const frontendLink = document.getElementById('frontend-link');
  const frontendCourse = document.getElementById('frontendCourse');
  const mainContent = document.querySelectorAll('section');
  
  // Initially hide the frontend course page
  if(frontendCourse) {
      frontendCourse.style.display = 'none';
  }
  
  // Show frontend course page when clicking on Frontend link
  if(frontendLink) {
      frontendLink.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Hide all main sections
          mainContent.forEach(section => {
              section.style.display = 'none';
          });
          
          // Hide dropdown menu
          coursesMenu.classList.remove('show');
          
          // Show frontend course page
          if(frontendCourse) {
              frontendCourse.style.display = 'block';
              // Scroll to the top of the page
              window.scrollTo(0, 0);
          }
      });
  }
  
  // Add back button functionality to return to home page
  const backToHome = document.createElement('button');
  backToHome.textContent = 'Back to Home';
  backToHome.className = 'back-to-home-btn';
  backToHome.style.margin = '20px';
  backToHome.style.padding = '10px 15px';
  backToHome.style.backgroundColor = '#4CAF50';
  backToHome.style.color = 'white';
  backToHome.style.border = 'none';
  backToHome.style.borderRadius = '5px';
  backToHome.style.cursor = 'pointer';
  
  if(frontendCourse) {
      frontendCourse.prepend(backToHome);
  }
  
  backToHome.addEventListener('click', function() {
      // Hide frontend course page
      frontendCourse.style.display = 'none';
      
      // Show all main sections again
      mainContent.forEach(section => {
          section.style.display = '';
      });
  });
  
  // Enquiry popup functionality
  const enquiryButton = document.querySelector('.enquiry-button');
  const enquiryForm = document.querySelector('.enquiry-form');
  
  if(enquiryButton && enquiryForm) {
      enquiryButton.addEventListener('click', function() {
          enquiryForm.classList.toggle('show-form');
      });
      
      // Close when clicking outside
      document.addEventListener('click', function(e) {
          if(!enquiryButton.contains(e.target) && !enquiryForm.contains(e.target)) {
              enquiryForm.classList.remove('show-form');
          }
      });
  }
  
  // Modal popup for Apply Online buttons
  const applyButtons = document.querySelectorAll('.apply-button, .apply-btn');
  const formModal = document.getElementById('formModal');
  const closeBtn = document.querySelector('#formModal .close-btn');
  
  applyButtons.forEach(button => {
      button.addEventListener('click', function() {
          if(formModal) {
              formModal.style.display = 'flex';
          }
      });
  });
  
  if(closeBtn && formModal) {
      closeBtn.addEventListener('click', function() {
          formModal.style.display = 'none';
      });
      
      // Close when clicking outside
      window.addEventListener('click', function(e) {
          if(e.target === formModal) {
              formModal.style.display = 'none';
          }
      });
  }
  
  // Quick Enquiry popup
  const enquiryPopup = document.getElementById('enquiry-popup');
  const closePopup = document.getElementById('close-popup');
  
  if(closePopup && enquiryPopup) {
      closePopup.addEventListener('click', function() {
          enquiryPopup.style.display = 'none';
      });
  }
});