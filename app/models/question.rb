class Question < ApplicationRecord
    validates :email, presence: true
    validates :searchTerm, presence: true
end
