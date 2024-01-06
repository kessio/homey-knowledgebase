require 'rails_helper'

RSpec.describe Api::V1::SearchArticlesController, type: :request do
    describe 'GET #search' do
    context 'with a valid query' do
      let!(:matching_article) { create(:search_article, title: 'Example Title', content: 'Example Content') }

      it 'returns the matching article' do
        get '/api/v1/search_articles/search', params: { query: 'example' }, headers: { 'Accept' => 'application/json' }

        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)).to eq([matching_article.as_json])
      end
    end

    context 'without a query' do
        it 'returns an empty array' do
          get '/api/v1/search_articles/search', headers: { 'Accept' => 'application/json' }
  
          expect(response).to have_http_status(:ok)
          expect(response.body).to eq('[]')
        end
      end
  end

    describe 'PATCH #count_search' do
        context 'with a valid search_article id' do
          let!(:search_article) { create(:search_article) }
    
          it 'increments the count' do
            patch '/api/v1/search_articles/count_search', params: { id: search_article.id }, headers: { 'Accept' => 'application/json' }

            expect(response).to have_http_status(:ok)
            expect(search_article.reload.count).to eq(1)
          end
        end
    
        context 'with an invalid search_article id' do
          it 'returns a not found error' do
            patch '/api/v1/search_articles/0/count_search', params: { id: 'not_valid' }, headers: { 'Accept' => 'application/json' }
    
            expect(response).to have_http_status(:not_found)
            expect(JSON.parse(response.body)['error']).to eq('Not Found')
          end
        end
      end

        describe 'GET #recent' do
            context 'with recent searches' do
              #let!(:search_articles) { create_list(:search_article, 5) }
        
              it 'returns a JSON response with recent searches' do
                search_articles = (1..5).map do |n|
                    SearchArticle.create(
                      title: "Search Article #{n}",
                      content: 'Sample content',
                      count: 0
                    )
                  end
              
                  get '/api/v1/search_articles/recent', headers: { 'Accept' => 'application/json' }
              
                  expect(response).to have_http_status(:ok)
                  expected_data = search_articles.sort_by(&:updated_at).reverse.map(&:as_json)
                  actual_data = JSON.parse(response.body)
              
                  # Check if both arrays contain the same elements, regardless of order
                  expect(actual_data).to match_array(expected_data)
                
              end
            end
        end

        describe 'GET #popular' do
            context 'with popular searches' do
        
              it 'returns a JSON response with popular searches' do
                search_articles = (1..5).map do |n|
                    SearchArticle.create(
                      title: "Search Article #{n}",
                      content: 'Sample content',
                      count: n
                    )
                  end
              
                  get '/api/v1/search_articles/popular', headers: { 'Accept' => 'application/json' }
              
                  expect(response).to have_http_status(:ok)
                  expected_data = search_articles.sort_by(&:count).reverse.map(&:as_json)
                  actual_data = JSON.parse(response.body)
              
                  expect(actual_data).to match_array(expected_data)
                
              end
            end
        end
end