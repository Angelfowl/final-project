var MODEl = (function () {
  var homeContent = `<section class="home-page">
  <div class="hero">
    <img src="images/home-hero.jpg" alt="seats" />
    <div class="overlay"></div>

    <div class="callout">
      <h1>Header goes here</h1>
      <h3>Less important text goes here</h3>
      <div class="paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          aliquid minus nemo sed est.
        </p>
      </div>
      <div class="read-more">Read More</div>
    </div>
  </div>

  <div class="owner-info">
    <div class="owner-paragraph">
      <p>
        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam rem aperiam eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Iste natus error sit voluptatem accusantium
        doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo”
      </p>
    </div>
    <div class="owner-signature">
      <h6>John Smith</h6>
      <p>Corporation CEO, books author.</p>
    </div>
  </div>

  <div class="upcoming-events">
    <div class="upcoming-title">
      <h3>UPCOMING EVENTS:</h3>
    </div>

    <div class="home-blog-contain">
      <div class="event-container">
        <div class="home-date">
          <h2>06</h2>
          <h3>JUN</h3>
        </div>
        <div class="home-blog-post">
          <h5>Sed et persipiatis unde omnis iste</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid temporibus quos
          </p>
        </div>
      </div>

      <div class="event-container">
        <div class="home-date">
          <h2>30</h2>
          <h3>JUL</h3>
        </div>
        <div class="home-blog-post">
          <h5>Sed et persipiatis unde omnis iste</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid temporibus quos
          </p>
        </div>
      </div>

      <div class="event-container">
        <div class="home-date">
          <h2>30</h2>
          <h3>AUG</h3>
        </div>
        <div class="home-blog-post">
          <h5>Sed et persipiatis unde omnis iste</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid temporibus quos
          </p>
        </div>
      </div>

      <div class="event-container">
        <div class="home-date">
          <h2>23</h2>
          <h3>NOV</h3>
        </div>
        <div class="home-blog-post">
          <h5>Sed et persipiatis unde omnis iste</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid temporibus quos
          </p>
        </div>
      </div>

      <div class="event-container">
        <div class="home-date">
          <h2>23</h2>
          <h3>DEC</h3>
        </div>
        <div class="home-blog-post">
          <h5>Sed et persipiatis unde omnis iste</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid temporibus quos
          </p>
        </div>
      </div>
    </div>
  </div>
</section>`;
  var aboutContent = ` <section class="about-page">
  <div class="hero-img">
    <img src="images/about.jpg" alt="trays of sweets" />
    <div class="overlay"></div>
  </div>

  <div class="about-title">
    <h2>OUR HISTORY:</h2>
  </div>

  <div class="about-paragraph">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>`;
  var galleryContent = `      <section class="gallery-page">
  <div class="gallery-title">
    <h1>GALLERY:</h1>
  </div>

  <div class="gallery-container">
    <a href="#" id="gallery1"
      ><img
        class="galleryPic1"
        src="images/gallery/1.png"
        alt="food picture"
    /></a>
    <a href="#" id="gallery2"
      ><img class="galleryPic2" src="images/gallery/2.png" alt="crowd"
    /></a>
    <a href="#" id="gallery3"
      ><img
        class="galleryPic3"
        src="images/gallery/3.png"
        alt="presentator speaking to crowd"
    /></a>
    <a href="#" id="gallery4"
      ><img
        class="galleryPic4"
        src="images/gallery/4.png"
        alt="banquet hall"
    /></a>
    <a href="#" id="gallery5"
      ><img
        class="galleryPic5"
        src="images/gallery/5.png"
        alt="Toronto party"
    /></a>
  </div>
</section>`;
  var gallery1Content = `<section class="gallery-post">
  <div class="hero-img">
    <img src="images/gallery/1.png" alt="food spread" />
  </div>

  <div class="galleryTitle">
    <h1 style="color: #ffd140">1.</h1>
    <h2 style="color: #ffd140">food festival</h2>
  </div>

  <div class="gallery-content">
    <div class="left-para">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
    </div>
    <div class="right-para">
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
  </div>
</section>`;
  var gallery2Content = `      <section class="gallery-post">
  <div class="hero-img">
    <img src="images/gallery/2.png" alt="concert" />
  </div>

  <div class="galleryTitle">
    <h1 style="color: #ee4367">2.</h1>
    <h2 style="color: #ee4367">dee-jay</h2>
  </div>

  <div class="gallery-content">
    <div class="left-para">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
    </div>
    <div class="right-para">
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
  </div>
</section>`;
  var gallery3Content = `      <section class="gallery-post">
  <div class="hero-img">
    <img src="images/gallery/3.png" alt="speech" />
  </div>

  <div class="galleryTitle">
    <h1 style="color: #08ad69">3.</h1>
    <h2 style="color: #08ad69">speech</h2>
  </div>

  <div class="gallery-content">
    <div class="left-para">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
    </div>
    <div class="right-para">
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
  </div>
</section>`;
  var gallery4Content = `      <section class="gallery-post">
  <div class="hero-img">
    <img src="images/gallery/4.png" alt="banquet" />
  </div>

  <div class="galleryTitle">
    <h1 style="color: #540d6e">4.</h1>
    <h2 style="color: #540d6e">open foodfest</h2>
  </div>

  <div class="gallery-content">
    <div class="left-para">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
    </div>
    <div class="right-para">
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
  </div>
</section>`;
  var gallery5Content = `      <section class="gallery-post">
  <div class="hero-img">
    <img src="images/gallery/5.png" alt="concert" />
  </div>

  <div class="galleryTitle">
    <h1 style="color: #3bceab">5.</h1>
    <h2 style="color: #3bceab">international</h2>
  </div>

  <div class="gallery-content">
    <div class="left-para">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
    </div>
    <div class="right-para">
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
  </div>
</section>`;
  var blogContent = `      <section class="blog-page">
  <div class="blogTitle">
    <h1>BLOG:</h1>
  </div>

  <div class="blog-container">
    <div class="blog-posts">
      <div class="date-mon">
        <h1>06</h1>
        <h2>JUN</h2>
      </div>
      <div class="blog-inner">
        <a href="#" id="blogpost1"
          ><img src="images/blog(1).jpg" alt="typewriter"
        /></a>
        <h5>Sed et persipiatis unde omnis iste</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
      </div>
    </div>

    <div class="blog-posts">
      <div class="date-mon">
        <h1>30</h1>
        <h2>JUL</h2>
      </div>
      <div class="blog-inner">
        <a href="#" id="blogpost2"
          ><img src="images/blog(1).jpg" alt="typewriter"
        /></a>
        <h5>Sed et persipiatis unde omnis iste</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
      </div>
    </div>

    <div class="blog-posts">
      <div class="date-mon">
        <h1>30</h1>
        <h2>AUG</h2>
      </div>
      <div class="blog-inner">
        <a href="#" id="blogpost3"
          ><img src="images/blog(1).jpg" alt="typewriter"
        /></a>
        <h5>Sed et persipiatis unde omnis iste</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
      </div>
    </div>

    <div class="blog-posts">
      <div class="date-mon">
        <h1>23</h1>
        <h2>NOV</h2>
      </div>
      <div class="blog-inner">
        <a href="#" id="blogpost4"
          ><img src="images/blog(1).jpg" alt="typewriter"
        /></a>
        <h5>Sed et persipiatis unde omnis iste</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
      </div>
    </div>

    <div class="blog-posts">
      <div class="date-mon">
        <h1>23</h1>
        <h2>DEC</h2>
      </div>
      <div class="blog-inner">
        <a href="#" id="blogpost5"
          ><img src="images/blog(1).jpg" alt="typewriter"
        /></a>
        <h5>Sed et persipiatis unde omnis iste</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
      </div>
    </div>
  </div>
</section>`;
  var blogpost1Content = `      <section class="blog">
  <div class="blog-hero">
    <div class="blog-img">
      <img src="images/blog1.png" alt="typewriter" />
    </div>
  </div>
  <div class="blog-date-mon">
    <h1>06</h1>
    <h2>JUN</h2>
  </div>

  <div class="blog-section">
    <h4>Header #1:</h4>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </p>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h4>Header #2</h4>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>`;
  var blogpost2Content = `      <section class="blog">
  <div class="blog-hero">
    <div class="blog-img">
      <img src="images/blog1.png" alt="typewriter" />
    </div>
  </div>
  <div class="blog-date-mon">
    <h1>30</h1>
    <h2>JUL</h2>
  </div>

  <div class="blog-section">
    <h4>Header #1:</h4>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </p>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h4>Header #2</h4>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>`;
  var blogpost3Content = `      <section class="blog">
  <div class="blog-hero">
    <div class="blog-img">
      <img src="images/blog1.png" alt="typewriter" />
    </div>
  </div>
  <div class="blog-date-mon">
    <h1>30</h1>
    <h2>AUG</h2>
  </div>

  <div class="blog-section">
    <h4>Header #1:</h4>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </p>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h4>Header #2</h4>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>`;
  var blogpost4Content = `      <section class="blog">
  <div class="blog-hero">
    <div class="blog-img">
      <img src="images/blog1.png" alt="typewriter" />
    </div>
  </div>
  <div class="blog-date-mon">
    <h1>23</h1>
    <h2>NOV</h2>
  </div>

  <div class="blog-section">
    <h4>Header #1:</h4>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </p>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h4>Header #2</h4>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>`;
  var blogpost5Content = `      <section class="blog">
  <div class="blog-hero">
    <div class="blog-img">
      <img src="images/blog1.png" alt="typewriter" />
    </div>
  </div>
  <div class="blog-date-mon">
    <h1>23</h1>
    <h2>DEC</h2>
  </div>

  <div class="blog-section">
    <h4>Header #1:</h4>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </p>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h4>Header #2</h4>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
  </div>
</section>`;
  var contactContent = `<section class="contact-page">
  <div class="contact-title">
    <h2>CONTACT US:</h2>
  </div>

  <div class="contact-contain">
    <div class="contact-left">
      <input type="text" class="text-in" placeholder="Your name..." />
      <input type="text" class="text-in" placeholder="Email Address..." />
      <input type="text" class="text-in" placeholder="Company..." />
      <input type="text" class="message-box" placeholder="Message..." />
      <div class="submitBtn">SEND MESSAGE</div>
    </div>
    <div class="contact-right">
      <img src="images/map.jpg" alt="gps map" />
    </div>
  </div>
</section>`;

//   function initListeners(){
//     $("a").click(function(e){
//         let btnId = e.currentTarget.id;
//         console.log("click " + btnId);
//         MODEl.changePageContent(btnId);
//     })
// }

    var _changePageContent = function(pageName){
      let contentName = pageName + "Content";
      $("#app").html(eval(contentName));
      initListeners();
      


        if (pageName == "home"){
          $("nav").css("position", "fixed")
          $("#nav-holder").addClass("lightNav");
          $("#nav-holder").removeClass("darkNav");
          $(".logo img").attr("src", "images/logo/logo-white.png");
          $(".links a").css("color", "#fff")


        } else {
          $("nav").css("position", "relative")
          $("#nav-holder").addClass("darkNav");
          $("#nav-holder").removeClass("lightNav");
          $(".logo img").attr("src", "images/logo/logo-black.png");
          $(".links a").css("color", "#000")
        
        }

      }
      
        return {
          changePageContent: _changePageContent,
      };

    })();