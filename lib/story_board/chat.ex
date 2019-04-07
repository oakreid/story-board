defmodule StoryBoard.Chat do
  def init_chat() do
    %{chat: []}
  end

  def push(state, message) do
    max_chat_cache = 100
    chat_user =
      message["uid"]
      |> StoryBoard.Users.get_user!()
      |> Map.from_struct()
      |> Map.get(:username)
    chat_header = chat_user <> " (" <> message["dt"] <>  "): "
    chat_val = message["value"]
    inserted = List.insert_at(state[:chat], 0, %{header: chat_header, val: chat_val})
    if length(inserted) > max_chat_cache do
      %{chat: List.delete_at(inserted, max_chat_cache)}
    else
      %{chat: inserted}
    end
  end
end
