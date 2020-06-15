class Example < ApplicationRecord
  belongs_to :level

  validates :level, presence: true
end
