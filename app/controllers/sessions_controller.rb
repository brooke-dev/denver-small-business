class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

  # # SignUp
  # def password=(new_password)
  #   salt = BCrypt::Engine::generate_salt
  #   self.password_digest = BCrypt::Engine::has_secret(new_password, salt)
  # end

  # def authenticate(password)
  #   salt = password_digest[0...28]
  #   return nil unless Bcrypt::Engine::hash_secret(password, salt) == self.password_digest 
  #   self
  # end


    #login
    def create 
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: {errors: ['Invalid username or password']}, status: :unauthorized
      end
    end

    #logout
    def destroy
        session.delete :user_id
        head :no_content
    end
end
