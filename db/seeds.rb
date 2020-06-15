# Level.destroy_all
# puts 'Creating level'
# level1 = Level.new(name: "Level 1", dificulty: "easy")
# level1.save!
# puts 'Finished'

puts 'Updating examples'
landing_page = Example.first
landing_page.content = '<div class="navbar-ex">
<%= image_tag  "pacman-logo.png", class: "logo" %>
<ul>
  <li><a href="#">HOME</a></li>
  <li><a href="#">ABOUT</a></li>
  <li><a href="#">FAQ</a></li>
  <li><a href="#">CONTACT</a></li>
  <li><a href="#">GALLERY</a></li>
  <li><a href="#">TEAM</a></li>
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
      <%= image_tag "Blinky.png" %>
      <h3>Blinky</h3>
      <p>The leader of the gang. Blinky gives direct chase to Pac-Man. </p>
    </div>
    <div class="card-ghosts">
      <%= image_tag "Pinky.png" %>
      <h3>Pinky</h3>
      <p>Pinky try to position in front of Pac-Man</p>
    </div>
    <div class="card-ghosts">
      <%= image_tag "Inky.png" %>
      <h3>Inky</h3>
      <p>Kinda unpredictable. He will switch between chasing Pac-man, jump in front of him or just walk aleatory. </p>
    </div>
    <div class="card-ghosts">
      <%= image_tag "Clyde.png" %>
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
  <a href="#"><%= image_tag "facebook.png", class: "icon" %></a>
  <a href="#"><%= image_tag "instagram.png", class: "icon" %></a>
  <a href="#"><%= image_tag "linkedin.png", class: "icon" %></a>
  <a href="#"><%= image_tag "twitter.png", class: "icon" %></a>
</div>
</div>
<%= image_tag  "Pacman.png", class: "pacman" %>
<div>
<h3>Important links</h3>
<ul>
  <li><a href="#">a link</a></li>
  <li><a href="#">another link</a></li>
  <li><a href="#">one more link</a></li>
  <li><a href="#">last link</a></li>
</ul>
</div>
</footer>'
landing_page.save
puts 'Finished'


# User.destroy_all

#<User id: 2, email: "1234445@test.com", created_at: "2020-06-09 19:18:47", updated_at: "2020-06-09 19:18:47", username: "1234">,
 #<User id: 3, email: "player1@test.com", created_at: "2020-06-09 20:07:39", updated_at: "2020-06-09 20:07:39", username: "player1">,
 #<User id: 4, email: "player2@test.com", created_at: "2020-06-09 20:07:40", updated_at: "2020-06-09 20:07:40", username: "player2">,
 #<User id: 5, email: "player3@test.com", created_at: "2020-06-09 20:07:40", updated_at: "2020-06-09 20:07:40", username: "player3">,
 #<User id: 6, email: "player4@test.com", created_at: "2020-06-09 20:07:40", updated_at: "2020-06-09 20:07:40", username: "player4">,
 #<User id: 7, email: "player5@test.com", created_at: "2020-06-09 20:07:40", updated_at: "2020-06-09 20:07:40", username: "player5">,
 #<User id: 8, email: "player6@test.com", created_at: "2020-06-09 20:07:41", updated_at: "2020-06-09 20:07:41", username: "player6">,
 #<User id: 9, email: "eueueueueu@tester.com", created_at: "2020-06-09 21:17:09", updated_at: "2020-06-09 21:17:18", username: "eueueueueu">,
 #<User id: 10, email: "testetesteteste@email.com", created_at: "2020-06-09 21:19:00", updated_at: "2020-06-09 21:27:53", username: "eumesmo">,
 #<User id: 1, email: "tester1@tester.com", created_at: "2020-06-08 21:27:04", updated_at: "2020-06-10 14:08:01", username: "first player">]
