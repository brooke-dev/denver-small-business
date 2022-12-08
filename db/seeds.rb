# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

User.destroy_all
BusinessPost.destroy_all

puts "Seeding users..."
brooke = User.create(first_name: "Brooke", last_name: "Ross", username: "broski99", password: "123456789", business_owner: true, zip_code:80123, email: "broski99@outlook.com" );

dan = User.create(first_name: "Dan", last_name: "Maguire", username: "DanTheMan", password: "234567891", business_owner: true, zip_code:80110, email: "DanTheMan@gmail.com" )

otto = User.create(first_name: "Otto", last_name: "Cat", username: "OttotheCat", password: "345678912", business_owner: true, zip_code:80201, email: "OttoTheCat@att.net" )

puts "Seeding Business Posts..."

BusinessPost.create(user_id: User.all.sample.id, business_name:"Top Terracotta", business_category:"Plants", location:"2005 Pearl St, Boulder, CO 80302", website:"https://topterracotta.com/", favorites: 10, image:"https://www.denverlifemagazine.com/wp-content/uploads/2020/10/November-2020-Places-Plant-Shops.jpg")

BusinessPost.create(user_id: User.all.sample.id, business_name:"Inks and Drinks", business_category:"Art Experience", location:"1 W Flatiron Crossing Dr #408, Broomfield, CO 80021", website:"https://www.inksanddrinksparties.com/?gclid=CjwKCAiAs8acBhA1EiwAgRFdw1_pXwSDKc_7GENZ12hdkXCRr23iL0DMX-DM-Gyvxsq3_rEqlj0NaxoCx7MQAvD_BwE", favorites: 15, image:"https://media-cdn.tripadvisor.com/media/photo-s/08/de/a9/16/inks-drinks-painting.jpg")

BusinessPost.create(user_id: User.all.sample.id, business_name:"Savannah Bee Company", business_category:"Food", location:"earl Street Mall, 1222 Pearl St, Boulder, CO 80302", website:"https://savannahbee.com/?gclid=CjwKCAiAs8acBhA1EiwAgRFdwxFvuiQ3BDR-zAyogklEOogeOe92oC5u8kuX8z3IIMpAQU17BnwK7BoCTQsQAvD_BwE", favorites: 7, image:"https://cdn.shopify.com/s/files/1/0637/7989/7568/files/bee.png?v=1657870457&width=250")

BusinessPost.create(user_id: User.all.sample.id, business_name:"4 Noses Brewing Company", business_category:"Brewery", location:"8855 W 116th Cir #4, Broomfield, CO 80021", website:"https://www.4nosesbrewing.com/", favorites: 27, image:"https://lh3.googleusercontent.com/p/AF1QipOoz_W1Ocg3uNv25HeITI_3REZAnF2DEY_vlb2D=s680-w680-h510")

BusinessPost.create(user_id: User.all.sample.id, business_name:"Canine Cardigans", business_category:"Retail and Pet", location:"n/a", website:"https://caninecardigans.com/", favorites: 27, image:"https://i0.wp.com/caninecardigans.com/wp-content/uploads/2018/06/cropped-cropped-webhead6.18.png?w=1889&ssl=1")

BusinessPost.create(user_id: User.all.sample.id, business_name:"Mindful Works", business_category:"Wellness and home decor", location:" 1128 Pine St, Boulder, CO 80302", website:"https://mindful-works.org/about-us/", favorites: 47, image:"https://mindful-works.org/wp-content/uploads/thegem-logos/logo_7b86466c5f340df8319be0df5d3eae01_1x.png")

BusinessPost.create(user_id: User.all.sample.id, business_name:"The Terrorium Shop", business_category:"Plants and Taxidermy", location:"4416 Yates St, Denver, CO 80212", website:"https://theterroriumshop.co/", favorites: 82, image:"https://isteam.wsimg.com/ip/6251bfdd-4050-49f4-a3fc-f33a0c6da1eb/DD61A999-A68A-46E4-A1DB-07BDF1B165C4.jpeg/:/rs=w:1280")

BusinessPost.create(user_id: User.all.sample.id, business_name:"Front Range Gardens", business_category:"Greenhouse and Plants", location:"10195 Wadsworth Blvd, Broomfield, CO 80021", website:"https://www.frontrangegardens.com/", favorites: 2, image:"https://static.wixstatic.com/media/a31528_a307ce948723403d8d96e5ad6b6d62ba~mv2.png/v1/fill/w_153,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272023291_618282932780879_1144564780163342932_n-removebg-preview%20(1).png")

BusinessPost.create(user_id: User.all.sample.id, business_name:"Lucky's Bakehouse", business_category:"Desserts", location:"3990 Broadway, Boulder, CO 80304", website:"https://www.luckysmarket.com/cafe", favorites: 34, image:"https://static.wixstatic.com/media/86f984_199ddced55d5451e9db866b7c9bf9ffb~mv2.jpg/v1/fill/w_1680,h_508,al_c,q_85,enc_auto/86f984_199ddced55d5451e9db866b7c9bf9ffb~mv2.jpg")

BusinessPost.create(user_id: User.all.sample.id, business_name:"G1 Climbing + Fitness", business_category:"Gym and Fitness", location:" 8845 W 116th Cir, Broomfield, CO 80021", website:"https://g1climbing.com", favorites: 15, image:"https://g1climbing.com/wp-content/uploads/2020/06/AGR_1955-scaled.jpg")


puts "Seeding Reviews..."

Review.create(user_id:User.all.sample.id, business_post_id:BusinessPost.all.sample.id, title: "Best place ever!!!", comment: "I don't think I could go anywhere else. The place is all about sustainability and I LOVE it!!", rating: 5)

Review.create(user_id:User.all.sample.id, business_post_id:BusinessPost.all.sample.id, title: "Great Place", comment: "Really liked the atmosphere and how great the owner was. Such a cool place with great products", rating: 5)

Review.create(user_id:User.all.sample.id, business_post_id:BusinessPost.all.sample.id, title: "Pretty okay", comment: "meh", rating: 3)

Review.create(user_id:User.all.sample.id, business_post_id:BusinessPost.all.sample.id, title: "Cool place", comment: "Really liked staff and how easy it was to shop. Hoping they get more products soon as I wish I could have bought more. Interesting that they focus on sustainability and have plastic wrapping though.", rating: 3)

Review.create(user_id:User.all.sample.id, business_post_id:BusinessPost.all.sample.id, title: "Meh", comment: "this place is okay", rating: 3)