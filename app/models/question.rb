class Question < ApplicationRecord
    validates :email, presence: true
    validates :search_term, presence: true
end
