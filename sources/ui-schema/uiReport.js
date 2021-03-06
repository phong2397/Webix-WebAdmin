export const dataListSchema = {
  customerName: "",
  orderId: "",
  requestTime: "",
  customerName: "",
  requestAmount: "",
  amountAvailable: "",
};

export const dataDetailSchema = {
  customerName: "",
  customerId: "",
  companyId: "",
  companyName: "",
  companyShortName: "",

  //order
  orderId: "",
  requestId: "",
  requestTime: "",
  requestAmount: "",
  // productId: "",
  bankNo: "",
  bankName: "",
  accountNo: "",
  amountAvailable: "",
  orderStage: "",
  orderStatus: "",

  //product
  // NOTE: error show in detail, MUST CHECK
  // product: {
  //   productId: "",
  //   productName: "",
  //   productShortName: "",
  //   principal: "",
  //   interestRatePerPeriod: "",
  //   feePerPeriod: "",
  //   period: "",
  //   penalty: "",
  //   status: "",
  // },

  //disbursement
  disbursement: {
    transacionId: "",
    transactionPaymentGateway: "",
    paymentGatewayInfo: {
      ResponseCode: "",
      ResponseMessage: "",
    },
    amountDisburse: "",
    disburseAt: "",
    disburseBy: "",
    paymentGatewayName: "",
    bankNo: "",
    bankName: "",
    accountNo: "",
    status: "",
  },
  // repayment
  repayment: {},
};

export const objectNamed = {
  orderId: "Mã số đơn hàng",
  productId: "Mã số sản phẩm",
  customerId: "Mã số khách hàng",
  customerName: "Tên khách hàng",
  companyId: "Mã số công ty",
  companyName: "Tên công ty",
  companyShortName: "Tên công ty rút gọn",
  bankNo: "Mã số ngân hàng",
  bankName: "Tên ngân hàng",
  accountNo: "Số tài khoản",
  amountAvailable: "Số tiền có thẻ rút",
  requestId: "Mã số yêu cầu",
  requestTime: "Thời gian yêu cầu",
  requestAmount: "Số tiền yêu cầu",
  orderStage: "Giai đoạn đăt hàng",
  orderStatus: "Trạng thái đơn vay",
  appraisal: "Thẩm định",
  status: "Thành công",
  lastApproveAt: "Thời gian thẩm định cuối cùng",
  lastApproveBy: "Người thẩm định cuối cùng",
  note: "Ghi chú",
  disbursement: "Giải ngân",
  transacionId: "Mã số giao dịch",
  status: "Trạng thái",
  disburseAt: "Thời gian giải ngân ",
  disburseBy: "Người giải ngân",
  paymentGatewayName: "Tên cổng thanh toán",
  bankNo: "Mã số ngân hàng",
  bankName: "Tên ngân hàng",
  accountNo: "Mã số nhân viên",
  amountDisburse: "Số tiền giải ngân",
  transactionPaymentGateway: "Mã số giao dịch từ cổng thanh toán",
  paymentGatewayInfo: "Thông tin cổng thanh toán",
  ResponseCode: "Mã phản hồi",
  ResponseMessage: "Tin nhắn phản hồi",
  product: "Sản phẩm",
  productId: "Mã sản phẩm",
  productName: "Tên sản phẩm",
  productShortName: "Tên sản phẩm viết tắt",
  principal: "Tiền gốc",
  interestRatePerPeriod: "Lãi",
  feePerPeriod: "Phí",
  penalty: "Phạt",
  period: "Giai đoạn",
};
