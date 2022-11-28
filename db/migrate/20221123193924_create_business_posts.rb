class CreateBusinessPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :business_posts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :business_name
      t.string :business_category
      t.string :location
      t.string :website
      t.integer :favorites
      t.string :image

      t.timestamps
    end
  end
end
