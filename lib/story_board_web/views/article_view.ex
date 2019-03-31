defmodule StoryBoardWeb.ArticleView do
  use StoryBoardWeb, :view
  alias StoryBoardWeb.ArticleView

  def render("index.json", %{articles: articles}) do
    %{data: render_many(articles, ArticleView, "article.json")}
  end

  def render("show.json", %{article: article}) do
    %{data: render_one(article, ArticleView, "article.json")}
  end

  def render("article.json", %{article: article}) do
    %{id: article.id,
      source: article.source,
      author: article.author,
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.image}
  end
end
