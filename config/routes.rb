Rails.application.routes.draw do
  get 'locales/index'
  get 'locales/:lang' => 'locales#show'
  post 'locales/save' => 'locales#save'

  post 'requests/create'
  get 'requests/index'

  get '/templates/:path' => 'templates#page', :constraints => { :path => /.+/  }
  root to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
