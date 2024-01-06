class AddCountToSearchArticles < ActiveRecord::Migration[7.1]
  def change
    add_column :search_articles, :count, :integer, default: 0
  end
end
