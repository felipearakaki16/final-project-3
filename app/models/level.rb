class Level < ApplicationRecord
  has_many :user_records, dependent: :destroy
  has_many :users, through: :user_records

  validates :name, presence: true
  validates :dificulty, presence: true
end
