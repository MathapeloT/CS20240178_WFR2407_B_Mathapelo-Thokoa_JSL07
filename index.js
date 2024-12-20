document.addEventListener("DOMContentLoaded", function () {
    const cardForm = document.getElementById("cardForm");
    const modal = document.getElementById("modal");
    const certificateContent = document.getElementById("certificateContent");
    const closeModal = document.querySelector(".close");
    const generateButton = document.getElementById("generateCertificate");
//Adds 'generateButton
  
    // Hide the modal initially
    modal.style.display = "none";
  
    //cardForm.addEventListener("submit", function (e) {
      //e.preventDefault();

      generateButton.addEventListener("click", function(submission) {
      submission.preventDefault();  
  
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById("studentName");
      const personalMessageInput = document.getElementById("congratulatoryMessage");
      const courseNameInput = document.getElementById("courseName"); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === "" || personalMessage.trim() === "") {
        alert("Please fill in all fields");
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = ` 
      <h1>Certificate of Achievement</h1>
      <p>This is to certify that</p>
      <h2>${studentName}</h2>
      <p>is well on his/her way to completing</p>
      <h2>${courseName}</h2>
      <p>with legendary perseverance and world-class bad-assery for never giving up 😎</p>
      <img src="images/logo.png" alt="Codespace logo" width="180" height="70">
      <p>${congratulatorymessage}</p>
    `;
    
      //  Display the modal
      modal.style.display = "block";
  
      // Clear the form inputs
      studentNameInput.value = "";
      personalMessageInput.value = "";
      if(courseNameInput) courseNameInput.value = "";
    });
  
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });
  