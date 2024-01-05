class Api::V1::QuestionsController < ApplicationController
  before_action :set_question, only: %i[ show update destroy ]

  # GET /questions
  def index
    @questions = Question.all

    render json: @questions, status: :ok
  end

  # GET /questions/1
  def show
    render json: @question
  end

  # POST /questions
  def create
    search_term = params[:question][:search_term].downcase.strip

    @question = Question.new(question_params)

    if @question.save
      render json: @question, status: :created
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /questions/1
  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /questions/1
  def destroy
    @question.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    private

    def question_params
      params.require(:question).permit(:email, :search_term) 
    end
end
