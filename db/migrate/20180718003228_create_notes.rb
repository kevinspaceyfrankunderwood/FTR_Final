class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :date
      t.text :body
      t.text :image

      t.timestamps
    end
  end
end
