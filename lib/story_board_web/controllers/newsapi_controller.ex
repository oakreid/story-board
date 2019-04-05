defmodule StoryBoardWeb.NewsAPIController do
  use StoryBoardWeb, :controller

  action_fallback StoryBoardWeb.FallbackController

  def newsapi_search(conn, %{"search_phrase" => search_phrase}) do
    IO.puts("[HIT SERVER] newsapi search: " <> inspect(search_phrase))
    results = StoryBoard.Utils.newsapi_search(search_phrase)
    resp = %{
      data: %{
        sr: results
      }
    }
    conn
    |> put_resp_header("content-type", "application/json; charset=UTF-8")
    |> send_resp(:created, Jason.encode!(resp))
  end
end
