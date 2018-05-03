require "sinatra"
require "sinatra/activerecord"
# require "sinatra/flash"
require "./models"

configure :development do
  set :database, "sqlite3:app.db"
end

configure :production do
  set :database, ENV["DATABASE_URL"]
end

set :sessions, true


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

post '/sign_up' do
  @user = User.create(
    email: params[:email],
    username: params[:username],
    password: params[:password],
    first_name: params[:firstname],
    last_name: params[:lastname],
    birthday: params[:birthday]
  )

  redirect "/profile"
end

get '/profile' do 
  erb :profile
end

get '/create_post' do 
  erb :create_post
end