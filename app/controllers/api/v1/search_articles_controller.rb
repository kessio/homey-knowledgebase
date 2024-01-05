class Api::V1::SearchArticlesController < ApplicationController
    def search
        @search_articles = if params[:query].present?
          SearchArticle.where("LOWER(title) LIKE ? OR LOWER(content) LIKE ?", "%#{params[:query].downcase}%", "%#{params[:query].downcase}%").order(created_at: :desc)
        else
          SearchArticle.none
        end
      
        render json: @search_articles
      end
    
end
