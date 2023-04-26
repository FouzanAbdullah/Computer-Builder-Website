const navBarHtml = `
  <!-- Navigation Bar -->
  <div class="nav-bar">
    <!-- Row 1 -->
    <div class="nav-section1">
      <a href="index.html"><img src="src/companyname.png" alt="companyname" style="max-width: 300px;" /></a>
      <a href="login.html" class="right-align">Login</a>
      <a href="register.html" class="right-align">Sign Up</a>
    </div>

    <!-- Row 2 -->
    <div class="nav-section2">
      <a href="products.html">Browse Products</a>
      <a href="build.html">PC Builder</a>
      <a href="featured.html">Featured Builds</a>
      <a href="#">Special Offers</a>
      <!-- <a href="#" class="right-align">Put a search bar here</a> -->
      <button type="submit" class="right-align">Search</button>
      <input type="text" placeholder="Search for hardware..." class="right-align">
    </div>
  </div>
`;

var renderFooter = function () {
  var body = document.getElementsByTagName("BODY")[0];
  body.setAttribute("style", "height: auto; width: auto; min-height: 100%; min-height: 100vh; overflow-y: scroll; margin: 0; padding: 0;");

  var footer = document.createElement("footer");
  var p = document.createElement("p");
  p.classList.add("text-white", "text-center");
  p.setAttribute("style", "padding:1rem 1rem 0.5rem 0;margin: 0; position:fixed; bottom:0;right:0!important;justify-content: right;color:#555555 !important");
  p.innerHTML = "COSC 3P94 • Group 12 • &copy 2023";
  footer.appendChild(p);

  document.getElementsByTagName("BODY")[0].appendChild(footer);
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.insertAdjacentHTML("afterbegin", navBarHtml);
  renderFooter();
});


