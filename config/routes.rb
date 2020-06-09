Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :user_records, only: %i(index show create update destroy) do
    resources :levels, only: %i(show)
  end
  resources :levels, only: %i(index)
end


# root GET    /                                                                  pages#home
# user_record_levels GET    /user_records/:user_record_id/levels(.:format)       levels#index
#  user_record_level GET    /user_records/:user_record_id/levels/:id(.:format)   levels#show
#       user_records POST   /user_records(.:format)                              user_records#create
#        user_record GET    /user_records/:id(.:format)                          user_records#show
#                    PATCH  /user_records/:id(.:format)                          user_records#update
#                    PUT    /user_records/:id(.:format)                          user_records#update
#                    DELETE /user_records/:id(.:format)                          user_records#destroy