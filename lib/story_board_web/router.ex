defmodule StoryBoardWeb.Router do
  use StoryBoardWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", StoryBoardWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/api", StoryBoardWeb do
    pipe_through :api

    resources "/users", UserController, except: [:new, :edit]
    resources "/articles", ArticleController, except: [:new, :edit]

    get "/fcuf_articles", ArticleController, :fcuf_articles

    post "/login", UserController, :login
    post "/register", UserController, :create
  end
end
