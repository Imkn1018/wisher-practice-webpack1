module Api
  module V1
    class WishesController < ApplicationController
      def index
        wishes = Wish.all

        render json: {
          wishes: wishes
        }, status: :ok
      end
    end
  end
end