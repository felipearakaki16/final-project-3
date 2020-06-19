Level.destroy_all
  # puts 'Creating level'
  # level1 = Level.new(id: 1, name: "Level 1", description: "Display", correction: ["display: *flex;"], difficulty: "easy")
  # level1.save!
  # puts 'Finished'
puts 'Creating level'
level2 = Level.new(id: 2, name: "Level 2", description: "Flex inside flex", correction: ["display: *flex;"], difficulty: "easy")
level1.save!
puts 'Finished'

puts 'Creating example'
landing_page = Example.new(id: 1, level: level1, target: "querySelector('.navbar-ex')")
landing_page.content = '<div class="navbar-ex">
<img class="logo" src="/images/pacman-logo.png">
<ul>
  <li><a href="#" onclick="event.preventDefault">HOME</a></li>
  <li><a href="#" onclick="event.preventDefault">ABOUT</a></li>
  <li><a href="#" onclick="event.preventDefault">FAQ</a></li>
  <li><a href="#" onclick="event.preventDefault">CONTACT</a></li>
  <li><a href="#" onclick="event.preventDefault">GALLERY</a></li>
  <li><a href="#" onclick="event.preventDefault">TEAM</a></li>
</ul>
</div>
<div id="content-wrap">
<div class="banner-ex">
  <div class="banner-content">
    <h1>Waka Waka Waka</h1>
    <h2>- Pacman</h2>
  </div>
</div>
<div style="text-align: center; padding: 20px 0;">
  <h3>Ghosts</h3>
  <div>
    <div class="card-ghosts">
      <img src="/images/Blinky.png" alt="Blinky">
      <h3>Blinky</h3>
      <p>The leader of the gang. Blinky gives direct chase to Pac-Man. </p>
    </div>
    <div class="card-ghosts">
      <img src="/images/Pinky.png" alt="Pinky">
      <h3>Pinky</h3>
      <p>Pinky try to position in front of Pac-Man</p>
    </div>
    <div class="card-ghosts">
      <img src="/images/Inky.png" alt="Inky">
      <h3>Inky</h3>
      <p>Kinda unpredictable. He will switch between chasing Pac-man, jump in front of him or just walk aleatory. </p>
    </div>
    <div class="card-ghosts">
      <img src="/images/Clyde.png" alt="Clyde">
      <h3>Clyde</h3>
      <p>The sweet and silly one. Sometimes will chase the Pac-man and sometimes will flee from him. </p>
    </div>
  </div>
</div>
</div>
<footer>
<div>
<h3>Social Media</h3>
<div>
  <a href="#" onclick="event.preventDefault"><img class="icon" src="/images/facebook.png"></a>
  <a href="#" onclick="event.preventDefault"><img class="icon" src="/images/instagram.png"></a>
  <a href="#" onclick="event.preventDefault"><img class="icon" src="/images/linkedin.png"></a>
  <a href="#" onclick="event.preventDefault"><img class="icon" src="/images/twitter.png"></a>
</div>
</div>
<img class="pacman" src="/images/Pacman.png">
<div>
<h3>Important links</h3>
<ul>
  <li><a href="#" onclick="event.preventDefault">a link</a></li>
  <li><a href="#" onclick="event.preventDefault">another link</a></li>
  <li><a href="#" onclick="event.preventDefault">one more link</a></li>
  <li><a href="#" onclick="event.preventDefault">last link</a></li>
</ul>
</div>
</footer>'
landing_page.save
puts 'Finished'
puts 'Creating example'
landing_page = Example.new(id: 2, level: level2, target: "querySelector('.navbar-ex ul')")
landing_page.content = '<div class="navbar-ex d-flex">
<img class="logo" src="/images/pacman-logo.png">
<ul>
  <li><a href="#" onclick="event.preventDefault">HOME</a></li>
  <li><a href="#" onclick="event.preventDefault">ABOUT</a></li>
  <li><a href="#" onclick="event.preventDefault">FAQ</a></li>
  <li><a href="#" onclick="event.preventDefault">CONTACT</a></li>
  <li><a href="#" onclick="event.preventDefault">GALLERY</a></li>
  <li><a href="#" onclick="event.preventDefault">TEAM</a></li>
</ul>
</div>
<div id="content-wrap">
<div class="banner-ex">
  <div class="banner-content">
    <h1>Waka Waka Waka</h1>
    <h2>- Pacman</h2>
  </div>
</div>
<div style="text-align: center; padding: 20px 0;">
  <h3>Ghosts</h3>
  <div>
    <div class="card-ghosts">
      <img src="/images/Blinky.png" alt="Blinky">
      <h3>Blinky</h3>
      <p>The leader of the gang. Blinky gives direct chase to Pac-Man. </p>
    </div>
    <div class="card-ghosts">
      <img src="/images/Pinky.png" alt="Pinky">
      <h3>Pinky</h3>
      <p>Pinky try to position in front of Pac-Man</p>
    </div>
    <div class="card-ghosts">
      <img src="/images/Inky.png" alt="Inky">
      <h3>Inky</h3>
      <p>Kinda unpredictable. He will switch between chasing Pac-man, jump in front of him or just walk aleatory. </p>
    </div>
    <div class="card-ghosts">
      <img src="/images/Clyde.png" alt="Clyde">
      <h3>Clyde</h3>
      <p>The sweet and silly one. Sometimes will chase the Pac-man and sometimes will flee from him. </p>
    </div>
  </div>
</div>
</div>
<footer>
<div>
<h3>Social Media</h3>
<div>
  <a href="#" onclick="event.preventDefault"><img class="icon" src="/images/facebook.png"></a>
  <a href="#" onclick="event.preventDefault"><img class="icon" src="/images/instagram.png"></a>
  <a href="#" onclick="event.preventDefault"><img class="icon" src="/images/linkedin.png"></a>
  <a href="#" onclick="event.preventDefault"><img class="icon" src="/images/twitter.png"></a>
</div>
</div>
<img class="pacman" src="/images/Pacman.png">
<div>
<h3>Important links</h3>
<ul>
  <li><a href="#" onclick="event.preventDefault">a link</a></li>
  <li><a href="#" onclick="event.preventDefault">another link</a></li>
  <li><a href="#" onclick="event.preventDefault">one more link</a></li>
  <li><a href="#" onclick="event.preventDefault">last link</a></li>
</ul>
</div>
</footer>'
landing_page.save
puts 'Finished'
