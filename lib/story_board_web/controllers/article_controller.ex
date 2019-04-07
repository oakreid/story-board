defmodule StoryBoardWeb.ArticleController do
  use StoryBoardWeb, :controller

  alias StoryBoard.Articles
  alias StoryBoard.Articles.Article

  action_fallback StoryBoardWeb.FallbackController

  def fcuf_articles(conn, %{"user_id" => user_id}) do
    IO.puts("[HIT SERVER] fcuf user id: " <> inspect(user_id))
    favorite_articles = Articles.fcuf_articles(user_id)
    IO.puts(inspect(favorite_articles))
    resp = %{
      data: %{
        cuf: favorite_articles
      }
    }
    conn
    |> put_resp_header("content-type", "application/json; charset=UTF-8")
    |> send_resp(:created, Jason.encode!(resp))
  end

  def index(conn, _params) do
    articles = Articles.list_articles()
    render(conn, "index.json", articles: articles)
  end

  def create(conn, %{"article" => article_params}) do
    IO.puts("[HIT SERVER] create article: " <> inspect(article_params))
    article = Articles.create_article(article_params)
    case article do
      {:ok, _info} ->
        resp = %{}
        conn
        |> put_resp_header("location", Routes.article_path(conn, :show, article))
        |> send_resp(:created, Jason.encode!(resp))
      _ ->
        resp = %{}
        conn
        |> put_resp_header("location", Routes.article_path(conn, :show, article))
        |> send_resp(:error, Jason.encode!(resp))
    end
  end

  def show(conn, %{"id" => id}) do
    article = Articles.get_article!(id)
    render(conn, "show.json", article: article)
  end

  def update(conn, %{"id" => id, "article" => article_params}) do
    article = Articles.get_article!(id)

    with {:ok, %Article{} = article} <- Articles.update_article(article, article_params) do
      render(conn, "show.json", article: article)
    end
  end

  def delete(conn, %{"id" => id}) do
    IO.puts("[HIT SERVER] delete article: " <> inspect(id))
    article = Articles.get_article!(id)

    with {:ok, %Article{}} <- Articles.delete_article(article) do
      send_resp(conn, :no_content, "")
    end
  end
end
