class ChangeDificultyName < ActiveRecord::Migration[6.0]
  def change
    rename_column :levels, :dificulty, :difficulty
  end
end
