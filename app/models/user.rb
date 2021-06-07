class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :wishes, dependent: :destroy
  has_many :complete_reviews, through: :wishes, dependent: :destroy
  has_many :categories
end
