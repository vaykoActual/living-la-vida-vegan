class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  # before_action :authorize_request, except: :create

  # # GET /comments
  def index
    @recipe = Recipe.find(params[:recipe_id])
    @comments = Comment.where(recipe_id: @recipe.id)

    render json: @comments, include: {recipe: {include: :user}}, status: :ok 
  end

  # # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id if user_signed_in?

    if @comment.save
      # redirect_to dashboard_path, flash: {success: 'Comment was successfully created!'} 
      render json: @comment, status: :created
    else
      # redirect_to dashboard_path, flash: {danger: 'Comment was not saved!'} 
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content)
      # params.fetch(:comment, {})
    end

    # def recipe_params
    #   params.require(:recipe).permit(:upload_photo, :recipe_name, :description, :prep_time, :cook_time, :ingredients, :instructions, :source)
    # end
end
