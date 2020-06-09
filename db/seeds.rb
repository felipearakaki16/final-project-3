# puts 'Creating 6 levels'
# level1 = Level.new("name": "level 1", "dificulty": "easy")
# level1.save!
# level2 = Level.new("name": "level 2", "dificulty": "easy")
# level2.save!
# level3 = Level.new("name": "level 3", "dificulty": "medium")
# level3.save!
# level4 = Level.new("name": "level 4", "dificulty": "medium")
# level4.save!
# level5 = Level.new("name": "level 5", "dificulty": "hard")
# level5.save!
# level6 = Level.new("name": "level 6", "dificulty": "hard")
# level6.save!
# puts 'Finished creating 6 levels'


# puts 'Creating 6 users'
# user1 = User.new("username": "player1", "email": "player1@test.com", "password": "123456")
# user1.save!
# user2 = User.new("username": "player2", "email": "player2@test.com", "password": "123456")
# user2.save!
# user3 = User.new("username": "player3", "email": "player3@test.com", "password": "123456")
# user3.save!
# user4 = User.new("username": "player4", "email": "player4@test.com", "password": "123456")
# user4.save!
# user5 = User.new("username": "player5", "email": "player5@test.com", "password": "123456")
# user5.save!
# user6 = User.new("username": "player6", "email": "player6@test.com", "password": "123456")
# user6.save!
# puts 'Six users created'

puts 'Creating 6 users records'
user_record1 = UserRecord.new("created_at": "Tuesday, 09 of June in 2019, 19:54 h", "completed_at": "", "level_id": 1, "user_id": 1)
user_record1.save!
user_record2 = UserRecord.new("created_at": "Wednesday, 10 of June in 2019, 13:54 h", "completed_at": "", "level_id": 2, "user_id": 2)
user_record2.save!
user_record3 = UserRecord.new("created_at": "Thursday, 11 of June in 2019, 10:54 h", "completed_at": "", "level_id": 3, "user_id": 2)
user_record3.save!
user_record4 = UserRecord.new("created_at": "Friday, 12 of June in 2019, 3:54 h", "completed_at": "", "level_id": 4, "user_id": 5)
user_record4.save!
user_record5 = UserRecord.new("created_at": "Saturday, 13 of June in 2019, 19:54 h", "completed_at": "", "level_id": 5, "user_id": 4)
user_record5.save!
user_record6 = UserRecord.new("created_at": "Sunday, 14 of June in 2019, 19:54 h", "completed_at": "", "level_id": 6, "user_id": 1)
user_record6.save!
puts 'Six users records created'