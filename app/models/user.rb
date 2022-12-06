class User < ApplicationRecord
    has_many :business_posts, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :reviewed_business_posts, :through => :reviews, :source => :business_post
    # Image Upload
    has_one_attached :avatar
  
    # hashed password with bycrypt
    has_secure_password

    # For password validation we only want it to validate the presence when we are creating the password, not when we are editing a user. 
    validates :password, length: { minimum: 8 }, :on => :create
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :username, :first_name, :last_name, :zip_code, :email, presence: true
    
    # Image Upload
    validate :acceptable_image

    def acceptable_image
        return unless avatar.attached?

        unless avatar.byte_size <= 3.megabyte
            errors.add(:main_image, "image size too large")
        end

        acceptable_types = ["image/jpeg", "image/png"]
        unless acceptable_types.include?(avatar.content_type)
            errors.add(:avatar, "must be a JPEG or PNG")
        end

    end

end
