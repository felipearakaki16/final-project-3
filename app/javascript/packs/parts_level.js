const content_level = { 
  'Level 1': [
    {
      header: '<h1>Introduction</h1>',
      text: "Hello, welcome to this Flexbox game! I guess if you are here it's because you already know CSS basics. If you don't know probably you will not understand a lot of stuff, sooo... Please, check CSS basics before moving on! It's like teaching someone to crack an egg without teaching him or her how to cook one.",
      example: ""
    },
    {
      header: '<h1>Introduction</h1><h3>How it works</h3>',
      text: "All you have to do it's write the right commands that we are gonna ask you. In this module we are learning flexbox, if you try to use a different command it will not pass that stage. Even if the position of the element is correct.",
      example: ""
    },
    {
      header: '<h1>Introduction</h1><h3>First of all</h3>',
      text: "First of all, let's explain why flexbox is so used!  \nInside display property in CSS, there are values that already change the position of elements, such as Block (which is default when creating a div tag), Inline (default for tags img, a, and strong), amongst others.",
      example: "<div class='example'><p>This is a container ↝</p>\n <div class='block'>This is a div with default 'display: block'</div>And this -> <i class='fas fa-hand-spock i'></i> is a i tag with default 'display: inline'</div>"
    },
    {
      header: '<h1>Introduction</h1>',
      text: "Those properties have a default behaviour which influences their position, however, as you already know, there is a CSS property named position which it's posible to explicitly modify its position. It is even possible to reproduce flex positions through the position property absolute (to the parent container) and relative (to children elements), however we would have to define their position using top, bottom, left or right properties, besides setting their specific size. This difficults a responsiveness approach. ",
      example: `<div class='example'>
      <h3>Card using position</h3>
      <div class="showVsCode">
        <div class='card-example-position'>
        <img src="/game_images/mario-bros-question-block.png">
          <div class='card-example-position-infos'>
            <h2>Product name</h2>
            <p>Product description with <strong>relevant info</strong> only.</p>
          </div>
        </div>
        <div class="box-codes">
          <div>
            <button class="btn-html">HTML</button><button class="btn-css">CSS</button>
          </div>
          <div class="html-code">
            <pre><code class="language-markup">
&lt;div class="card-example-position"&gt;
  &lt;img src="/game_images/mario-bros-question-block.png"&gt;
  &lt;div class="card-example-position-infos"&gt;
    &lt;h2&gt;Product name&lt;/h2&gt;
    &lt;p&gt;Product description with &lt;strong&gt;relevant info&lt;/strong&gt; only.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code></pre>
          </div>
          <div class="css-code disable">
            <pre><code class="language-css">
.card-example-position {
  overflow: hidden;
  height: 120px;
  min-width: 500px;
  background: white;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  position: relative;
  color: black;
}

.card-example-position img {
  position: absolute;
  left: 0;
  height: 100%;
  width: 120px;
  object-fit: cover;
}

.card-example-position h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.card-example-position p {
  font-size: 12px;
  line-height: 1.4;
  opacity: .7;
  margin-bottom: 0;
  margin-top: 8px;
}

.card-example-position .card-example-position-infos {
  padding: 16px;
  position: absolute;
  text-align: left;
  left: 120px;
  top: 20px;
}
            </code></pre>
          </div>
        </div>
      </div>
      <h3>Card using flex</h3>
      <div class="showVsCode">
        <div class='card-example-flex'>
        <img src="/game_images/mario-bros-question-block.png">
          <div class='card-example-flex-infos'>
            <h2>Product name</h2>
            <p>Product description with <strong>relevant info</strong> only.</p>
          </div>
        </div>
        <div class="box-codes">
          <div>
            <button class="btn-html-flex">HTML</button><button class="btn-css-flex">CSS</button>
          </div>
          <div class="html-code-flex">
            <pre><code class="language-markup">
&lt;div class="card-example-flex"&gt;
  &lt;img src="/game_images/mario-bros-question-block.png"&gt;
  &lt;div class="card-example-flex-infos"&gt;
    &lt;h2&gt;Product name&lt;/h2&gt;
    &lt;p&gt;Product description with &lt;strong&gt;relevant info&lt;/strong&gt; only.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code></pre>
          </div>
          <div class="css-code-flex disable">
            <pre><code class="language-css">
.card-example-flex {
  overflow: hidden;
  height: 120px;
  max-width: 500px;
  background: white;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  text-align: left;
  color: black;
}

.card-example-flex img {
  height: 100%;
  width: 120px;
  object-fit: cover;
}

.card-example-flex h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.card-example-flex p {
  font-size: 12px;
  line-height: 1.4;
  opacity: .7;
  margin-bottom: 0;
  margin-top: 8px;
}

.card-example-flex .card-example-flex-infos {
  padding: 16px;
}
            </code></pre>
          </div>
        </div>
      </div>
    </div>`,
    },
    {
      header: "<h1>Introduction</h1>",
      text: "One thing that is important to keep in mind is that flexbox position elements in an unidimensinal way, that is, it works only in one dimension at time, being a row or a column. To more complex bi-dimensional treatment, we recommend, after mastering flexbox, to dive into Grid! ",
      example: `<div class='grid-flex'>
      <div class="ex-flex-grid">
        <h3>Flexbox example</h3>
        <div class="flexbox-example">
          <div class="cards-example">
            <div class='card-box'>Card</div>
            <div class='card-box'>Card</div>
            <div class='card-box'>Card</div>
          </div>
          <div class="another-cards-example">
            <div class="card-box">Card</div>
            <div class="card-box">Card</div>
            <div class="card-box">Card</div>
          </div>
        </div>
      </div>
      <div class="ex-flex-grid">
        <h3>Grid Example</h3>
        <div class="grid-example">
          <div class="card-grid">Card</div>
          <div class='column-example'>
            <div class="card-grid">Card</div>
            <div class="card-grid">Card</div>
            <div class="card-grid">Card</div>
          </div>
          <div class="row-example">
            <div class="card-grid">Card</div>
            <div class="card-grid">Card</div>
            <div class="card-grid">Card</div>
          </div>
        </div>
      </div>
    </div>`
    },
    {
      header: "<h1>Introduction</h1>",
      text: "Flexbox goal is to position elements inside its containers, spaces in which they are contained, that is, to organize elements by using flex properties, in which many times you apply on the parent to set the behaviour you want in direct children.",
      example: `<div class="example">
          <p><strong class="red">Red</strong> it's the parent of <strong class="blue">blue</strong> and <strong class="blue">blue</strong> is a child of <strong class="red">red</strong>;</p>
          <p><strong class="blue">Blue</strong> it's the parent of <strong class="green">green elements</strong> and <strong class="green">green elements</strong> are all direct children of <strong class="blue">blue</strong>;</p>
          <p><strong class="red">Red</strong> it's not the parent of <strong class="green">green elements</strong> like <strong class="green">green elements</strong> also are not direct children of <strong class="red">red</strong></p>
          <div class="showVsCode">
            <div class="grandpa">
              <div class="father">
                <div class="sons"></div>
                <div class="sons"></div>
                <div class="sons"></div>
              </div>
            </div>
            <div>
              <div class="box-codes">
                <h3>HTML</h3>
                <div class="html-code-flex">
                  <pre><code class="language-markup">
&lt;div class="grandpa"&gt;
  &lt;div class="father"&gt;
    &lt;div class="sons"&gt;&lt;/div&gt;
    &lt;div class="sons"&gt;&lt;/div&gt;
    &lt;div class="sons"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
                  </code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>`
    },
    {
      header: "",
      text: `Well, let's start!
      First of all, let's learn how to use flexbox by adding properties to the parent to modify their children.`,
      example: "",
      start: true
    },
    {
      header: "<h1 class='actual-lvl'>Level 1</h1>",
      text: "Wow, what a mess! Let's begin by telling the parent element that we want 'display: flex;', then you will automatically see that their children will be positioned inline. If you didn't set width before they will squeeze to fit. \n Hint: In each line of code, always finish with a semicolon. ",
      example: '',
      exercise: true,
      before: `.navbar-ex {
  padding: 10px;
  height: 4.5rem;
  border-bottom: 1px solid #4B4C9D;`,
      after: `}
.navbar-ex ul {
  list-style: none;
}
.navbar-ex a {
  color: white;
}
.navbar-ex a:hover {
  color: rgb(204, 204, 204);
  text-decoration: none;
}
.navbar-ex .logo {
  height: 100%;
}`,
      code: `<div class="navbar-ex">
  <img class="logo" src="/game_images/pacman-logo.png">
  <ul>
    <li><a href="#">HOME</a></li>
    <li><a href="#">ABOUT</a></li>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">CONTACT</a></li>
    <li><a href="#">GALLERY</a></li>
    <li><a href="#">TEAM</a></li>
  </ul>
</div>`
    }
  ],
  'Level 2': [],
}

module.exports = { content_level }