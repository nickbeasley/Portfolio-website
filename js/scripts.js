function handleFormSubmit(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the values of the form fields
  let form = event.target;
  let name = form.elements.name.value;
  let email = form.elements.email.value;

  // do something with the form values, such as send them to a server
  // for processing or validation
  // ...

  // reset the form fields
  form.reset();
}

let form = document.getElementById("contact-form");
form.addEventListener("submit", handleFormSubmit);
