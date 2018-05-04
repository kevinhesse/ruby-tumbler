class User < ActiveRecord::Base
    has_many :posts
end

class Post < ActiveRecord::Base
    belongs_to :user
end

# this is where you define has one, has many