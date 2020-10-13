
let alreadySubmitted = false;

function appendModal(nameValue, topicValue, messageValue) {
 if (alreadySubmitted) {
  document.getElementById("nameField").remove();
  document.getElementById("topicField").remove();
  document.getElementById("messageField").remove();
 
 }
 
  // Add name text to modal
  const nameField = document.createElement("p");
  nameField.setAttribute("id", "nameField");
  nameField.textContent = nameValue;
  document.getElementById("nameDiv").appendChild(nameField);

  // Add topic text to modal
const topicField = document.createElement ("p");
topicField.setAttribute("id","topicField");
topicField.textContent = topicValue;
document.getElementById("topicDiv").appendChild(topicField);
  // Add message text to modal

  const messageField = document.createElement ("p");
  messageField.setAttribute("id","messageField");
  messageField.textContent = messageValue;
  document.getElementById("messageDiv").appendChild(messageField);

 
alreadySubmitted = true;
} 


// Add event listener


const submitButton = document.getElementById("contactFormSubmit");
submitButton.addEventListener ("click", function (event){
  //capture form details

appendModal ("text 1","text 2", "text 3");

});








