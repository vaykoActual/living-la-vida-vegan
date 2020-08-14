Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/comments/:comment_id/recipes/:id', to: 'recipes#add_comment' 
  get '/recipes', to: 'recipes#all_recipes'

  # resources :recipes, only: [:index]

  resources :users do
    resources :recipes do
      resources :comments, only: [:create, :update, :destroy]
  end
end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
