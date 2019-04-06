defmodule PhrasesWithPhriends.BackupAgent do
  use Agent

  def start_link(_args) do
    Agent.start_link(fn -> [] end, name: __MODULE__)
  end

  def push(message) do
    Agent.update __MODULE__, fn state ->
      max_chat_cache = 100
      inserted = List.insert_at(state, 0, message)
      if length(state) > max_chat_cache do
        List.delete_at(inserted, max_chat_cache)
      else
        inserted
      end

    end
  end

  def get() do
    Agent.get __MODULE__, fn state ->
      state
    end
  end
end
