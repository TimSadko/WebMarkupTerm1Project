function menu_side_bar_open() {
    document.getElementById("menu_side").style.display = "inline-flex";
  }
  
  function menu_side_bar_close() {
    document.getElementById("menu_side").style.display = "none";
  }

  function go_to_login_page() {
      window.open("login.html",'_self');
  }

  function go_to_home_page() {
      window.open("index.html",'_self');
  }

  function go_to_register_page() {
      window.open("register.html",'_self');
  }

  function go_to_paleontology_page() {
      window.open("side_paleontology.html",'_self');
  }