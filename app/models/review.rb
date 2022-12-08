class Review < ApplicationRecord
  belongs_to :user
  belongs_to :business_post

  validates :comment, :title, :rating, presence: true
  validates :comment, length: { in: 1..200 }

end
