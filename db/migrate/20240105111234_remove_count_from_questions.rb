class RemoveCountFromQuestions < ActiveRecord::Migration[7.1]
  def change
    remove_column :questions, :count, :integer
  end
end
