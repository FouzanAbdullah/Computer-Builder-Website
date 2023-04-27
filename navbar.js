const navBarHtml = `
  <!-- Navigation Bar -->
  <div class="nav-bar">
    <!-- Row 1 -->
    <div class="nav-section1">
      <a href="index.html"><img src="src/companyname.png" alt="companyname" style="max-width: 300px;" /></a>
      <a href="login.html" class="right-align">Login</a>
      <a href="register.html" class="right-align">Sign Up</a>
      <a href="contact.html" class="right-align">Contact</a>
    </div>

    <!-- Row 2 -->
    <div class="nav-section2">
      <a href="products.html">Browse Products</a>
      <a href="build.html">PC Builder</a>
      <a href="featured.html">Featured Builds</a>
      <!-- <a href="#" class="right-align">Put a search bar here</a> -->
      <button type="submit" class="right-align">Search</button>
      <input type="text" placeholder="Search for hardware..." class="right-align">
    </div>
  </div>
`;


const footerHTML=`
<div class="footer-container">
        <div class="footer">
            <div class="footer-heading footer-1">
                <h2>About Us</h2>
                <a href="#">Blog</a>
                <a href="#">Retailers</a>
                <a href="#">Customers</a>
                <a href="#">Investors</a>
                <a href="#">Terms of Service</a>
            </div>
            <div class="footer-heading footer-2">
                <h2>Contact Us</h2>
                <a href="#">Careers</a>
                <a href="#">Support</a>
                <a href="contact.html">Contact</a>
                <a href="#">Sponsorships</a>
            </div>
            <div class="footer-heading footer-3">
                <h2>Social Media</h2>
                <a href="https://github.com/FouzanAbdullah/COSC-3P94-Stage-2">GitHub</a>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Youtube</a>
            </div>
            <div class="footer-email-form">
                <h2>Join our newsletter</h2>
                <input type="email" placeholder="Enter your email address" id="footer-email">
                <input type="submit" value="Sign Up" id="footer-email-btn">
            </div>
        </div>
    </div>
`;

document.addEventListener("DOMContentLoaded", function () {
  document.body.insertAdjacentHTML("afterbegin", navBarHtml);
  document.body.insertAdjacentHTML("afterend", footerHTML);
});


