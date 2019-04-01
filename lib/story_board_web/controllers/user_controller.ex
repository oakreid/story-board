defmodule StoryBoardWeb.UserController do
  use StoryBoardWeb, :controller

  alias StoryBoard.Users
  alias StoryBoard.Users.User
  alias StoryBoardWeb.Endpoint

  action_fallback StoryBoardWeb.FallbackController

  def login(conn, %{"username" => username, "password" => password}) do
    with {:ok, %User{} = user} <- Users.get_and_auth_user(username, password) do
      resp = %{
        data: %{
          token: Phoenix.Token.sign(Endpoint, "user_id", user.id),
          user_id: user.id
        }
      }
      conn
      |> put_resp_header("content-type", "application/json; charset=UTF-8")
      |> send_resp(:created, Jason.encode!(resp))
    end
  end

  def index(conn, _params) do
    users = Users.list_users()
    render(conn, "index.json", users: users)
  end

  def create(conn, %{"username" => username, "password" => password}) do
    with {:ok, %User{} = user} <- Users.create_user(username, password) do
      resp = %{
        data: %{
          token: Phoenix.Token.sign(Endpoint, "user_id", user.id),
          user_id: user.id
        }
      }
      conn
      |> put_resp_header("location", Routes.user_path(conn, :show, user))
      |> send_resp(:created, Jason.encode!(resp))
    end
  end

  def show(conn, %{"id" => id}) do
    user = Users.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Users.get_user!(id)

    with {:ok, %User{} = user} <- Users.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Users.get_user!(id)

    with {:ok, %User{}} <- Users.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
