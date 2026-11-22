document.addEventListener("DOMContentLoaded", () => {
  // 1. Travel Quiz Handler (quiz.html)
  const quizForm = document.getElementById("cameroon-quiz");
  const quizResult = document.getElementById("quiz-result");

  if (quizForm && quizResult) {
    quizForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const answers = [
        quizForm.elements["q1"].value,
        quizForm.elements["q2"].value,
        quizForm.elements["q3"].value
      ];

      const counts = { coast: 0, mountains: 0, culture: 0 };
      answers.forEach((ans) => {
        counts[ans]++;
      });

      let title = "";
      let description = "";

      if (counts.coast >= counts.mountains && counts.coast >= counts.culture) {
        title = "Your Match: Kribi & The Atlantic Coast (South & Littoral Regions)";
        description = "You belong where the rainforest meets the ocean! Enjoy Black Kribi Beach, Chute de Lobe, and fresh coastal seafood.";
      } else if (counts.mountains >= counts.culture) {
        title = "Your Match: Mount Fako, Manenguba & The Highlands";
        description = "Adventure and rich Grassfields heritage await you! Explore volcanic peaks, the Twin Lakes of Manenguba, and royal traditions.";
      } else {
        title = "Your Match: Mfoumban Palace & Cultural Heritage Route";
        description = "You are drawn to living history and artistry! Discover royal palaces, city monuments, and vibrant cultural traditions.";
      }

      quizResult.innerHTML = `
        <h3>${title}</h3>
        <p style="margin: 0.6rem 0 1rem;">${description}</p>
        <a href="contact.html" class="btn-3d">Plan This Trip &rarr;</a>
      `;
      quizResult.style.display = "block";
    });
  }

  // 2. Contact Form Confirmation Handler (contact.html)
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const visitorName = document.getElementById("full-name").value.trim();
      const visitorEmail = document.getElementById("email").value.trim();
      const selectedInterest = document.getElementById("interest").value;

      formFeedback.innerHTML = `
        <h3 style="color: var(--cam-green); margin-bottom: 0.4rem;">Merci, ${visitorName}! Your enquiry has been received.</h3>
        <p>We have logged your interest in <strong>${selectedInterest}</strong>. A confirmation copy and travel response will be sent to <strong>${visitorEmail}</strong> within 24 hours.</p>
      `;
      formFeedback.style.display = "block";
      contactForm.reset();
    });
  }
});