class User < ApplicationRecord
    has_many :business_posts, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :reviewed_business_posts, :through => :reviews, :source => :business_post
    

    # hashed password with bycrypt
    has_secure_password

    # For password validation we only want it to validate the presence when we are creating the password, not when we are editing a user. 
    validates :password, length: { minimum: 8 }, :on => :create
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :username, :first_name, :last_name, :zip_code, :email, presence: true
end
