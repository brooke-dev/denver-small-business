class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: :create

    # Creating a user(signup) backend, using bang(!) to raise error if not correctly put in. 
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #keep logged-in
    def show
        current_user = User.find(session[:user_id])
        render json: current_user, status: :ok
        
        # include: ['plant_posts','reviews.plant_post'], status: :ok
    end

    private

    # Strong params
    def user_params
        params.permit(:first_name, :last_name, :username, :password, :business_owner, :email, :zip_code, :password_confirmation)
    end

end
