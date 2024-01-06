require 'rails_helper'

RSpec.describe Api::V1::QuestionsController, type: :controller do
  describe 'POST #create' do
    context 'with valid parameters' do
      it 'creates a new question and renders it as JSON' do
        valid_params = { question: { email: 'sharon@email.com', search_term: 'search_term' } }

        post :create, params: valid_params, format: :json

        expect(response).to have_http_status(:created)
        expect(JSON.parse(response.body)).to include('email' => 'sharon@email.com', 'search_term' => 'search_term')
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new question and renders errors as JSON' do
        invalid_params = { question: { email: nil, search_term: '' } }

        post :create, params: invalid_params, format: :json

        expect(response).to have_http_status(:unprocessable_entity)
        expect(JSON.parse(response.body)).to include('errors')
      end
    end
  end
end
