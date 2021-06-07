class Category < ApplicationRecord
  has_many :wish_category_relations
  has_many :wishes, through: :wish_category_relations
  belongs_to :user
  
end
