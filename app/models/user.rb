class User < ApplicationRecord
  # after_create :create_user_records
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :user_records, dependent: :destroy
  has_many :levels, through: :user_records
  has_one_attached :photo

  validates :username, presence: true

end

