defmodule StoryBoard.Utils do
  def newsapi_search(search_phrase) do
    HTTPotion.get("https://newsapi.org/v2/top-headlines?q=" <> search_phrase <> "&apiKey=d4aa76cf18e54694ba866b0f2d8b738c", ["Accept": "Application/json; Charset=utf-8"])
    |> Map.from_struct()
    |> Map.get(:body)
    |> Jason.decode!()
    |> Map.get("articles")
  end
end
