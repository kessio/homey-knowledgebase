class Api::V1::SearchArticlesController < ApplicationController
    def search
        @search_articles = if params[:query].present?
          SearchArticle.where("LOWER(title) LIKE ? OR LOWER(content) LIKE ?", "%#{params[:query].downcase}%", "%#{params[:query].downcase}%").order(created_at: :desc)
        else
          SearchArticle.none
        end
      
        render json: @search_articles
      end

      def count_search
        @search_article = SearchArticle.find(params[:id])
        @search_article.increment!(:count)
        render json: { message: 'Count incremented successfully' }, status: :ok
        rescue ActiveRecord::RecordNotFound
          render json: { error: 'SearchArticle not found' }, status: :not_found
        rescue StandardError => e
          render json: { error: e.message }, status: :unprocessable_entity
      end

      def recent
        @recent_searches = SearchArticle.order(updated_at: :desc).limit(5)
        render json: @recent_searches
      end
    
      def popular
        @popular_searches = SearchArticle.order(count: :desc).limit(5)
        render json: @popular_searches
      end
    
end
