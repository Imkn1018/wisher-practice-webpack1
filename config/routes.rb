Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: redirect('/wishes')
  get 'wishes', to: 'site#index'
  
  namespace :api do
    namespace :v1 do
      resources :wishes do
        resources :complete_reviews
      end
      get "wishes/dones" => "wishes#dones"
    end
  end
end
