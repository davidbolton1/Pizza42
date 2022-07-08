exports.onExecutePostLogin = async (event, api) => {
    const namespace = 'https://quickstarts/api';
    const { orders } = event.user.user_metadata.orders;
  
    if (event.authorization) {
      // Set claims 
      api.idToken.setCustomClaim(`${namespace}/external-api`, orders);
    }
  };
