class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :first_name, :last_name, :username, :password, :business_owner, :zip_code, :email, :avatar
  has_many :business_posts
  has_many :reviews

  def avatar
    rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
  end

end
