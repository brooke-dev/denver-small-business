class BusinessPostsController < ApplicationController
    
    # GET All business posts at '/business_posts'
    def index
        businessPosts= BusinessPost.all 
        render json: businessPosts, status: :ok
    end

    # GET Shows 1 business post by`/business_posts/:id`

    def show
        businessPost = BusinessPost.find(params[:id])
        render json: businessPost, status: :ok
    end

end
