# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

User.destroy_all
BusinessPost.destroy_all

puts "Seeding users..."
brooke = User.create(first_name: "Brooke", last_name: "Ross", username: "broski99", password: "123456789", business_owner: true, zip_code:80123, email: "broski99@outlook.com" );

dan = User.create(first_name: "Dan", last_name: "Maguire", username: "DanTheMan", password: "234567891", business_owner: true, zip_code:80110, email: "DanTheMan@gmail.com" )

otto = User.create(first_name: "Otto", last_name: "Cat", username: "OttotheCat", password: "345678912", business_owner: true, zip_code:80201, email: "OttoTheCat@att.net" )

puts "Seeding Business Posts..."
10.times do
    BusinessPost.create(user_id: User.all.sample.id, business_name:Faker::Company.name, business_category:Faker::Company.industry,location:Faker::Address.full_address,
    website:"https://www.bross-musiceducator.com/",
    favorites: 10,
    image:"https://lh3.googleusercontent.com/p/AF1QipPfpwqIpH06-FtSSsgx5xpe8WYpn1fEYeuP2mGk=s680-w680-h510")
end

puts "Seeding Reviews..."

Review.create(user_id:User.all.sample.id, business_post_id:BusinessPost.all.sample.id, title: "Best place ever!!!", comment: "I don't think I could go anywhere else. The place is all about sustainability and I LOVE it!!", rating: 5)

Review.create(user_id:User.all.sample.id, business_post_id:BusinessPost.all.sample.id, title: "Hate it!!!", comment: "They suk", rating: 0)

Review.create(user_id:User.all.sample.id, business_post_id:BusinessPost.all.sample.id, title: "Pretty okay", comment: "meh", rating: 3)

Review.create(user_id:User.all.sample.id, business_post_id:BusinessPost.all.sample.id, title: "Cool place", comment: "Really liked staff and how easy it was to shop. Hoping they get more products soon as I wish I could have bought more. Interesting that they focus on sustainability and have plastic wrapping though.", rating: 3)

Review.create(user_id:User.all.sample.id, business_post_id:BusinessPost.all.sample.id, title: "Ugly", comment: "They suk", rating: 0)