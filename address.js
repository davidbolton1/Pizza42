// Initialize a management client
var ManagementClient = require('auth0').ManagementClient;
// Setup domain and point to the M2M test app
// Give proper scopes for updating metadata
var auth0 = new ManagementClient({
    domain: "pocsetup.us.auth0.com",
    clientId: "Rkr5gvfOfQI6GgA3y90U8KIjBFlcEPkJ",
    clientSecret: '8hpb1FLclLjimjt5uXA0WH4uP36NT9aSh5XPOlrWYX3BfXQuOpo-ngIUknceRGtN',
    scope: 'read:users update:users update:users_app_metadata'
});

exports.updateUserAddress = (userId, address) => {

    auth0
        .getUser(userId)
        // console.log(userId)
        .then(function (user) {
            var currentMetadata = user[0].user_metadata;
            //console.log (currentMetadata)
            if (typeof currentMetadata !== 'undefined' && currentMetadata !== null) {
               // add the pizza to the order
                //currentMetadata.Orders.push(address);
                currentMetadata = {
                    Address: [address]
                }
            } else {
                // Otherwise metadata is set to the orders object
                currentMetadata = {
                    Address: [address]
                }
            }

            var params = { id: userId };
            var metadata = currentMetadata;

            auth0.updateUserAddress(params, metadata, function (err, user) {
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