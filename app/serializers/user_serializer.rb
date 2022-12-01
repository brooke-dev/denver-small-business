class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password, :business_owner, :zip_code, :email
  has_many :business_posts
  has_many :reviews
end
