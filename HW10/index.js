const BUSINESS_ENTITY_STATUSES = [
  {
    title: "Not Validated",
    value: "not_validated",
  },
  {
    title: "Valid",
    value: "validated",
  },
  {
    title: "Validation Failed KYC",
    value: "validation_failed_kyc",
  },
  {
    title: "Validation Failed OFAC",
    value: "validation_failed_ofac",
  },
  {
    title: "Validation Failed Credit",
    value: "validation_failed_credit",
  },
  {
    title: "Validation Failed KYC Credit",
    value: "validation_failed_kyc_credit",
  },
];

const PAYMENT_PLANS = [
  {
    id: "gdh5h5151515h2t",
    planName: "Standart",
  },
  {
    id: "sth31srth5h11trsh",
    planName: "Low",
  },
  {
    id: "5f515v1515f5",
    planName: "Max",
  },
];

const businessEntities = [
  {
    city: "Edmonton",
    createdAt: "2022-03-28T13:41:06Z",
    id: "51se5eg15ser153515es3rg",
    merchantId: "",
    name: "Alex Inc",
    planId: "gdh5h5151515h2t",
    state: "US-AK",
    status: "not_validated",
  },
  {
    city: "Camptown",
    createdAt: "2022-03-28T13:41:06Z",
    id: "srt3b881srt618618srt618t",
    merchantId: "",
    name: "Alex Inc 2",
    planId: "gdh5h5151515h2t",
    state: "US-AK",
    status: "validated",
  },
  {
    city: "Chicago",
    createdAt: "2022-03-28T13:41:06Z",
    id: "srth351srth15trh13",
    merchantId: "",
    name: "Mego Inc",
    planId: "5f515v1515f5",
    state: "US-AK",
    status: "validation_failed_ofac",
  },
  {
    city: "California",
    createdAt: "2022-03-28T13:41:06Z",
    id: "srth7htsr1trsh424212strh",
    merchantId: "",
    name: "Nick Inc",
    planId: "5f515v1515f5",
    state: "US-AK",
    status: "validated",
  },
];

const render = () => {
  resultBlock = document.querySelector(".result");
  let tmpPlanName;
  let tmpStatus;

  businessEntities.forEach((key) => {
    PAYMENT_PLANS.find((item) => {
      item.id === key.planId ? (tmpPlanName = item.planName) : null;
    });

    BUSINESS_ENTITY_STATUSES.find((item) =>
      item.value === key.status ? (tmpStatus = item.title) : null
    );

    resultBlock.insertAdjacentHTML(
      "beforeend",
      `
    <div class = "output-block">
      <p>Name: ${key.name}<p>
      <p>Location: ${key.state}</p>
      <p>ID: ${key.id}</p>
      <p>Payment: ${tmpPlanName}</p>
      <p class ="${tmpStatus === "Valid" ? "valid" : "unvalid"}">
        Status: ${tmpStatus}
      </p>
    </div>
  `
    );
  });
};
render();
