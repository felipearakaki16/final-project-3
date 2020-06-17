class Level < ApplicationRecord
  has_many :user_records, dependent: :destroy
  has_many :users, through: :user_records
  has_many :examples, dependent: :destroy

  validates :name, presence: true
  validates :difficulty, presence: true
end
