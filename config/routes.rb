Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :user_records, only: %i(index create update) do
    resources :levels, only: %i(show)
  end
  resources :levels, only: %i(index)

  get '/level/1', to: 'levels#level1'
  get '/level/2', to: 'levels#level2'
  get '/level/3', to: 'levels#level3'
end


# root GET    /                                                                         pages#home
# user_record_level GET    /user_records/:user_record_id/levels/:id(.:format)           levels#show
# user_records GET    /user_records(.:format)                                           user_records#index
#              POST   /user_records(.:format)                                           user_records#create
#  user_record GET    /user_records/:id(.:format)                                       user_records#show
#              PATCH  /user_records/:id(.:format)                                       user_records#update
#              PUT    /user_records/:id(.:format)                                       user_records#update
#              DELETE /user_records/:id(.:format)                                       user_records#destroy
#       levels GET    /levels(.:format)                                                 levels#index
#      level_1 GET    /level/1(.:format)                                                levels#level1
#      level_2 GET    /level/2(.:format)                                                levels#level2