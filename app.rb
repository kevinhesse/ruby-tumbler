require "sinatra"
require "sinatra/activerecord"
require "sinatra/flash"
require "./models"

set :database, "sqlite3:app.db"


get '/' do
    erb :home
  end

get '/sign_in' do 
    erb :sign_in
end