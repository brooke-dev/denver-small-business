class User < ApplicationRecord
    # hashed password with bycrypt
    has_secure_password

    validates :password, length: { minimum: 8 }
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :username, :password, :first_name, :last_name, :zip_code, :email, presence: true
end
