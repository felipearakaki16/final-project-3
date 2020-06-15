class Level < ApplicationRecord
  has_many :user_records, dependent: :destroy
  has_many :users, through: :user_records
  has_many :examples

  validates :name, presence: true
  validates :dificulty, presence: true
end
