interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [''],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'Ai-HR-Management-Application-2',
  addOns: ['chat', 'notifications', 'file'],
};
