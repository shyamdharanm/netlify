
  function target() {
    let form = document.getElementById('HTMLFORM');
    let firstname = form.elements['firstname'].value;
    let middlename = form.elements['middlename'].value;
    let lastname = form.elements['lastname'].value;
    var email = form.elements['email'].value;
    console.log('First Name:', firstname);
    console.log('Middle Name:', middlename);
    console.log('Last Name:', lastname);
    console.log('Email:', email);
  }
