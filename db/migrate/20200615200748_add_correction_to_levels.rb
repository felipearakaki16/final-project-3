class AddCorrectionToLevels < ActiveRecord::Migration[6.0]
  def change
    add_column :levels, :correction, :text, array: true, default: []
  end
end
