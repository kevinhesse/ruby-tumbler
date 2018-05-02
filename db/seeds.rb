require "./models"

User.create(username: "kevin", password: "password", first_name: "kevin",last_name: "hesse", email: "khesse92@gmail.com",birthday: "10/06/1992")
Post.create(title: "blog post", main_text: "this is the body of the post", user_id:1)