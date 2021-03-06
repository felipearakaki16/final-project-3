class User < ApplicationRecord
  extend FriendlyId
  friendly_id :username, use: :slugged
  # after_create :create_user_records
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :user_records, dependent: :destroy
  has_many :levels, through: :user_records
  has_one_attached :photo

  validates :username, presence: true, uniqueness: true

end

