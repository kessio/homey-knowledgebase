class SearchArticle < ApplicationRecord
    validates :title, uniqueness: true
end
