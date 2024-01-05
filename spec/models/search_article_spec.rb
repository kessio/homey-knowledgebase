require 'rails_helper'

RSpec.describe SearchArticle, type: :model do
    describe 'validations' do
        it 'validates the presence and uniqueness of title' do
          first_article = SearchArticle.create(title: 'First unique title', count: 10)
          expect(first_article).to be_valid
    
          second_article = SearchArticle.new(title: 'First unique title', count: 5)
          expect(second_article).to be_invalid
          expect(second_article.errors[:title]).to include("has already been taken")
        end

          it 'validates that count is an integer' do
            article = SearchArticle.new(title: 'My Title', count: 'qwerty')
            expect(article).to be_invalid
            expect(article.errors[:count]).to include("is not a number")
          end
    end
end