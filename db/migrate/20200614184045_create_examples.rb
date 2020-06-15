class CreateExamples < ActiveRecord::Migration[6.0]
  def change
    create_table :examples do |t|
      t.string :content
      t.references :level, null: false, foreign_key: true

      t.timestamps
    end
  end
end
