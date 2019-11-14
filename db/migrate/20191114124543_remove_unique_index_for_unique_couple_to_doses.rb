class RemoveUniqueIndexForUniqueCoupleToDoses < ActiveRecord::Migration[5.2]
  def change
    remove_index :doses, name: "index_doses_on_cocktail_id_and_ingredient_id"
  end
end
