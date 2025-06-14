import { authenticatedAPI } from "./authenticatedapi";

export const getAllListing = async ({
  token,
  page = 1,
  limit = 10,
  startDate,
  endDate,
  minPrice,
  maxPrice,
  availability,
}) => {
  const params = new URLSearchParams();

  // Pagination
  params.append("page", page.toString());
  params.append("limit", limit.toString());

  // Date filters
  if (startDate) params.append("startDate", startDate);
  if (endDate) params.append("endDate", endDate);

  // Price range
  if (minPrice !== undefined) params.append("minPrice", minPrice.toString());
  if (maxPrice !== undefined) params.append("maxPrice", maxPrice.toString());

  // Availability filter
  if (availability !== undefined) params.append("availability", availability.toString());

  const { data } = await authenticatedAPI(token).get(`property/listing?${params.toString()}`);
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
  const { data } = await authenticatedAPI(token).post("property/listing", formData);
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

export const validateAgreement = async ({ token, id }) => {
  const { data } = await authenticatedAPI(token).post(`agreement/validate/${id}`)
  return data;

}


export const terminateBookings = async ({ token, id, credentials }) => {
  const { data } = await authenticatedAPI(token).post(`agreement/terminate/${id}`, credentials)
  return data;

}

// export const terminateTenantAgreement = async ({ token, id, credentials }) => {
//   const { data } = await authenticatedAPI(token).post(
//     `agreement/terminate/${id}`,
//     credentials
//   );
//   console.log(data)
//   return data;
// };



export const getTransaction = async ({ token, page=1, limit=4}) => {
  const { data } = await authenticatedAPI(token).get(`wallet?page=${page}&limit=${limit}`);
  return data;
};

export const publishAgreement = async ({ token, credentials }) => {
  const { data } = await authenticatedAPI(token).post(`agreement/create`,credentials )
  return data;

}
export const downloadAgreement = async ({ token, id }) => {
  const response = await authenticatedAPI(token).get(`agreement/PDF/${id}`, {
    responseType: "blob", 
  });

  return response.data;
};
