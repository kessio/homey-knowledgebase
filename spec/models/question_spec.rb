require 'rails_helper'

RSpec.describe Question, type: :model do
  describe 'validations' do
    it 'validates the presence of email' do
      question = Question.new(search_term: 'valid_search_term')
      expect(question).to be_invalid
      expect(question.errors[:email]).to include("can't be blank")
    end

    it 'validates the presence of search_term' do
      question = Question.new(email: 'example@email.com')
      expect(question).to be_invalid
      expect(question.errors[:search_term]).to include("can't be blank")
    end
  end

  describe 'creation' do
    it 'can be created with valid attributes' do
      question = Question.create(email: 'valid@email.com', search_term: 'valid_search_term')
      expect(question).to be_valid
    end
  end
 
end
