class CreateUserRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :user_records do |t|
      t.references :user, null: false, foreign_key: true
      t.references :level, null: false, foreign_key: true
      t.datetime :completed_at

      t.timestamps
    end
  end
end
