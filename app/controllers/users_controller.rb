class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: :create

    #POST Creating a user(signup) backend, using bang(!) to raise error if not correctly put in. /user/:id
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #SHOW keep logged-in /user/:id
    def show
        current_user = User.find(session[:user_id])
        render json: current_user, status: :ok
        # include: ['business_posts','reviews.business_posts'], status: :ok
    end

    #PATCH :update /user/:id
    def update
        user= User.find(params[:id])
        user.update!(user_params)
        render json: user
    end

    private

    # Strong params
    def user_params
        params.permit(:first_name, :last_name, :username, :password, :business_owner, :email, :zip_code, :password_confirmation)
    end

end
