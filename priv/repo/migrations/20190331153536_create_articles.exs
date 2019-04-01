defmodule StoryBoard.Repo.Migrations.CreateArticles do
  use Ecto.Migration

  def change do
    create table(:articles) do
      add :source, :string, null: false
      add :author, :string, null: false
      add :title, :text, null: false
      add :description, :text, null: false
      add :url, :text, null: false
      add :image, :text, null: false
      add :user_id, references(:users, on_delete: :delete_all), null: false

      timestamps()
    end

    create index(:articles, [:url], unique: true)
  end
end
