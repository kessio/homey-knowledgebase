class SearchArticle < ApplicationRecord
  validates :title, uniqueness: true, presence: true
  validates :count, presence: true, numericality: { only_integer: true }
end
