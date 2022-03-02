Rails.application.routes.draw do
  namespace :api do
    # don't 
    # resources :pages do 
    #   resources :comments do
    #     resources :likes
    #   end
    # end

    resources :pages do 
      resources :comments 
    end

    # resources :comments, except: [:index, :show, :create, :update, :destroy] do
    #   resources :likes
    # end
    # get 'pages/index'
    # get 'pages/show'
    # get 'pages/new'
    # get 'pages/edit'
    # post 'pages/create'
    # update 'pages/update'
    # delete 'pages/destroy'
  end
end
