Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: redirect('/wishes')
  
  get 'wishes', to: 'site#index'
  get "wishes/:wish_id/complete_reviews" , to: "site#index"
  get "categories", to: "site#index"
  resource :users
  
  # api
  namespace :api do
    namespace :v1 do
      resources :wishes do
        resources :complete_reviews
      end
      resources :categories
      get 'wishes/dones' => 'wishes#dones'
    end
  end
end
