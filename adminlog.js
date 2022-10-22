function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x =!"121212") {
      alert("Invalid key");
      return false;
    }
  }