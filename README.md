![image](https://user-images.githubusercontent.com/112871518/224818370-b3582dc1-3402-4785-9690-3e6061c19f37.png)
# MatchScape
Do you play RuneScape and would you like to know which characters best fit you? If you answered 'yes' to both of those questions, this app is for you! MatchScape is a website where you can select YOUR interests, and based on your choices, different NPC's will be shown to fit you. Try it out!

## My feature
Sadly, my web app doesn't have everything like account creation, selecting favorites or even adding your own NPC's. Luckily it does have one awesome feature, which is showing different results pulled from a database based on the checkboxes you have ticked.

![readme](https://user-images.githubusercontent.com/112871518/224820743-732168a9-15da-479d-a278-6f6648ee9c7c.png)

These results are being pulled from a Mongodb database!

## How to install on your own PC

Here is a step by step guide on how to get this application running on your own computer.

### Server

1. Copy the clone repository link
```
https://github.com/spacejump3/blok-tech-matchingapp.git
```
2. In your desired directory, type this:
```console
git clone https://github.com/spacejump3/blok-tech-matchingapp.git
```
3. Install packages
```console
npm install
```
4. Run server
```console
nodemon index.js
```

### MongoDB database
To make sure everything is working, create a database called "runescapeNpcs" with three collections called "adventuring", "combat", and "magic". In each of these collections you can create objects like this:
```js
// Note: this is what you're supposed to add in mongoDB. This is how it would look like in JavaScript
{
  name: "Wise Old Man" // String
  description: "He likes to rob banks" // String
  img: "https://i.imgur.com/bmOXB21.png" // String
  category ["combat", "sara"] // Array
}
```
For the category it's important that you only type the categories in the corresponding collection. For example: you can't have the category "questing" in the combat collection. Here are the categories for each collection:

Combat:
```js
["slayer", "big", "mageCb", "pvp", "range"]
```
Adventuring:
```js
["questing", "bank", "skilling", "farming", "minigames"]
```
Magic:
```js
["sara", "zammy", "guthix", "combat", "runecraft"]
```
The last step is to change the info in const = uri to your own information and you should be set!
