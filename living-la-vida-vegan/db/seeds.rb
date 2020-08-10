# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Recipe.destroy_all
User.destroy_all

@admin = User.create!(username: 'zulay', email: 'zulay@lifefromabackpack.com', password: '012345')
p "Users created: #{User.count}"

@curry = Recipe.create(name: 'Butternut Squash Curry', img_url: '', user: @admin)
p "#{Recipe.count} recipes in the system"