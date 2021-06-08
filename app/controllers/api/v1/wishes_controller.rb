module Api
  module V1
    class WishesController < ApplicationController
      def index
        wishes = Wish.all

        render json: {
          wishes: wishes
        }, status: :ok
      end
      
      def create
        wish = Wish.new(wish_params)
        if wish.save
          render json: wish
        else
          render json: wish.errors, status: 422
        end
      end
      
      def show
        wish = Wish.find_by(params[:id])
        
        render json: {
          wish: wish
        },status: :ok
      end
      
      private

      def wish_params
        params.require(:wish).permit(:wish_title,:memo,:wish_image_id,:span,:difficulty,:isComplited,:url)
      end
    end
  end
end
