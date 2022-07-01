# Pizza42



● The security team would like to offload credential management to the identity solution. Securing their infrastructure is complex and storing credentials raises the level of liability. 

-> Talk about Auth0 benefits, security, 99% availability etc
https://auth0.com/security
https://auth0.com/availability-trust
https://status.auth0.com/

● The product team would like the identity solution to provide a frictionless and customizable login experience. They would like turnkey password reset functionality to reduce help desk call volume. They would also like to provide customers the option to login with their social login provider.

-> Talk about universal login, automatic password reset, built in social login
https://auth0.com/learn/social-login/
https://auth0.com/docs/authenticate/login/auth0-universal-login
https://auth0.com/docs/authenticate/database-connections/password-change

● The marketing team would like the identity solution to enrich customer data as users login. Customer data will be used to drive marketing campaigns to deepen their already loyal customer base and appeal to new customers.

-> Progresive profiling use case
https://auth0.com/blog/how-profile-enrichment-and-progressive-profiling-can-boost-your-marketing/
User meta


Complete the Login portion of the quick start so our Pizza customers can sign in.

-> This is just downloading the SDK, setting the callbacks and adding an auth0.config.json file

Complete the Call an API portion of the quick start so our Pizza customers can store
orders in their profile.

```
// Initialize a management client
var ManagementClient = require('auth0').ManagementClient;
// Setup domain and point to the M2M test app
// Give proper scopes for updating metadata
var auth0 = new ManagementClient({
    domain: "pocsetup.us.auth0.com",
    clientId: "Rkr5gvfOfQI6GgA3y90U8KIjBFlcEPkJ",
    clientSecret: '8hpb1FLclLjimjt5uXA0WH4uP36NT9aSh5XPOlrWYX3BfXQuOpo-ngIUknceRGtN',
    scope: 'read:users update:users'
});

exports.updateUserMetadata = (userId, pizzaName) => {

    auth0
        .getUser(userId)
        // console.log(userId)
        .then(function (user) {
            var currentMetadata = user[0].user_metadata;
            //console.log (currentMetadata)
            if (typeof currentMetadata !== 'undefined' && currentMetadata !== null) {
               // add the pizza to the order
                currentMetadata.Orders.push(pizzaName);
            } else {
                // Otherwise metadata is set to the orders object
                currentMetadata = {
                    Orders: [pizzaName]
                }
            }

            var params = { id: userId };
            var metadata = currentMetadata;

            auth0.updateUserMetadata(params, metadata, function (err, user) {
                if (err) {
                    console.log(err);
                }

                // Verify the user was updated
                console.log(user);
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
```

Give new customers the option to sign up and existing customers to sign in with either
email/password or a social identity provider such as Google.


Require that a customer have a verified email address before placing a pizza order. This
shouldn’t prevent them from signing into the application.


The API endpoint servicing the orders request must require a valid token as well as a
specific scope for the operation to complete.


After an order is placed, save the order to the user’s Auth0 profile for future reference.


Add the order history of a user to their ID token when they login
