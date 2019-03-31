defmodule StoryBoard.Repo do
  use Ecto.Repo,
    otp_app: :story_board,
    adapter: Ecto.Adapters.Postgres
end
