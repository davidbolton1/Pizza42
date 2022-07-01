# Pizza42



● The security team would like to offload credential management to the identity solution. Securing their infrastructure is complex and storing credentials raises the level of liability.
● The product team would like the identity solution to provide a frictionless and customizable login experience. They would like turnkey password reset functionality to reduce help desk call volume. They would also like to provide customers the option to login with their social login provider.
● The marketing team would like the identity solution to enrich customer data as users login. Customer data will be used to drive marketing campaigns to deepen their already loyal customer base and appeal to new customers.




1. Sign up for an Auth0 trial (https://auth0.com/signup) and spend some time getting familiar with Applications > Applications and Applications > APIs as well as Authentication > Database and Authentication > Social.
2. Choose the Single-Page App (SPA) option from the Auth0 documentation website (https://auth0.com/docs). SPAs are commonly used by Auth0 customers.
3. Choose a JavaScript framework option.
a. Note, you’ll be shown detailed instructions for completing two foundational
exercises - Login and Call an API (refer to the navigation menu on the left). Included is a link to a GitHub repository. Feel free to base your solution on the sample application in the repository.
4. Complete the Login portion of the quick start so our Pizza customers can sign in.
5. Complete the Call an API portion of the quick start so our Pizza customers can store
orders in their profile.
6. Give new customers the option to sign up and existing customers to sign in with either
email/password or a social identity provider such as Google.
7. Require that a customer have a verified email address before placing a pizza order. This
shouldn’t prevent them from signing into the application.
8. The API endpoint servicing the orders request must require a valid token as well as a
specific scope for the operation to complete.
9. After an order is placed, save the order to the user’s Auth0 profile for future reference.
10. Add the order history of a user to their ID token when they login
