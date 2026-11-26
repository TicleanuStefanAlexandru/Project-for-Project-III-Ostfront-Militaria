const headerTemplate = `
<header class="main-header">
  <div class="header-row-top">
    <a href="mainPage.html">
      <div class="logo">
        <img src="assets/images/ostfrontLogo.png" alt="Ostfront Militaria Logo">
      </div>
    </a>
    <div class="search-container">
      <input type="text" placeholder="Search militaria, armor, collectibles...">
      <button>Search</button>
    </div>

    <div class="auth-links">
      <a href="register.html">Register</a>
      <a href="auth.html">Log In</a>
    </div>
  </div>

  <nav class="header-row-bottom">
    <div style="width: 120px;"></div> 

    <ul class="nav-links mid-links">
      <li><a href="auctionList.html">Store Catalog</a></li>
      <li><a href="#" class="lucky-btn">Featured Collection</a></li>
      <li><a href="#">Cart (0)</a></li>
    </ul>

    <ul class="nav-links">
      <li><a href="listItem.html">Sell With Us</a></li>
    </ul>
  </nav>
</header>
`;

if (document.getElementById('header-placeholder')) {
  document.getElementById('header-placeholder').innerHTML = headerTemplate;
}
