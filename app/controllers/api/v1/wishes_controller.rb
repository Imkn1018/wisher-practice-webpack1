module Api
  module V1
    class WishesController < ApplicationController
      def index
        wishes = Wish.all

        render json: {
          wishes: wishes
        }, status: :ok
      end
      
      def show
        wish = Wish.find_by(params[:id])
        
        render json: {
          wish: wish
        },status: :ok
      end
    end
  end
end
