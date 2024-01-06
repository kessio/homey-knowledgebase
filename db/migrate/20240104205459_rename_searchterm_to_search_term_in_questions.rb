class RenameSearchtermToSearchTermInQuestions < ActiveRecord::Migration[7.1]
  def change
    rename_column :questions, :searchTerm, :search_term
  end
end
