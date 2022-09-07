// Configuration for oidc
const configurationIdentityServer = {
  client_id: 'b3d978b2-2d0e-4986-8ffa-b8733b36b12e',
  redirect_uri:  window.location.origin+'/authentication/callback',
  scope: 'openid profile email offline_access',
  authority: "https://login.microsoftonline.com/c8df0dd8-5437-4836-9c53-8a0a52b171a4/v2.0",
  refresh_time_before_tokens_expiration_in_second: 10
};

// Configuration for roles admin ==> can edit/delete/add ... posts in blog
const roles = {admin: '0362b96d-a505-4462-a040-2b7ca87c6f81'};

export {roles, configurationIdentityServer};
