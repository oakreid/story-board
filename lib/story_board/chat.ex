defmodule StoryBoard.Chat do
  def init_chat() do
    %{chat: []}
  end

  def push(state, message) do
    max_chat_cache = 100
    inserted = List.insert_at(state[:chat], 0, message)
    if length(inserted) > max_chat_cache do
      %{chat: List.delete_at(inserted, max_chat_cache)}
    else
      ret = %{chat: inserted}
      IO.puts("ret: " <> inspect(ret))
      ret
    end
  end
end
