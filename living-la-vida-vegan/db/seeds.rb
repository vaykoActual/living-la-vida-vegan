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

@admin = User.create!(username: 'zulay', email: 'zulay@lifefromabackpack.com', password: '012345', img_url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/117108718_700206797498048_7903621190218213824_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=108&_nc_ohc=SDx5RaG_fOoAX9uKyJb&oh=1c1c6e097a1d83ffe6f5db918a579573&oe=5F5D4AD2')
p "Users created: #{User.count}"

@curry = Recipe.create(upload_photo: 'https://avirtualvegan.com/wp-content/uploads/2019/09/Butternut-Squash-Curry-A-Virtual-Vegan-13-500x500.jpg', 
recipe_name: 'Butternut Squash Curry', 
description: 'Creamy, sweet butternut squash curry served over piles of steaming rice.',
prep_time: '15 mins',
cook_time: '20 mins',
ingredients: '1 tablespoon coconut oil OPTIONAL - if you do not have coconut oil any other oil is fine, or use water to sauté to keep the recipe oil-free
1 medium onion--sliced thinly
4 cloves garlic--chopped finely
1 fresh chilli pepper chopped finely or 1/2 teaspoon of dried chilli flakes
3 tablespoons mild curry powder 
1 tablespoon arrowroot powder (or cornstarch),
1 medium butternut squash (peeled, deseeded & chopped), 
398 - 400ml / 13.5 oz canned coconut milk
480mls / 2 cups vegetable stock or water
3 large handfuls fresh spinach
1 squeeze of lemon juice
1½ teaspoons salt, add more to taste
½ teaspoon ground black pepper, add more to taste', 
instructions: 'Heat a large pan over a medium heat and add the oil (or water for oil-free). Sauté the onion until starting to turn golden.
Add the garlic, chili and curry powder and continue cooking for another two minutes, stirring frequently. 
Add the arrowroot (or cornflour) and stir well again. It will go a little clumpy and stick to the bottom a bit but that is fine. Gradually add the water, stirring as you go to get any lumps out.
Add the butternut squash and the coconut milk and season generously with salt and pepper.
Simmer over a medium heat until the butternut squash pieces are tender (15 - 20 minutes depending on how big you cut your chunks). You can keep it cooking for longer on the lowest heat setting if you want to. The squash is kind of nice when it gets really meltingly soft!
Once the squash is cooked and no more than 10 minutes before you plan to serve, add the fresh spinach. You might struggle to fit it all in, and if so do it in two parts, but it will wilt down very quickly and then you will be able to stir it into the sauce easily.
Just before serving taste and adjust seasoning if necessary, then add a squeeze of lemon juice and give it a quick stir.', 
source: 'https://avirtualvegan.com/easy-butternut-squash-spinach-curry/', 
user: @admin)
p "#{Recipe.count} recipes in the system"