defmodule StoryBoard.Articles.Article do
  use Ecto.Schema
  import Ecto.Changeset

  schema "articles" do
    field :author, :string
    field :description, :string
    field :urlToImage, :string
    field :source, :string
    field :title, :string
    field :url, :string
    field :publishedAt, :string
    belongs_to :user, StoryBoard.Users.User

    timestamps()
  end

  @doc false
  def changeset(article, attrs) do
    article
    |> cast(attrs, [:source, :author, :title, :description, :url, :urlToImage, :publishedAt, :user_id])
    |> validate_required([:source, :author, :title, :description, :url, :urlToImage, :publishedAt, :user_id])
  end
end
