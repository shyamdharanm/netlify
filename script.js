<script>
  function target() {
    var form = document.getElementById('HTMLFORM');
    var firstname = form.elements['firstname'].value;
    var middlename = form.elements['middlename'].value;
    const lastname = form.elements['lastname'].value;
    var email = form.elements['email'].value;
    console.log('First Name:', firstname);
    console.log('Middle Name:', middlename);
    console.log('Last Name:', lastname);
    console.log('Email:', email);
  }
</script>