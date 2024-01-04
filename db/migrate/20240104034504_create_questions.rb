class CreateQuestions < ActiveRecord::Migration[7.1]
  def change
    create_table :questions do |t|
      t.string :email
      t.string :searchTerm

      t.timestamps
    end
  end
end
