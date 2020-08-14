class AddFieldsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :about_me, :string
    add_column :users, :likes_interests, :string
  end
end
