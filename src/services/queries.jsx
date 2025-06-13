import { authenticatedAPI } from "./authenticatedapi";

export const getAllListing = async ({ token }) => {
    const { data } = await authenticatedAPI(token).get("property/listing");
    return data;

};

export const getAccount = async ({ token }) => {
    const { data } = await authenticatedAPI(token).get("account");
    return data;

};

export const updateAccount = async ({ token, formData }) => {
  const { data } = await authenticatedAPI(token).patch("account", formData);
  return data;
};

export const changePassword = async ({ token, credentials }) => {
  const { data } = await authenticatedAPI(token).post("account/password/change", credentials);
  return data;
};

export const addLandlordProperty = async ({ token, formData }) => {
  const { data } = await authenticatedAPI(token).post("property/listing/", formData);
  return data;
};


export const deleteLandlordProperty = async ({ token, listingId }) => {
  const { data } = await authenticatedAPI(token).delete(`property/listing/${listingId}`);
  return data;
};


export const updateAvatar = async (formData, token) => {
  const { data } = await authenticatedAPI(token).patch("account/picture", formData);
  return data;
};

export const updateSignature = async (formData, token) => {
  const { data } = await authenticatedAPI(token).patch("account/signature", formData);
  return data;
};


export const getWalletBalance = async ({ token }) => {
    const { data } = await authenticatedAPI(token).get("wallet/balance");
    return data;

};

export const getAgreement = async ({ token }) => {
    const { data } = await authenticatedAPI(token).get("agreement");
    return data;

};

export const getBankCodes = async ({ token }) => {
    const { data } = await authenticatedAPI(token).get("wallet/banks");
    return data;

};


export const resolveAccountNumber = async ({ token, accountNumber, bankCode }) => {
  const { data } = await authenticatedAPI(token).get("wallet/resolve", {
    params: {
      accountNumber,
      bankCode,
    },
  });

  return data;
};

export const walletWithdrawal = async ({ token, credentials }) => {
  const { data } = await authenticatedAPI(token).post("wallet/withdraw", credentials);
  return data;
};

export const walletDeposit = async ({ token, credentials }) => {
  const { data } = await authenticatedAPI(token).post("wallet/deposit", credentials);
  return data;
};

export const getSingleAgreeement = async ({ token, id }) => {
  const { data } = await authenticatedAPI(token).get(`agreement/${id}`)
  return data;

}

export const getTransaction = async ({ token, page=1, limit=4}) => {
  const { data } = await authenticatedAPI(token).get(`wallet?page=${page}&limit=${limit}`);
  return data;
};

export const publishAgreement = async ({ token, credentials }) => {
  const { data } = await authenticatedAPI(token).post(`agreement/create`,credentials )
  return data;

}