class Api::V1::QuestionsController < ApplicationController
  # POST /questions
  def create
    search_term = params[:question][:search_term].downcase.strip

    @question = Question.new(question_params)

    if @question.save
      render json: @question, status: :created
    else
      render json: { errors: @question.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    def question_params
      params.require(:question).permit(:email, :search_term) 
    end
end
  
