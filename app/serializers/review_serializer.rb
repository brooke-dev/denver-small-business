class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :comment, :user_id
  has_one :user
  has_one :business_post
end
