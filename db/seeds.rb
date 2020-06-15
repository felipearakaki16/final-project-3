# Level.destroy_all
# puts 'Creating level'
# level1 = Level.new(name: "Level 1", correction: [/display: *flex;/], dificulty: "easy")
# level1.save!
# puts 'Finished'

puts 'Updating examples'
landing_page = Example.first
landing_page.target = "querySelector('.navbar-ex')"
# landing_page.content = '<div class="navbar-ex">
# <img class="logo" src="/assets/pacman-logo-49d24e69e4ade7bf3a9bef84d5223bc4276ca6bb31b1b987a536750c398d0813.png">
# <ul>
#   <li><a href="#">HOME</a></li>
#   <li><a href="#">ABOUT</a></li>
#   <li><a href="#">FAQ</a></li>
#   <li><a href="#">CONTACT</a></li>
#   <li><a href="#">GALLERY</a></li>
#   <li><a href="#">TEAM</a></li>
# </ul>
# </div>

# <div id="content-wrap">
# <div class="banner-ex">
#   <div class="banner-content">
#     <h1>Waka Waka Waka</h1>
#     <h2>- Pacman</h2>
#   </div>
# </div>
# <div style="text-align: center; padding: 20px 0;">
#   <h3>Ghosts</h3>
#   <div>
#     <div class="card-ghosts">
#       <img src="/assets/Blinky-9a35b9231db015a452a0d9de0f5f0f58c59dff35651af6dc979fe931c18d2ff1.png" alt="Blinky">
#       <h3>Blinky</h3>
#       <p>The leader of the gang. Blinky gives direct chase to Pac-Man. </p>
#     </div>
#     <div class="card-ghosts">
#       <img src="/assets/Pinky-00d83fae900b0777cc6d89207b7089596999571d833a6514d5d252c149331471.png" alt="Pinky">
#       <h3>Pinky</h3>
#       <p>Pinky try to position in front of Pac-Man</p>
#     </div>
#     <div class="card-ghosts">
#       <img src="/assets/Inky-1a9c3c467ac1141fe007367881a5a46ed69e49699ab6a538c74b2717d2f84561.png" alt="Inky">
#       <h3>Inky</h3>
#       <p>Kinda unpredictable. He will switch between chasing Pac-man, jump in front of him or just walk aleatory. </p>
#     </div>
#     <div class="card-ghosts">
#       <img src="/assets/Clyde-4aa7b050be4e16d58d9d739a795940b2182b19ab1379576f6c10c839144af1bb.png" alt="Clyde">
#       <h3>Clyde</h3>
#       <p>The sweet and silly one. Sometimes will chase the Pac-man and sometimes will flee from him. </p>
#     </div>
#   </div>
# </div>
# </div>

# <footer>
# <div>
# <h3>Social Media</h3>
# <div>
#   <a href="#"><img class="icon" src="/assets/facebook-5f9c56f1bb22dd293f0ac5134edf0746b21a1eaf0ffde7bd5fe5c5dec5d87fdb.png"></a>
#   <a href="#"><img class="icon" src="/assets/instagram-e9f637539e4d265df37be53e3b9fc18e93a473ca556502951e59a6065748c1a2.png"></a>
#   <a href="#"><img class="icon" src="/assets/linkedin-dadd0c64e1d423e81c4906faf2bb20e4d4a42548278d4c09f0ad896e280ce4e6.png"></a>
#   <a href="#"><img class="icon" src="/assets/twitter-d29d58898cce582f01ecb19241c1d46df0c456e56fd53f0482209436f23070f1.png"></a>
# </div>
# </div>
# <img class="pacman" src="/assets/Pacman-f55e492a0a9f086eee0eeb03d1288eb83b23faae54a734e8396360b6ae90dc9e.png">
# <div>
# <h3>Important links</h3>
# <ul>
#   <li><a href="#">a link</a></li>
#   <li><a href="#">another link</a></li>
#   <li><a href="#">one more link</a></li>
#   <li><a href="#">last link</a></li>
# </ul>
# </div>
# </footer>'
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
