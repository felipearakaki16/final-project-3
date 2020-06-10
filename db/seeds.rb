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

UserRecord.destroy_all

puts 'Creating 6 users records'
user_record1 = UserRecord.new("created_at": "2019-06-09 21:19:00", "completed_at": "2019-06-10 21:19:00", "level_id": 1, "user_id": 1)
user_record1.save!
user_record2 = UserRecord.new("created_at": "2019-07-09 21:19:00", "completed_at": "2019-07-10 21:19:00", "level_id": 2, "user_id": 1)
user_record2.save!
user_record3 = UserRecord.new("created_at": "2019-08-09 21:19:00", "completed_at": nil, "level_id": 3, "user_id": 1)
user_record3.save!
user_record4 = UserRecord.new("created_at": "2019-01-09 21:19:00", "completed_at": "2019-01-10 21:19:00", "level_id": 1, "user_id": 2)
user_record4.save!
user_record5 = UserRecord.new("created_at": "2019-02-09 21:19:00", "completed_at": "2019-02-10 21:19:00", "level_id": 2, "user_id": 2)
user_record5.save!
user_record6 = UserRecord.new("created_at": "2019-03-09 21:19:00", "completed_at": "2019-03-10 21:19:00", "level_id": 3, "user_id": 2)
user_record6.save!
puts 'Six users records created'

