# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times do |_n|
  User.create!(
    name: "test#{_n+1}",
    user_image_id: "https://source.unsplash.com/R_Nhn9g5y34",
    email: "test#{ _n+1 }@gmail.com",
     password: "test#{ _n+1 }tarou",
    )
  
  wish = Wish.new(
    user_id: 1,
    wish_title: 'Go to Kyoto',
    memo: 'Love Kyoto',
    wish_image_id: 'https://source.unsplash.com/_UIN-pFfJ7c',
    difficutly: 3,
    isCompleted: false,
    url: 'https://bagelee.com/design/about-unsplash-source/'
  )

  12.times do |_m|
    wish.complete_reviews.build(
      review_title: 'Can Visit Kyoto',
      review: 'I love Kyoto',
      satisfy: 5,
      complete_image_id: 'https://source.unsplash.com/EJvGBYjrwEA'
    )
  end

  wish.save!
end

4.times do |_n|
  category = Category.new(
    user_id: 1,
    category_name: "旅行",
    category_image_id: "https://source.unsplash.com/re2LZOB2XvY"
    )
  category.save!
end
