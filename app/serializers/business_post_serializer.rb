class BusinessPostSerializer < ActiveModel::Serializer
  attributes :id, :business_name, :business_category, :location, :website, :favorites, :image
  has_one :user
end
