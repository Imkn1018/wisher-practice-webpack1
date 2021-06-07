module Api
  module V1
    class CategoriesController < ApplicationController
      def index
        categories = Category.all

        render json: {
          categories: categories
        }, status: :ok
      end
      
      def show
        category = Category.find_by(params[:id])
        
        render json: {
          category: category
        },status: :ok
      end
    end
  end
end
