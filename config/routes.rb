Rails.application.routes.draw do
  # get "/:username", to: "users#show", :as => "user"
  # get "/:id", to: "users#show", :as => "user", :id => :username
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :user_records, only: %i(create update)
  resources :levels, only: %i(show index) do
    resources :examples, only: %i(show)
  end

  resources :users, only: %i(show)
end
