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

document.addEventListener("DOMContentLoaded", function () {
    document.body.insertAdjacentHTML("afterbegin", navBarHtml);
    // document.body.insertAdjacentHTML("afterend", footerHTML);
    // renderFooter();
  });