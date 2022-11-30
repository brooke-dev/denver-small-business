class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :business_post, null: false, foreign_key: true
      t.string :title
      t.integer :rating
      t.string :comment

      t.timestamps
    end
  end
end
