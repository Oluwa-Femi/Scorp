# Scorp
SCORP Back-end assessment

# Q1 SOLUTION
- The solution to Q1 is in Q1 folder. Controller function is in controller.js

## FEATURES
- A user can sign up using a username, email and password.
- Each user has an account containing his username, email, full name, profile picture and bio.
- Each user can follow and unfollow another user, and they can see people who they follow or who follows them.
- Each user can like another user’s posts.
- Each user can post a photo which can be seen in his profile in chronological order.

## CHALLENGE
We are implementing a simple procedure to get information for a list of posts that might be used in arbitrary places for our project. (Think of this like a random post feed on Instagram.) Write a simple function (signature is given below) to get all information for given post ids.

Note: You don’t have to adhere to any language or syntax, just make sure that the execution steps are logically correct.

## ASSUMPTIONS
- Assume given post_ids are unique.
- Procedure should return a list of struct Post in the same order as post_ids.
- Procedure should place null values for non-existing posts in the resulting list.
- You can only read from a single table in each query (no joins are allowed).
- You can use this kind of format for executing SQL queries:


