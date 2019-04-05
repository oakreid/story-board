defmodule PhrasesWithPhriends.BackupAgent do
  use Agent

  def start_link(_args) do
    Agent.start_link(fn -> [] end, name: __MODULE__)
  end

  def push(message) do
    Agent.update __MODULE__, fn state ->

    end
  end

  def get() do
    Agent.get __MODULE__, fn state ->
      state
    end
  end
end
