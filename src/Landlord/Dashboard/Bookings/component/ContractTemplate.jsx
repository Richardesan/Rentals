import React from 'react';

const ContractTemplate = () => ({
  landlordFullName,
  landlordFullAddress,
  agentName,
  agentFullAddress,
  propertyAddress,
  tenantFullName,
  tenantAddress,
  startDate,
  endDate,
  annualRent,
  securityDeposit,
  agentFee,
}) => {
  const rawTemplate = `
    The Landlord/Owner, [LANDLORD FULL NAME] of [LANDLORD FULL ADDRESS], through the Agent, [AGENT NAME] of [AGENT FULL ADDRESS], hereby lets the premises located at [PROPERTY ADDRESS] (the “Property”) to the Tenant, [TENANT FULL NAME] of [TENANT ADDRESS], for a term of one (1) year commencing on [START DATE] and ending on [END DATE], at a rent of ₦[AMOUNT] per annum, payable in advance on or before the first day of each year to the Landlord through the Agent or as otherwise directed. The Tenant shall, prior to occupation, pay a refundable security deposit of ₦[AMOUNT], to be held against damages (excluding reasonable wear and tear), unpaid utilities, and breach of agreement, and shall pay an Agent’s fee of ₦[AMOUNT], representing 10% of the rent, which is non-refundable once the property is handed over. The premises shall be used solely for residential purposes; the Tenant shall not assign, sublet, or part with possession of the Property without prior written consent of the Landlord/Agent, shall keep the premises clean and in good condition, not make structural alterations without written consent, permit the Landlord/Agent to inspect with at least 24 hours’ notice except in emergencies, and pay all utility bills and levies unless otherwise agreed. The Landlord/Agent covenants to ensure the Tenant’s quiet enjoyment, carry out required structural repairs, and ensure the premises are habitable at the start of the tenancy. Either party may terminate this agreement by giving not less than one (1) month’s written notice or payment in lieu, except in cases of breach, where the Landlord/Agent may terminate for non-payment of rent or breach and take possession after giving reasonable notice as required by law. Upon termination, the Tenant shall vacate and return all keys and access cards, and the security deposit shall be refunded within thirty (30) days less deductions for damages, outstanding rent, or unpaid bills. This agreement shall be governed by the laws of the Federal Republic of Nigeria and disputes shall be settled amicably or referred to the appropriate court. The Tenant indemnifies the Landlord and Agent against loss, damage, or liability arising from the Tenant’s use of the premises, save for acts or omissions by the Landlord/Agent. Amendments or waivers must be in writing and signed by all parties; notices shall be in writing and delivered to the above addresses.
  `;

  const filledTemplate = rawTemplate
    .replace(/\[LANDLORD FULL NAME\]/g, landlordFullName)
    .replace(/\[LANDLORD FULL ADDRESS\]/g, landlordFullAddress)
    .replace(/\[AGENT NAME\]/g, agentName)
    .replace(/\[AGENT FULL ADDRESS\]/g, agentFullAddress)
    .replace(/\[PROPERTY ADDRESS\]/g, propertyAddress)
    .replace(/\[TENANT FULL NAME\]/g, tenantFullName)
    .replace(/\[TENANT ADDRESS\]/g, tenantAddress)
    .replace(/\[START DATE\]/g, startDate)
    .replace(/\[END DATE\]/g, endDate)
    .replace(/₦\[AMOUNT\]/, `₦${annualRent}`) // First [AMOUNT] is rent
    .replace(/refundable security deposit of ₦\[AMOUNT\]/, `refundable security deposit of ₦${securityDeposit}`)
    .replace(/Agent’s fee of ₦\[AMOUNT\]/, `Agent’s fee of ₦${agentFee}`);

  return (
    <div className="whitespace-pre-wrap p-4 text-gray-800">
      {filledTemplate}
    </div>
  );
};

export default ContractTemplate;
