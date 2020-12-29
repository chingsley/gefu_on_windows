function convertToCamelCase(arr, separator) {
  const res = arr.map((field) => {
    return field
      .trim()
      .toLowerCase()
      .split(separator)
      .map((word, i) => {
        console.log('>>>>>>>>>>>>>>. word = ', '<' + word + '>');
        if (i !== 0) {
          return word ? word[0].toUpperCase() + word.slice(1).trim() : '';
        } else {
          return word.trim();
        }
      })
      .join('');
  });
  const { log } = console;
  log(res.join(','));
}

{
  // GEFU FILES
  const arr = [
    'Start Identifier:STRING',
    'Brn Code :STRING',
    'Source Code:STRING',
    'Current No:DOUBLE',
    'Upload Stat:STRING',
    'CCY Code:STRING',
    'Initiation Date:DATE',
    'Amount:DOUBLE',
    'Account No:STRING',
    'Account Brn :STRING',
    'DRCR Ind:STRING',
    'LCY Equivalent:DOUBLE',
    'Exch Rate:DOUBLE',
    'Value Date:DATE',
    'Instr No:STRING',
    'Transactn Code:STRING',
    'Financial Cycle:STRING',
    'Period Code:STRING',
    'Additional Text:STRING',
    'Batch Number of the upload:STRING',
    'Related Customer:STRING',
    'MIS Code:STRING',
    'MIS Group:STRING',
    'MIS Head:STRING',
    'Transaction MIS code 1:STRING',
    'Transaction MIS code 2:STRING',
    'Transaction MIS code 3:STRING',
    'Transaction MIS code 4:STRING',
    'Transaction MIS code 5:STRING',
    'Transaction MIS code 6:STRING',
    'Transaction MIS code 7:STRING',
    'Transaction MIS code 8:STRING',
    'Transaction MIS code 9:STRING',
    'Transaction MIS code 10:STRING',
    'Composite MIS code 1:STRING',
    'Comp MIS 2:STRING',
    'Composite MIS code 3:STRING',
    'Comp MIS 4:STRING',
    'Composite MIS code 5:STRING',
    'Comp MIS 6:STRING',
    'Comp MIS 7:STRING',
    'Comp MIS 8:STRING',
    'Composite MIS code 9:STRING',
    'Composite MIS code 10:STRING',
    'Cost Code 1:STRING',
    'Cost Code 2:STRING',
    'Cost Code 3:STRING',
    'Cost Code 4:STRING',
    'Cost Code 5:STRING',
    'External Ref No:STRING',
    'Related Acct:STRING',
  ];

  // convertToCamelCase(arr, ' ');
}

{
  const arr = [
    'SN:STRING',
    'TRN_REF_NO:STRING',
    'DRCR_IND:STRING',
    'AC_NO:STRING',
    'AC_CCY:STRING',
    'DESCRIPTION:STRING',
    'LCY_AMOUNT:DOUBLE',
    'FCY_AMOUNT:DOUBLE',
    'EVENT:STRING',
    'RRN:STRING',
    'FROM_ACC:STRING',
    'PAN:STRING',
    'STAN:STRING',
    'TERM_ID:STRING',
    'TRN_DT:DATE',
    'VALUE_DT:DATE',
    'EXTERNAL_REF_NO:STRING',
    'TRN_CODE:STRING',
    'INSTRUMENT_CODE:STRING',
    'USER_ID:STRING',
    'PRE_AUTH_SEQ_NO:STRING',
    'AUTH_ID:STRING',
  ];

  // convertToCamelCase(arr, '_');
}

{
  const arr = [
    'MSG_TYPE:STRING',
    'ONLINE_SETTLEMENT_DATE:DATE',
    'IIN:STRING',
    'RAW_DATA_RECIPIENT:STRING',
    'TERMINAL_ID:STRING',
    'CARD_NUMBER:STRING',
    'CARD_SEQ:STRING',
    'TRANSACTION_AMOUNT:DOUBLE',
    'DRCR_TRANSACTION_AMT_I:STRING',
    'TRANSACTION_AMT_CURRENCY_CODE:STRING',
    'SETTLEMENT_AMOUNT:DOUBLE',
    'DRCR_SETTLEMENT_I:STRING',
    'SETTLEMENT_AMT_CURRENCY_CODE:STRING',
    'INTERCHANGE_FEE:DOUBLE',
    'DRCR_IF_I:STRING',
    'LOCAL_TRANSACTION_DATE:DATE',
    'LOCAL_TRANSACTION_TIME:DATE',
    'TRACE_NUMBER:STRING',
    'RESPONSE_DESCRPTION:STRING',
    'TRANSACTION_TYPE:STRING',
    'FROM_ACCOUNT_TYPE:STRING',
    'TO_ACCOUNT_TYPE:STRING',
    'SETTLEMENTMENT_SERVICE_SELECTED:STRING',
    'APPROVAL_CODE:STRING',
    'ACQRRN:STRING',
    'ORIGINAL_AMOUNT:DOUBLE',
    'PROCESSOR_ID:STRING',
    'SWITCH_SERIAL_ID:STRING',
    'REPORT_OWNER_TYPE:STRING',
    'ACCESS_FEE:DOUBLE',
    'DRCR_ACCESS_FEE_I:STRING',
    'EXCHANGE_RATE:DOUBLE',
    'MCC:STRING',
    'POS_ENTRY_MODE:STRING',
    'TRAN_NUMBER:STRING',
    'ADVICE_REASON_CODE:STRING',
    'TRANS_ID:STRING',
    'REVREQUEST_ID:STRING',
    'ADJUSTMENT_AMT_LOCAL:DOUBLE',
    'DRCR_AAL_I:STRING',
    'REQAMTTRX_LOCAL:DOUBLE',
    'DRCR_AAS_I:STRING',
    'BRAND:STRING',
    'ORG_AMOUNT_REQ:DOUBLE',
    'PROC_ACQ_ISS:STRING',
    'CARD_HOLDER_BILLING:DOUBLE',
    'DRCR_CHB_I:STRING',
    'CASHBACK_AMT:DOUBLE',
    'DRCR_CASHBACK_I:STRING',
    'SERVICE_LEV_INDICATOR:STRING',
    'CROSS_BORDER_INDICATOR:STRING',
    'CROSS_BORDER_CURR_INDICATOR:STRING',
    'FEPRRN:STRING',
    'SWITCH_SERIAL_ID:STRING',
    'EXTRRN:STRING',
    'ACQSTAN:STRING',
    'ORIG_TYPE:STRING',
    'ISSUER_FI_ID:STRING',
    'ACQUIRE_RFI_ID:STRING',
    'ORIG_ID:STRING',
  ];
  // convertToCamelCase(arr, '_');
}

{
  const arr = [
    'Message Type Indicator:STRING',
    'Switch Serial Number:STRING',
    'Processor Acquirer or Issuer:STRING',
    'Processor Id:STRING',
    'Transaction Date:DATE',
    'Transaction Time:STRING',
    'Pan Length:STRING',
    'Pan:STRING',
    'Processing Code:STRING',
    'STAN:STRING',
    'MCC:STRING',
    'Pos Entry:STRING',
    'Reference Number:STRING',
    'Acquirer Inst Id:STRING',
    'Terminal Id:STRING',
    'Response Code:STRING',
    'Brand:STRING',
    'Advice Reason Code:STRING',
    'Intracurrency Agreement Code:STRING',
    'Authorization ID:STRING',
    'Currency Code Transaction:STRING',
    'Implied Decimal Transaction:STRING',
    'Completed Amount Trans Local:DOUBLE',
    'Completed Amount Transaction Local DR CR Indicator:STRING',
    'Cash Back Amount Local:DOUBLE',
    'Cash Back local DR CR Indicator:STRING',
    'Access Fee Local:DOUBLE',
    'Access Fee Local DR CR Indicator:STRING',
    'Currency Code Settlement:STRING',
    'Implied Decimal Settlement:STRING',
    'Conversion Rate Settlement:DOUBLE',
    'Completed Amount Settlement:DOUBLE',
    'Completed Amount Settlement DR CR Indicator:STRING',
    'Interchange Fee:DOUBLE',
    'Interchange Fee DR CR Indicator:STRING',
    'Service Level Indicator:STRING',
    'Response code:STRING',
    'Filler:STRING',
    'Positie ID Indicator:STRING',
    'ATM Surcharge Free Program Id:STRING',
    'Cross Border Indicator:STRING',
    'Cross Border Currency Indicator:STRING',
    'VISA Fee Indicator:STRING',
    'Requested Amount Trans Local:DOUBLE',
    'Trace Number Adjustment Trans:STRING',
    'SWITCH SERIAL NUMBER:STRING',
    'ACCOUNT 1 FROM:STRING',
    'CARD ACCEPTOR NAME ADDR:STRING',
    'CARD ACCEPTOR CITY:STRING',
    'CARD ACCEPTOR CITY:STRING',
  ];
  // convertToCamelCase(arr, ' ');
}

{
  const arr = [
    'Message Type Indicator',
    'Switch Serial Number',
    'Transaction Date',
    'Pan',
    'STAN',
    'Reference Number',
    'Terminal Id',
    'Intracurrency Agreement Code',
    'Authorization ID',
    'Currency Code Transaction',
    'Completed Amount Settlement',
    'Completed Amount Settlement DR CR Indicator',
    'Interchange Fee',
    'Interchange Fee DR CR Indicator',
    'CARD ACCEPTOR NAME AND ADDR',
    'CARD ACCEPTOR CITY',
  ];
  const requiredFields = [
    'messageTypeIndicator',
    'switchSerialNumber',
    'transactionDate',
    'pan',
    'stan',
    'referenceNumber',
    'terminalId',
    'intracurrencyAgreementCode',
    'authorizationId',
    'currencyCodeTransaction',
    'completedAmountSettlement',
    'completedAmountSettlementDrCrIndicator',
    'interchangeFee',
    'interchangeFeeDrCrIndicator',
    'cardAcceptorNameAndAddr',
    'cardAcceptorCity',
  ];
  // convertToCamelCase(arr, ' ');
}

{
  const arr = [
    'Date_Time:DATE',
    'Bank_Card_Brand:STRING',
    'Currency_Name:STRING',
    'Local_Date_Time:DATE',
    'Terminal_ID:STRING',
    'Merchant_ID:STRING',
    'Merchant_Name_Location:STRING',
    'STAN:STRING',
    'PAN:STRING',
    'Message_Type:STRING',
    'From_Account_ID:STRING',
    'From_Account_Type:STRING',
    'To_Account_ID:STRING',
    'To_Account_Type:STRING',
    'Card_Account_Nr:STRING',
    'Tran_Type_Description:STRING',
    'Beneficiary_Account:STRING',
    'Response_Code_Description:STRING',
    'Tran_Amount_Req:DOUBLE',
    'Tran_Amount_Rsp:DOUBLE',
    'Surcharge:DOUBLE',
    'Amount_Impact:DOUBLE',
    'Settlement_Impact:DOUBLE',
    'Settlement_Impact_Desc:DOUBLE',
    'Auth_ID:STRING',
    'Tran_ID:STRING',
    'Retrieval_Reference_Nr:STRING',
    'Totals_Group:STRING',
    'Region:STRING',
    'Transaction_Status:STRING',
    'Transaction_Type_Impact:STRING',
    'Message_Type_Desc:STRING',
    'Trxn_Category:STRING',
  ];
  // convertToCamelCase(arr, '_');
}
{
  const arr = [
    'Session Id:STRING',
    'Transaction date:DATE',
    'Session Start Time:DATE',
    'Session End Time:DATE',
    'Transaction Amount:DOUBLE',
    'Response:STRING',
    'Merchant Account Number:STRING',
    'Merchant Bank Account:STRING',
    'Merchant Name:STRING',
    'Merchant Id:STRING',
    'Terminal Id:STRING',
    'Terminal Location:STRING',
    'Approval Code:STRING',
    'MSC percentage:STRING',
    'MSC:DOUBLE',
    'Amount Payable to Merchant:DOUBLE',
    'Amount Due to Acquirer:DOUBLE',
    'Amount Due to Issuer:DOUBLE',
    'Amount Due to PTSP:DOUBLE',
    'Amount Due to PSSP:DOUBLE',
    'Amount Due to USSD Aggregator:DOUBLE',
    'Amount Due to Switch:DOUBLE',
    'Amount Due to Terminal Owner:DOUBLE',
    'Amount Due to Platform Provider:DOUBLE',
    'Amount Due to AGent:DOUBLE',
    'Transaction Type:STRING',
    'USSD Debit Account Number:STRING',
    'Account Name:STRING',
    'Mobile Number:STRING',
    'Short Code:STRING',
    'Transaction Id:STRING',
    'Sequence Number:STRING',
    'Reference Number:STRING',
    'Acquirer:STRING',
    'Issuer:STRING',
    'Narration:STRING',
    'PTSP:STRING',
    'Terminal Owner:STRING',
    'PTO Fees:STRING',
    'Instant Settlement:STRING',
    'Trans Ref:STRING',
    'MCC:STRING',
    'Category:STRING',
    'Settlement Amount:DOUBLE',
    'Sub Merchant Name:STRING',
    'TRACE ID:STRING',
  ];
  // convertToCamelCase(arr, ' ');
}

{
  const arr = [
    'vendConfirmationDate:DATE',
    'vendInitializationDate:DATE',
    'transactionId:STRING',
    'paymentReference:STRING',
    'cpVASBillerReference:STRING',
    'productCode:STRING',
    'vendStatus:STRING',
    'amount:DOUBLE',
    'convenienceFee:DOUBLE',
    'orderId:STRING',
    'customerId:STRING',
    'customerName:STRING',
    'accountNumber:STRING',
    'phoneNumber:STRING',
    'sourcePhoneNumber:STRING',
    'email:STRING',
    'district:STRING',
    'address:STRING',
    'channel:STRING',
    'narration:STRING',
    'billerId:STRING',
    'packageId:STRING',
    'userId:STRING',
    'institutionId:STRING',
    'markReversal:STRING',
    'isReversed:STRING',
    'reversalDate:DATE',
    'nextRequeryTime:DATE',
    'markForRevend:STRING',
    'cgatePaymentCode:STRING',
    'billerVendStatus:STRING',
    'standardToken:STRING',
    'bonusToken:STRING',
    'tokenReceiptNumber:STRING',
  ];
  // console.log(arr.join(','));
}

{
  const arr = [
    'SN:STRING',
    'VSS_PROCESSING_DATE:DATE',
    'VNPSETT_DATE:DATE',
    'TERMINAL_ID:STRING',
    'ATM_ACQUIRER:STRING',
    'ATM_LOCATION:STRING',
    'CARD_NUMBER:STRING',
    'CARD_SEQ:STRING',
    'TRANSACTION_AMOUNT:DOUBLE',
    'ISSUER:STRING',
    'SETTLEMENT_AMOUNT:DOUBLE',
    'LOCAL_TRANSACTION_DATE:DATE',
    'LOCAL_TRANSACTION_TIME:DATE',
    'TRACE_NUMBER:STRING',
    'APPROVAL_CODE:STRING',
    'RESPONSE_DESC:STRING',
    'TRANSACTION_TYPE:STRING',
    'ACQRRN:STRING',
    'ACQSTAN:STRING',
    'ISSUER_BIN:STRING',
    'TRANS_ID:STRING',
    'REVREQUEST_ID:STRING',
    'ISSUER_STAN:STRING',
    'ORIG_TYPE_DESC:STRING',
    'PHASE:STRING',
    'DEBIT_CREDIT:STRING',
    'VISA_R_R_N:STRING',
    'ACQ_REIMBURSEMENT_FEE_N_G_N:STRING',
    'ISSUER_R_R_N:STRING',
  ];
  // convertToCamelCase(arr, '_');
}

{
  const arr = [
    'TRANSACTION ID:STRING',
    'TRANSACTION TYPE:STRING',
    'TRANSACTION DATETIME:DATE',
    'SETTLEMENT SERVICE:STRING',
    'SETTLEMENT DATE:DATE',
    'UPPD:DATE',
    'MEB BATCH NUMBER:STRING',
    'CLEARING DATE:DATE',
    'APPROVAL CODE:STRING',
    'DOCNO:STRING',
    'UP BATCH ID:STRING',
    'SEQUENCE NUMBER:STRING',
    'INVOICE NUM:STRING',
    'TRAN NUMBER:STRING',
    'SIGN:STRING',
    'SECTOR CODE:STRING',
    'SECTOR DESCRIPTION:STRING',
    'RETAILER ID:STRING',
    'RETAILER NAME:STRING',
    'RETAILER OUTLET NAME:STRING',
    'MCC CODE:STRING',
    'TERMINAL ID:STRING',
    'TERMINAL LOCATION:STRING',
    'MERCHANT DEPOSIT BANK CODE:STRING',
    'MERCHANT DEPOSIT BANK NAME:STRING',
    'MERCHANT BANK ACCOUNT:STRING',
    'VENDOR ID:STRING',
    'VENDOR CODE:STRING',
    'VENDOR NAME:STRING',
    'ACQUIRER NAME:STRING',
    'ACQUIRER REFERENCE NUMBER:STRING',
    'ACQ COUNTRY:STRING',
    'ACQ STAN:STRING',
    'ISSUER BANK:STRING',
    'ISS COUNTRY CODE:STRING',
    'ISSUER R R N:STRING',
    'ISS STAN:STRING',
    'CARD SCHEME:STRING',
    'MASKED PAN:STRING',
    'PHONE NO:STRING',
    'ISSFIID:STRING',
    'TRAN AMOUNT:DOUBLE',
    'ORIGINAL AMOUNT:DOUBLE',
    'DOLLAR AMOUNT:DOUBLE',
    'STANDARD EXCHANGE RATE VALUE:DOUBLE',
    'EXCHANGE RATE MARKUP VALUE:DOUBLE',
    'SETTLEMENT EXCHANGE RATE VALUE:DOUBLE',
    'TRANSACTION CURRENCY CODE:STRING',
    'SETTLEMENT CURRENCY CODE:STRING',
    'LCY AMOUNT:DOUBLE',
    'TOTAL MSC RATE:DOUBLE',
    'MSCCAP:DOUBLE',
    'LCY MSC VALUE:DOUBLE',
    'VAT CHARGE:DOUBLE',
    'DOLLAR MSC VALUE:DOUBLE',
    'LCY AMOUNT DUE MERCHANT:DOUBLE',
    'DOLLAR AMOUNT DUE MERCHANT:DOUBLE',
    'AGENT ACCOUNT:STRING',
    'AGENT NAME:STRING',
    'AGENT RATE:DOUBLE',
    'AGENT FEE:DOUBLE',
    'ICC:STRING',
    'APPLIED MSC:DOUBLE',
    'STAMPDUTY AMOUNT:DOUBLE',
    'SUBSIDY RATE:DOUBLE',
    'SUBSIDY VALUE:DOUBLE',
    'STAMPDUTY SUBSIDY RATE:DOUBLE',
    'STAMPDUTY SUBSIDY VALUE:DOUBLE',
    'ISSUER NAME:STRING',
    'PTSP NAME:STRING',
    'PTSP RATE:DOUBLE',
    'PTSP FEE:DOUBLE',
    'PTSP VAT:DOUBLE',
    'PTSA NAME:STRING',
    'PTSA RATE:DOUBLE',
    'PTSA FEE:DOUBLE',
    'PTSA VAT:DOUBLE',
    'ACQUIRER NAME:STRING',
    'ACQUIRER RATE:DOUBLE',
    'ACQUIRER FEE:DOUBLE',
    'ACQUIRER VAT:DOUBLE',
    'SWITCH NAME:STRING',
    'SWITCH RATE:DOUBLE',
    'SWITCH FEE:DOUBLE',
    'SWITCH VAT:DOUBLE',
    'TERMINAL  OWNER NAME:STRING',
    'TERMINAL OWNER  RATE:DOUBLE',
    'TERMINAL OWNER FEE:DOUBLE',
    'TERMINAL OWNER VAT:DOUBLE',
    'BIFEE:STRING',
    'TEXTMESS:STRING',
    'BIFEE2:STRING',
    'SERVICE PROVIDER:STRING',
    'SERVICE PROVIDER BANK CODE:STRING',
    'SERVICE PROVIDER BANK:STRING',
    'SERVICE PROVIDER ACCOUNT NO:STRING',
    'REMARK:STRING',
    'UPHSS_TRANSREF:STRING',
    'UPHSS:STRING',
    'ORIGINATOR:STRING',
    'REPORT TYPE:STRING',
    'STAMPDUTY:DOUBLE',
    'MDB VAT:DOUBLE',
  ];
  // convertToCamelCase(arr, ' ');
}

{
  const arr = [
    'TRANSACTION ID:STRING',
    'TRANSACTION TYPE:STRING',
    'TRANSACTION DATE TIME:DATE',
    'SETTLEMENT SERVICE:STRING',
    'SETTLEMENT DATE:DATE',
    'UPPD:DATE',
    'CLEARING DATE:DATE',
    'APPROVAL CODE:STRING',
    'DOCNO:STRING',
    'SEQUENCE NUMBER:STRING',
    'TRAN NUMBER:STRING',
    'SECTOR CODE:STRING',
    'SECTOR DESCRIPTION:STRING',
    'RETAILER ID:STRING',
    'RETAILER NAME:STRING',
    'RETAILER OUTLET NAME:STRING',
    'MCC CODE:STRING',
    'TERMINAL ID:STRING',
    'TERMINAL LOCATION:STRING',
    'ACQUIRER NAME:STRING',
    'ACQUIRER REFERENCE NUMBER:STRING',
    'ACQCOUNTRY:STRING',
    'ACQSTAN:STRING',
    'ISS COUNTRY CODE:STRING',
    'ISSUER R R N:STRING',
    'ISS STAN:STRING',
    'CARD SCHEME:STRING',
    'MASKED PAN:STRING',
    'CARD HOLDER ACCOUNT NO:STRING',
    'PHONE NO:STRING',
    'ISSFIID:STRING',
    'TRAN AMOUNT:DOUBLE',
    'TRANSACTION CURRENCY CODE:STRING',
  ];
  // convertToCamelCase(arr, ' ');
}

{
  const arr = [
    'TRANSACTION ID:STRING',
    'TRANSACTION TYPE:STRING',
    'TRANSACTION DATE TIME:DATE',
    'SETTLEMENT SERVICE:STRING',
    'SETTLEMENT DATE:DATE',
    'UPPD:DATE',
    'CLEARING DATE:DATE',
    'APPROVAL CODE:STRING',
    'DOCNO:STRING',
    'SEQUENCE NUMBER:STRING',
    'TRAN NUMBER:STRING',
    'SECTOR CODE:STRING',
    'SECTOR DESCRIPTION:STRING',
    'RETAILER ID:STRING',
    'RETAILER NAME:STRING',
    'RETAILER OUTLET NAME:STRING',
    'MCC CODE:STRING',
    'TERMINAL ID:STRING',
    'TERMINAL LOCATION:STRING',
    'ACQUIRER NAME:STRING',
    'ACQUIRER REFERENCE NUMBER:STRING',
    'ACQCOUNTRY:STRING',
    'ACQSTAN:STRING',
    'ISS COUNTRY CODE:STRING',
    'ISSUER R R N:STRING',
    'ISS STAN:STRING',
    'CARD SCHEME:STRING',
    'MASKED PAN:STRING',
    'CARD HOLDER ACCOUNT NO:STRING',
    'PHONE NO:STRING',
    'ISSFIID:STRING',
    'TRAN AMOUNT:DOUBLE',
    'TRANSACTION CURRENCY CODE:STRING',
  ];
  // convertToCamelCase(arr, ' ');
}
{
  const arr = [
    'SN:STRING',
    'Settlement Date:DATE',
    'CPD:DATE',
    'RETAILER:STRING',
    'RETAILER ID:STRING',
    'TERM:STRING',
    'LOCATION:STRING',
    'TRANX TYPE:STRING',
    'AMOUNT:DOUBLE',
    'IRF Percentage:DOUBLE',
    'PROC FEE:DOUBLE',
    'PROC FEE VAT:DOUBLE',
    'IRF:DOUBLE',
    'IRF VAT:DOUBLE',
    'AMT PAYABLE:DOUBLE',
    'MASKED PAN:STRING',
    'TRAN DATE:DATE',
    'APPROVAL CODE:STRING',
    'CARD AC NO:STRING',
    'ISSUER STAN:STRING',
    'ACQSTAN:STRING',
    'CARD TYPE:STRING',
    'ISSUER BIN:STRING',
    'ID:STRING',
    'ISSUER R R N:STRING',
    'TRAN NUMBER:STRING',
    'ACQUIRER NAME:STRING',
  ];
  // convertToCamelCase(arr, ' ');
}
{
  const arr = [
    'tran desc:STRING',
    'tran type:STRING',
    'debit account:STRING',
    'bank customer credit account:STRING',
    'customer id:STRING',
    'initiating pan:STRING',
    'rrn:STRING',
    'amount:DOUBLE',
    'conversion rate:DOUBLE',
    'credit pan:STRING',
    'credit account:STRING',
    'tran date:DATE',
    'approval code:STRING',
    'terminal:STRING',
    'stan:STRING',
    'processing code:STRING',
    'acqinst id:STRING',
    'pos entry mode:STRING',
    'pos condition:STRING',
    'tran currency:STRING',
    'billing currency:STRING',
    'merchant:STRING',
    'term city:STRING',
    'term address:STRING',
    'term region:STRING',
    'request rec date:DATE',
    'datesento authoriser:DATE',
    'authoriser response date:STRING',
    'response date:STRING',
    'reconciliation api resp code:STRING',
    'reconciliation api resp desc:STRING',
  ];
  // convertToCamelCase(arr, ' ');
}
{
  const arr = [
    'Institution Name:STRING',
    'Cleared Collections:DOUBLE',
    'Earning As Collecting Bank:DOUBLE',
    'Earning As Lead Bank:DOUBLE',
    'Earning For Remittance To ISO:DOUBLE',
    'Service Provider Earnings:DOUBLE',
    'Terminal Owner Earnings:DOUBLE',
    'Split C R :DOUBLE',
    'Split D R	:DOUBLE',
    'Settlement Amount:DOUBLE',
  ];
  // convertToCamelCase(arr, ' ');
}

{
  const arr = [
    'Issuer Acquirer Indicator:STRING',
    'Affiliate BIN:STRING',
    'Settlement Date:DATE',
    'Transaction Identifier:STRING',
    'Retrieval Reference Number:STRING',
    'Trace Number:STRING',
    'Response Code:STRING',
    'Processing Code:STRING',
    'Card Number:STRING',
    'Transaction Amount:DOUBLE',
    'Currency Code:STRING',
    'Local Transaction Date:DATE',
    'Local Transaction Time:DATE',
    'Authorization ID Resp Code:STRING',
    'Card Acceptor ID:STRING',
    'Card Acceptor Name:STRING',
    'Card Acceptor City:STRING',
    'V22260 Settlement Amount:DOUBLE',
    'V22260 Settlement Currency Code:STRING',
    'Reimbursement Fee:DOUBLE',
    'Reimbursement Fee Debit Credit Indicator:STRING',
  ];
  // convertToCamelCase(arr, ' ');
}
{
  const arr = [
    'TRANSACTION CODE:STRING',
    'FULL PAN:STRING',
    'ARN:STRING',
    'MONTH:DATE',
    'DAY:DATE',
    'SETTLED AMOUNT:DOUBLE',
    'CURRENCY CODE:STRING',
    'DESCRIPTION:STRING',
    'COUNTRY:STRING',
    'APPROVAL CODE:STRING',
  ];
  // convertToCamelCase(arr, ' ');
}

{
  const arr = [
    'Date_Time:DATE',
    'Currency_Name:STRING',
    'Local_Date_Time:DATE',
    'Terminal_ID:STRING',
    'Merchant_ID:STRING',
    'Merchant_Name_Location:STRING',
    'STAN:STRING',
    'PAN:STRING',
    'Message_Type:STRING',
    'From_Account_ID:STRING',
    'Account_Nr:STRING',
    'Bank_Name:STRING',
    'From_Account_Type:STRING',
    'Tran_Type_Description:STRING',
    'Response_Code_Description:STRING',
    'Tran_Amount_Req:DOUBLE',
    'Tran_Amount_Rsp:DOUBLE',
    'Surcharge:DOUBLE',
    'Amount_Impact:DOUBLE',
    'Merch_Cat_Category_Name:STRING',
    'Merch_Cat_Visa_Category_Name:STRING',
    'Merch_Cat_Visa_Category_Name1:STRING',
    'Settlement_Impact:DOUBLE',
    'Settlement_Impact_Desc:STRING',
    'Merchant_Discount:DOUBLE',
    'Merchant_Receivable:DOUBLE',
    'Auth_ID:STRING',
    'Tran_ID:STRING',
    'Retrieval_Reference_Nr:STRING',
    'Totals_Group:STRING',
    'Region:STRING',
    'Transaction_Status:STRING',
    'Card_Route:STRING',
    'Transaction_Type_Impact:STRING',
    'Reversal_Status:STRING',
    'Message_Type_Desc:STRING',
    'Trxn_Category:STRING',
  ];
  // convertToCamelCase(arr, '_');
}

{
  const arr = [
    'Merchant Id:STRING',
    'ACCT NO:STRING',
    'Merchant Name:STRING',
    'Terminal Id:STRING',
    'MID:STRING',
    'RRN:STRING',
    'STAN:STRING',
    'PAN:STRING',
    'BIN1:STRING',
    'BIN2:STRING',
    'ISSUER:STRING',
    'CARD:STRING',
    'Amount:DOUBLE',
    'MCC:DOUBLE',
    'MSC RATE:STRING',
    'CHARGES:DOUBLE',
    'AMT DUE:DOUBLE',
    'Currency:STRING',
    'Message type:STRING',
    'Transaction Type:STRING',
    'Status:STRING',
    'Response:STRING',
    'RESP DESC:STRING',
    'Date Time:DATE',
  ];
  // convertToCamelCase(arr, ' ');
}
{
  const arr = [
    'DESCRIPTION:STRING',
    'ACCOUNT_NUMBER:STRING',
    'RRN_NUMBER:STRING',
    'STAN_NUMBER:STRING',
    'CUSTOMER_NAME:STRING',
    'AMOUNT:NUMBER',
    'CARD_PAN:STRING',
    'LOG_CODE:STRING',
    'CURRENT_STATUS:STRING',
    'GL_NARRATION:STRING',
    'INITIATOR:STRING',
    'SHEET_NAME:DATE',
    'TRANSACTION_DATE:DATE',
    'VALUE_DATE:DATE',
  ];
  convertToCamelCase(arr, '_');
}