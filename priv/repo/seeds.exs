# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     StoryBoard.Repo.insert!(%StoryBoard.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias StoryBoard.Repo
alias StoryBoard.Users.User
alias StoryBoard.Articles.Article

test_hash = Argon2.hash_pwd_salt("test")

Repo.insert!(%User{username: "test", password_hash: test_hash})
Repo.insert!(%User{username: "dummy", password_hash: test_hash})

Repo.insert!(%Article{
  source: "Engadget",
  author: "Daniel Cooper",
  title: "Huawei MateBook X Pro review (2019): As good as before",
  description: "For a company with relatively little experience making laptops, Huawei's MateBook X Pro was a revelation. The machine was one of the best you could buy, with a blend of style and performance that made it the equal of a brand-name incumbent. Now, the company h…",
  url: "https://www.engadget.com/2019/04/01/huawei-matebook-x-pro-2019-review/",
  urlToImage: "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-04%252F0d134220-547a-11e9-bd7f-decd197da3bf%26client%3Da1acac3e1b3290917d92%26signature%3Dd1ec4630a8459319df3636aaa3c0d62d2a7353a2&client=amp-blogside-v2&signature=cca4b45d4c9b08cd28e35d4b9176fca7d042a0a5",
  publishedAt: "testtime",
  user_id: 1
})

Repo.insert!(%Article{
  source: "dummy",
  author: "dummy",
  title: "dummy",
  description: "dummy",
  url: "dummy",
  urlToImage: "dummy",
  publishedAt: "dummy",
  user_id: 2
})
