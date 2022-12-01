class BusinessPostSerializer < ActiveModel::Serializer
  attributes :id, :business_name, :business_category, :location, :website, :favorites, :image
  has_one :user
  has_many :reviews

  # Custom method below allows mapping through each post's reviews, to show THAT reviews user. 
  def reviews
    self.object.reviews.map do |rev|
      {review: rev, user: {username: rev.user.username}}
    end
  end
end
