use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :story_board, StoryBoardWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :story_board, StoryBoard.Repo,
  username: "story_board",
  password: "aoL3eexaur4S",
  database: "story_board_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
