defmodule StoryBoardWeb.ChatChannel do
  use StoryBoardWeb, :channel

  def join("chat:lobby", payload, socket) do
    if authorized?(payload) do
      chat = StoryBoard.BackupAgent.get("lobby") || StoryBoard.Chat.init_chat()
      StoryBoard.BackupAgent.put("lobby", chat)
      {:ok, chat, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  def handle_in("submit", payload, socket) do
    chat = StoryBoard.Chat.push(StoryBoard.BackupAgent.get("lobby"), payload["message"]["value"])
    StoryBoard.BackupAgent.put("lobby", chat)
    broadcast_from(socket, "other_submit", chat)
    {:reply, {:ok, chat}, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
