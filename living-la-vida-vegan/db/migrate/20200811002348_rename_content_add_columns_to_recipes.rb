class RenameContentAddColumnsToRecipes < ActiveRecord::Migration[6.0]
  def change
    rename_column :recipes, :content, :upload_photo
    add_column :recipes, :recipe_name, :string
    add_column :recipes, :description, :string  
    add_column :recipes, :prep_time, :string
    add_column :recipes, :cook_time, :string
    add_column :recipes, :ingredients, :text
    add_column :recipes, :instructions, :text
    add_column :recipes, :source, :string
  end
end
