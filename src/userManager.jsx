import { createUserManager } from "redux-oidc";

const clientId = "ca7613a5-3c45-4eeb-b8b1-d4fc826a56e9"; //GUID Client Application ID
const tenantId = "lmazure01.onmicrosoft.com"; //GUID Azure Tenant ID
const resourceId = "8749e92c-00f6-44d5-bdf9-05045aa011d4"; //GUID API Application ID

const userManagerConfig = {
  authority: `https://login.microsoftonline.com/${tenantId}/.well-known/openid-configuration`,
  client_id: clientId,
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : "" }/callback`,
  post_logout_redirect_uri: `${window.location.protocol}//${ window.location.hostname }${window.location.port ? `:${window.location.port}` : ""}`,
  automaticSilentRenew: false,
  filterProtocolClaims: true,
  loadUserInfo: false,
  scope: "openid profile ",
  response_type: "token id_token",
  extraQueryParams: {
    resource: resourceId
  }
};

const userManager = createUserManager(userManagerConfig);

export default userManager;