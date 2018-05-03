require "sinatra"
require "sinatra/activerecord"
require "sinatra/flash"
require "./models"

set :database, "sqlite3:app.db"


get '/' do
  erb :home
  # add 2 homepage for signed in or signed out
end

get '/sign_in' do 
  erb :sign_in
end

post '/sign_in' do 
  @user = User.find_by(username: params[:username])

  if @user && @user.password == params[:password]
    session[:user_id] = @user.id
    redirect '/'

  else 
    redirect '/sign_up'
  end
end


get '/sign_up' do 
  erb :sign_up
end

get '/profile' do 
  erb :profile
end