class AddTargetToExamples < ActiveRecord::Migration[6.0]
  def change
    add_column :examples, :target, :string
  end
end
