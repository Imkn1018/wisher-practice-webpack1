# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times do |n|
  wish = Wish.new(
    wish_title: "Go to Kyoto",
    memo: "Love Kyoto",
    wish_image_id: "https://source.unsplash.com/_UIN-pFfJ7c",
    difficutly: 3,
    isCompleted: false,
    url: "https://bagelee.com/design/about-unsplash-source/"
  )

  12.times do |m|
    wish.complete_reviews.build(
      review_title: "Can Visit Kyoto",
      review: "I love Kyoto",
      satisfy: 5,
      complete_image_id: "https://source.unsplash.com/EJvGBYjrwEA"
    )
  end

  wish.save!
end