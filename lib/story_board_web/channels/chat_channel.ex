defmodule StoryBoardWeb.ChatChannel do
  use StoryBoardWeb, :channel

  def join("chat:lobby", payload, socket) do
    if authorized?(payload) do
      chat = StoryBoard.BackupAgent.get() || StoryBoard.Chat.init_chat()
      {:ok, chat, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  def handle_in("submit", payload, socket) do
    chat = StoryBoard.BackupAgent.push(payload["message"])
    broadcast_from(socket, 'other_submit', chat)
    {:reply, chat, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
