module Api
  module V1
    class CompleteReviewsController < ApplicationController
      def index
        wish = Wish.find(params[:wish_id])
        complete_reviews = wish.complete_reviews

        render json: {
          complete_reviews: complete_reviews
        }, status: :ok
      end
    end
  end
end