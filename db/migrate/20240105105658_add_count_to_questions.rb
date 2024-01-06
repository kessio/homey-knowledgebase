class AddCountToQuestions < ActiveRecord::Migration[7.1]
  def change
    add_column :questions, :count, :integer, default: 1
  end
end
