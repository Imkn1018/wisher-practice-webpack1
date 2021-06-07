class CreateWishCategoryRelationships < ActiveRecord::Migration[5.2]
  def change
    create_table :wish_category_relationships do |t|
      t.integer :wish_id
      t.integer :category_id

      t.timestamps
    end
  end
end
