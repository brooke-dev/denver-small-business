class BusinessPost < ApplicationRecord
  belongs_to :user
  has_many :reviews, dependent: :destroy
  has_many :reviewed_users, :through => :reviews, :source => :reviewed_users

  validates :business_name, :business_category, :location, :website, :favorites, :image, :user_id, presence: true
  
end
