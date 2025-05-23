document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayout();

  // Add any custom JavaScript code here...
});

function loadLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

// const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
      <!-- HEADER -->

      <header>
        <div class="header-content">
	        <div class="header-title">amy's home</div>
        </div>
      </header>

      <div class="topbar">
        <marquee>
            <i>no matter how scary the world becomes, don't ever give up.</i>
        </marquee>
      </div>
        
      <!-- LEFT SIDEBAR -->

      <aside class="left-sidebar">
        
        <!-- NAVIGATION -->
        <nav>
          <div class="sidebar-title">Navigation <img src="imagens/rainbowstar2.gif" alt=""></div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre.html">Sobre</a></li>
            <li><a href="/page2">Page 2</a></li>
            <li><a href="/page3">Page 3</a></li>
        	<li>
              	<details>
                <summary>Submenu</summary>
                <ul>
                  <li><a href="/page-a">Page A</a></li>
                  <li><a href="/page-b">Page B</a></li>
                  <li><a href="/page-c">Page C</a></li>
                  <li><a href="/page-d">Page D</a></li>
                  <li><a href="/page-e">Page E</a></li>
                </ul>
                </details>
            </li>
          </ul>
        </nav>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="/">List</a></li>
            <li>List</li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <marquee>
          	<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </marquee>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/112/1000/400">
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </aside>
	  
      <!-- RIGHT SIDEBAR -->

      <aside class="right-sidebar">
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="/">List</a></li>
            <li>List</li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <marquee>
          	<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </marquee>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/112/1000/400">
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </aside>
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
      <!-- FOOTER -->

      <footer>
            <div>Footer Text. <a href="/">Link.</a></div>
      </footer>`;
}

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

    /* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */

        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
            el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

// function getNesting() {
//   const numberOfSlashes = window.location.pathname.split("/").length - 1;
//   if (numberOfSlashes == 1) return "./";
//   return "../".repeat(numberOfSlashes - 1);
// }
