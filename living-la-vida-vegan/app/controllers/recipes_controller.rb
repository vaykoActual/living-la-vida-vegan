class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show, :all_recipes]

  # GET /recipes
  def index
    @user = User.find(params[:user_id])
    @recipes = Recipe.where(user_id: @user_id).all

    render json: @recipes, include: :user, status: :ok
  end

  # GET /recipes/1
  def show
    @user = User.find(params[:user_id])
    @recipe = Recipe.where(user_id: @user_id)
    # render json: @recipes, include: :user, status: :ok
    render json: @recipe, include: :comments
  end

  # POST /recipes
  def create
    @user = User.find(params[:user_id])
    @recipe = Recipe.where(user_id: @user_id).new(recipe_params)

    if @recipe.save
      render json: @recipe, status: :created
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  # PUT /recipes/1/comments/1
  def add_comment
    @recipes = Recipe.find(params[:id])
    @comment = Comment.find(params[:flavor_id])

    @recipe.comments << @comment

    render json: @recipe, include: :comments
  end


  def all_recipes
    @recipes = Recipe.all

    render json: @recipes 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def recipe_params
      params.require(:recipe).permit(:upload_photo, :recipe_name, :description, :prep_time, :cook_time, :ingredients, :instructions, :source)
    end
end
