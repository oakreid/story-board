defmodule StoryBoard.Repo.Migrations.CreateArticles do
  use Ecto.Migration

  def change do
    create table(:articles) do
      add :source, :string, null: false
      add :author, :string, null: false
      add :title, :string, null: false
      add :description, :string, null: false
      add :url, :string, null: false
      add :image, :string, null: false
      add :user_id, references(:users, on_delete: :delete_all), null: false

      timestamps()
    end

  end
end
