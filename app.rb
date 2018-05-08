require "sinatra"
require "sinatra/activerecord"
require "./models"
require "sinatra/content_for"

configure :development do
  set :database, "sqlite3:app.db"
end

configure :production do
  set :database, ENV["DATABASE_URL"]
end

set :sessions, true


get '/' do
  erb :home
end

get '/sign_in' do 
  erb :sign_in
end

post '/sign_in' do 
  # if user exists and user and password match, start session
  if @user && @user.password == params[:password]
    session[:user_id] = @user.id
    redirect '/profile'

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
  session[:user_id] = @user.id
  redirect '/profile'
end

get '/create_post' do 
  @user = User.find(session[:user_id])
  erb :create_post
end

post '/create_post' do
  @user = User.find(session[:user_id])
  @post = Post.create(
    user_id: @user.id,
    title: params[:title],
    main_text: params[:main_text]
  )
    redirect "/profile"
end

get '/profile' do
  @user = User.find(session[:user_id])
  erb :profile
end

get '/sign_out' do
  @sign_out = session[:user_id] = nil
  redirect "/"
end

get '/delete_account' do 
  @user = User.find(session[:user_id]).destroy
  session[:user_id] = nil
  erb :delete_account  
end

get'/browse' do
  @posts = Post.all
  erb :browse
end

post '/browse' do 
  @posts = Post.all
end

get '/account' do 
  @user = User.find(session[:user_id])
  erb :account
end

# get '/profile'
#   @user = erb: user(params[:id])

# end
