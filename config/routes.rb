Rails.application.routes.draw do
  root 'welcome#index'

  resources :facilities, only: [:index, :show] do
    collection { post :search }
  end

  resources :search, only: [:index] do
  end

  # heartbeat page
  get 'heartbeat', to: 'heartbeat#show'


  namespace :rfa do
    resources :a01 do

      resources :applicant, only: [:index, :create, :edit]
      resources :residence, only: [:show, :create, :edit]

    end

  end



end
