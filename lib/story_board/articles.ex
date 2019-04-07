defmodule StoryBoard.Articles do
  @moduledoc """
  The Articles context.
  """

  import Ecto.Query, warn: false
  alias StoryBoard.Repo

  alias StoryBoard.Articles.Article

  def fcuf_articles(uid) do
    list_articles()
    |> Enum.filter(fn(x) -> x.user_id == uid end)
    |> Enum.map(fn(x) ->
      temp = x
      x
      |> Map.from_struct()
      |> Map.drop([:__meta__, :user])
      |> Map.put(:source, %{name: Map.get(temp, :source)})
    end)
  end

  @doc """
  Returns the list of articles.

  ## Examples

      iex> list_articles()
      [%Article{}, ...]

  """
  def list_articles do
    Repo.all(Article)
  end

  @doc """
  Gets a single article.

  Raises `Ecto.NoResultsError` if the Article does not exist.

  ## Examples

      iex> get_article!(123)
      %Article{}

      iex> get_article!(456)
      ** (Ecto.NoResultsError)

  """
  def get_article!(id), do: Repo.get!(Article, id)

  @doc """
  Creates a article.

  ## Examples

      iex> create_article(%{field: value})
      {:ok, %Article{}}

      iex> create_article(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_article(attrs \\ %{}) do
    filtered_attrs = Enum.reduce(attrs, %{}, fn (kv, acc) ->
      IO.puts(inspect(kv))
      if elem(kv, 1) == nil do
        Map.put(acc, elem(kv, 0), "unknown")
      else
        Map.put(acc, elem(kv, 0), elem(kv, 1))
      end
    end)
    IO.puts(inspect(filtered_attrs))
    %Article{}
    |> Article.changeset(filtered_attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a article.

  ## Examples

      iex> update_article(article, %{field: new_value})
      {:ok, %Article{}}

      iex> update_article(article, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_article(%Article{} = article, attrs) do
    article
    |> Article.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Article.

  ## Examples

      iex> delete_article(article)
      {:ok, %Article{}}

      iex> delete_article(article)
      {:error, %Ecto.Changeset{}}

  """
  def delete_article(%Article{} = article) do
    Repo.delete(article)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking article changes.

  ## Examples

      iex> change_article(article)
      %Ecto.Changeset{source: %Article{}}

  """
  def change_article(%Article{} = article) do
    Article.changeset(article, %{})
  end
end
