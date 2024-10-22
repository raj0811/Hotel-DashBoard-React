const filtered = [
    {
      name: "Airtel Payments Bank",
      cf_code: "AIRPR",
      eb_code: "AIRTLM",
      enumName: "NB_AIRTEL_PAYMENTS_BANK",
    },
    {
      name: "Andhra Pragathi Grameena Bank",
      cf_code: "APGBR",
      eb_code: null,
      enumName: "NB_ANDHRA_PRAGATHI_GRAMEENA_BANK",
    },
    {
      name: "AU Small Finance Bank",
      cf_code: "AUBLR",
      eb_code: "AUSFB",
      enumName: "NB_AU_SMALL_FINANCE_BANK",
    },
    {
      name: "Axis Bank",
      cf_code: "UTIBR",
      eb_code: "AXB",
      enumName: "NB_AXIS_BANK",
    },
    {
      name: "Axis Bank Corporate",
      cf_code: "UTIBC",
      eb_code: "ACNB",
      enumName: "NB_AXIS_BANK_CORPORATE",
    },
    {
      name: "Bandhan Bank - Retail Banking",
      cf_code: "BDBLR",
      eb_code: "BANB",
      enumName: "NB_BANDHAN_BANK_RETAIL_BANKING",
    },
    {
      name: "Bandhan Bank- Corporate banking",
      cf_code: "BDBLC",
      eb_code: "BABC",
      enumName: "NB_BANDHAN_BANK_CORPORATE_BANKING",
    },
    {
      name: "Bank of Bahrain and Kuwait",
      cf_code: "BBKMR",
      eb_code: null,
      enumName: "NB_BANK_OF_BAHRAIN_AND_KUWAIT",
    },
    {
      name: "Bank of Baroda - Corporate",
      cf_code: "BARBC",
      eb_code: "BOBCB",
      enumName: "NB_BANK_OF_BARODA_CORPORATE",
    },
    {
      name: "Bank of Baroda - Retail Banking",
      cf_code: "BARBR",
      eb_code: "BOBRB",
      enumName: "NB_BANK_OF_BARODA_RETAIL_BANKING",
    },
    {
      name: "Bank of India",
      cf_code: "BKIDR",
      eb_code: "BOIND",
      enumName: "NB_BANK_OF_INDIA",
    },
    {
      name: "Bank of India - Corporate",
      cf_code: "BKIDC",
      eb_code: null,
      enumName: "NB_BANK_OF_INDIA_CORPORATE",
    },
    {
      name: "Bank of Maharashtra",
      cf_code: "MAHBR",
      eb_code: "BOMH",
      enumName: "NB_BANK_OF_MAHARASHTRA",
    },
    {
      name: "Barclays Corporate- Corporate Banking",
      cf_code: "BARCC",
      eb_code: null,
      enumName: "NB_BARCLAYS_CORPORATE_CORPORATE_BANKING",
    },
    {
      name: "Bassien Catholic Coop Bank",
      cf_code: "BACBC",
      eb_code: null,
      enumName: "NB_BASSIEN_CATHOLIC_COOP_BANK",
    },
    {
      name: "Canara Bank",
      cf_code: "CNRBR",
      eb_code: "CANB",
      enumName: "NB_CANARA_BANK",
    },
    {
      name: "Canara Bank (Erstwhile Syndicate Bank)",
      cf_code: null,
      eb_code: "SYNB",
      enumName: "NB_CANARA_BANK_ERSTWHILE_SYNDICATE_BANK",
    },
    {
      name: "Capital Small Finance Bank",
      cf_code: "CLBLR",
      eb_code: "CSFB",
      enumName: "NB_CAPITAL_SMALL_FINANCE_BANK",
    },
    {
      name: "Catholic Syrian Bank",
      cf_code: "CSBKR",
      eb_code: "CSB",
      enumName: "NB_CATHOLIC_SYRIAN_BANK",
    },
    {
      name: "Central Bank of India",
      cf_code: "CBINR",
      eb_code: "CBOI",
      enumName: "NB_CENTRAL_BANK_OF_INDIA",
    },
    {
      name: "City Union Bank",
      cf_code: "CIUBR",
      eb_code: "CUB",
      enumName: "NB_CITY_UNION_BANK",
    },
    {
      name: "City Union Bank of Corporate",
      cf_code: "CIUBC",
      eb_code: null,
      enumName: "NB_CITY_UNION_BANK_OF_CORPORATE",
    },
    {
      name: "Cosmos Bank",
      cf_code: "COSBR",
      eb_code: null,
      enumName: "NB_COSMOS_BANK",
    },
    {
      name: "DBS Bank Ltd",
      cf_code: "DBSSR",
      eb_code: null,
      enumName: "NB_DBS_BANK_LTD",
    },
    {
      name: "DCB Bank",
      cf_code: "DCBLR",
      eb_code: "DCBB",
      enumName: "NB_DCB_BANK",
    },
    {
      name: "DCB Bank - Corporate",
      cf_code: "DCBLC",
      eb_code: null,
      enumName: "NB_DCB_BANK_CORPORATE",
    },
    {
      name: "Deutsche Bank",
      cf_code: "DEUTR",
      eb_code: null,
      enumName: "NB_DEUTSCHE_BANK",
    },
    {
      name: "Dhanlakshmi Bank",
      cf_code: "DLXBR",
      eb_code: null,
      enumName: "NB_DHANLAKSHMI_BANK",
    },
    {
      name: "Dhanlaxmi Bank Corporate",
      cf_code: "DLXBC",
      eb_code: null,
      enumName: "NB_DHANLAXMI_BANK_CORPORATE",
    },
    {
      name: "Equitas Small Finance Bank",
      cf_code: "ESFBR",
      eb_code: "EQSFB",
      enumName: "NB_EQUITAS_SMALL_FINANCE_BANK",
    },
    {
      name: "ESAF Small Finance Bank",
      cf_code: "ESMFR",
      eb_code: null,
      enumName: "NB_ESAF_SMALL_FINANCE_BANK",
    },
    {
      name: "Federal Bank",
      cf_code: "FDRLR",
      eb_code: "FEDB",
      enumName: "NB_FEDERAL_BANK",
    },
    {
      name: "Fincare Bank",
      cf_code: "FSFBR",
      eb_code: null,
      enumName: "NB_FINCARE_BANK",
    },
    {
      name: "Gujarat State Co-operative Bank Limited",
      cf_code: "GSCBR",
      eb_code: null,
      enumName: "NB_GUJARAT_STATE_CO_OPERATIVE_BANK_LIMITED",
    },
    {
      name: "HDFC Bank",
      cf_code: "HDFCR",
      eb_code: "HDFCB",
      enumName: "NB_HDFC_BANK",
    },
    {
      name: "HDFC Corporate",
      cf_code: "HDFCC",
      eb_code: null,
      enumName: "NB_HDFC_CORPORATE",
    },
    {
      name: "HSBC Retail NetBanking",
      cf_code: "HSBCR",
      eb_code: null,
      enumName: "NB_HSBC_RETAIL_NETBANKING",
    },
    {
      name: "ICICI Bank",
      cf_code: "ICICR",
      eb_code: "ICICIB",
      enumName: "NB_ICICI_BANK",
    },
    {
      name: "ICICI Corporate",
      cf_code: "ICICC",
      eb_code: "ICICICO",
      enumName: "NB_ICICI_CORPORATE",
    },
    {
      name: "IDBI Bank",
      cf_code: "IBKLR",
      eb_code: "IDBIB",
      enumName: "NB_IDBI_BANK",
    },
    {
      name: "IDFC First Bank",
      cf_code: "IDFBR",
      eb_code: "IDFCFB",
      enumName: "NB_IDFC_FIRST_BANK",
    },
    {
      name: "Indian Bank",
      cf_code: "IDIBR",
      eb_code: "INB",
      enumName: "NB_INDIAN_BANK",
    },
    {
      name: "Indian Overseas Bank",
      cf_code: "IOBAR",
      eb_code: "IOB",
      enumName: "NB_INDIAN_OVERSEAS_BANK",
    },
    {
      name: "Indian Overseas Bank - Corporate",
      cf_code: "IOBAC",
      eb_code: "IOBC",
      enumName: "NB_INDIAN_OVERSEAS_BANK_CORPORATE",
    },
    {
      name: "IndusInd Bank",
      cf_code: "INDBR",
      eb_code: "INDUSB",
      enumName: "NB_INDUSIND_BANK",
    },
    {
      name: "Jammu & Kashmir Bank",
      cf_code: "JAKAR",
      eb_code: "JKB",
      enumName: "NB_JAMMU_AND_KASHMIR_BANK",
    },
    {
      name: "Jammu & Kashmir Bank - Corporate",
      cf_code: null,
      eb_code: "JKBC",
      enumName: "NB_JAMMU_AND_KASHMIR_BANK_CORPORATE",
    },
    {
      name: "Jana Small Finance Bank",
      cf_code: "JSFBR",
      eb_code: null,
      enumName: "NB_JANA_SMALL_FINANCE_BANK",
    },
    {
      name: "Janata Sahakari Bank Ltd Pune",
      cf_code: "JSBPR",
      eb_code: "JSBLP",
      enumName: "NB_JANATA_SAHAKARI_BANK_LTD_PUNE",
    },
    {
      name: "Jio Payments Bank",
      cf_code: "JIOPR",
      eb_code: null,
      enumName: "NB_JIO_PAYMENTS_BANK",
    },
    {
      name: "Kalyan Janata Sahakari Bank",
      cf_code: "KJSBR",
      eb_code: null,
      enumName: "NB_KALYAN_JANATA_SAHAKARI_BANK",
    },
    {
      name: "Karnataka Bank Ltd",
      cf_code: "KARBR",
      eb_code: "KBL",
      enumName: "NB_KARNATAKA_BANK_LTD",
    },
    {
      name: "Karnataka Gramin Bank",
      cf_code: "PKGBR",
      eb_code: null,
      enumName: "NB_KARNATAKA_GRAMIN_BANK",
    },
    {
      name: "Karnataka Vikas Grameena Bank",
      cf_code: "KVGBR",
      eb_code: null,
      enumName: "NB_KARNATAKA_VIKAS_GRAMEENA_BANK",
    },
    {
      name: "Karur Vysya Bank",
      cf_code: "KVBLR",
      eb_code: "KVB",
      enumName: "NB_KARUR_VYSYA_BANK",
    },
    {
      name: "Kotak Bank",
      cf_code: null,
      eb_code: "KTB",
      enumName: "NB_KOTAK_BANK",
    },
    {
      name: "Kotak Mahindra Bank",
      cf_code: "KKBKR",
      eb_code: null,
      enumName: "NB_KOTAK_MAHINDRA_BANK",
    },
    {
      name: "Lakshmi Vilas Bank",
      cf_code: "LAVBR",
      eb_code: "LVB",
      enumName: "NB_LAKSHMI_VILAS_BANK",
    },
    {
      name: "Lakshmi Vilas Bank - Corporate",
      cf_code: "LAVBC",
      eb_code: null,
      enumName: "NB_LAKSHMI_VILAS_BANK_CORPORATE",
    },
    {
      name: "Maharashtra Gramin Bank",
      cf_code: "MAHGR",
      eb_code: null,
      enumName: "NB_MAHARASHTRA_GRAMIN_BANK",
    },
    {
      name: "Mehsana urban Co-op Bank",
      cf_code: "MSNUR",
      eb_code: null,
      enumName: "NB_MEHSANA_URBAN_CO_OP_BANK",
    },
    {
      name: "NKGSB Co-op Bank",
      cf_code: "NKGSR",
      eb_code: null,
      enumName: "NB_NKGSB_CO_OP_BANK",
    },
    {
      name: "North East Small Finance Bank Ltd",
      cf_code: "NESFR",
      eb_code: null,
      enumName: "NB_NORTH_EAST_SMALL_FINANCE_BANK_LTD",
    },
    {
      name: "Nutan Nagarik Sahakari Bank Limited",
      cf_code: "NNSBR",
      eb_code: null,
      enumName: "NB_NUTAN_NAGARIK_SAHAKARI_BANK_LIMITED",
    },
    {
      name: "PNB (Erstwhile-Oriental Bank of Commerce)",
      cf_code: null,
      eb_code: "OBOC",
      enumName: "NB_PNB_ERSTWHILE_ORIENTAL_BANK_OF_COMMERCE",
    },
    {
      name: "PNB (Erstwhile-United Bank of India)",
      cf_code: null,
      eb_code: "UNBOI",
      enumName: "NB_PNB_ERSTWHILE_UNITED_BANK_OF_INDIA",
    },
    {
      name: "Punjab & Sind Bank",
      cf_code: "PSIBR",
      eb_code: "PASB",
      enumName: "NB_PUNJAB_AND_SIND_BANK",
    },
    {
      name: "Punjab National Bank - Corporate",
      cf_code: "PUNBC",
      eb_code: "PNBCB",
      enumName: "NB_PUNJAB_NATIONAL_BANK_CORPORATE",
    },
    {
      name: "Punjab National Bank - Retail Banking",
      cf_code: "PUNBR",
      eb_code: "PNBRB",
      enumName: "NB_PUNJAB_NATIONAL_BANK_RETAIL_BANKING",
    },
    {
      name: "RBL Bank",
      cf_code: "RATNR",
      eb_code: "RBLBL",
      enumName: "NB_RBL_BANK",
    },
    {
      name: "RBL Bank Limited - Corporate Banking",
      cf_code: "RATNC",
      eb_code: null,
      enumName: "NB_RBL_BANK_LIMITED_CORPORATE_BANKING",
    },
    {
      name: "Saraswat Bank",
      cf_code: "SRCBR",
      eb_code: "SARB",
      enumName: "NB_SARASWAT_BANK",
    },
    {
      name: "SBM Bank India",
      cf_code: "STCBR",
      eb_code: null,
      enumName: "NB_SBM_BANK_INDIA",
    },
    {
      name: "Shamrao Vithal Bank Corporate",
      cf_code: "SVCBC",
      eb_code: null,
      enumName: "NB_SHAMRAO_VITHAL_BANK_CORPORATE",
    },
    {
      name: "Shamrao Vitthal Co-operative Bank",
      cf_code: "SVCBR",
      eb_code: null,
      enumName: "NB_SHAMRAO_VITTHAL_CO_OPERATIVE_BANK",
    },
    {
      name: "Shivalik Bank",
      cf_code: "SMCBR",
      eb_code: "NBSB",
      enumName: "NB_SHIVALIK_BANK",
    },
    {
      name: "South Indian Bank",
      cf_code: "SIBLR",
      eb_code: "SIB",
      enumName: "NB_SOUTH_INDIAN_BANK",
    },
    {
      name: "Standard Chartered Bank",
      cf_code: "SCBLR",
      eb_code: "SCB",
      enumName: "NB_STANDARD_CHARTERED_BANK",
    },
    {
      name: "Standard Chartered Bank - Corporate",
      cf_code: null,
      eb_code: "SCBC",
      enumName: "NB_STANDARD_CHARTERED_BANK_CORPORATE",
    },
    {
      name: "State Bank of India",
      cf_code: "SBINR",
      eb_code: "SBOI",
      enumName: "NB_STATE_BANK_OF_INDIA",
    },
    {
      name: "State Bank of India - Corporate",
      cf_code: "SBINC",
      eb_code: "SBOIC",
      enumName: "NB_STATE_BANK_OF_INDIA_CORPORATE",
    },
    {
      name: "Suryoday Small Finance Bank",
      cf_code: "SURYR",
      eb_code: null,
      enumName: "NB_SURYODAY_SMALL_FINANCE_BANK",
    },
    {
      name: "Tamil Nadu State Co-operative Bank",
      cf_code: "TNSCR",
      eb_code: null,
      enumName: "NB_TAMIL_NADU_STATE_CO_OPERATIVE_BANK",
    },
    {
      name: "Tamilnad Mercantile Bank Ltd",
      cf_code: "TMBLR",
      eb_code: "TMBL",
      enumName: "NB_TAMILNAD_MERCANTILE_BANK_LTD",
    },
    {
      name: "Thane Bharat Sahakari Bank Ltd",
      cf_code: "TBSBR",
      eb_code: null,
      enumName: "NB_THANE_BHARAT_SAHAKARI_BANK_LTD",
    },
    {
      name: "The Kalupur Commercial Co-Operative Bank",
      cf_code: "KCCBR",
      eb_code: null,
      enumName: "NB_THE_KALUPUR_COMMERCIAL_CO_OPERATIVE_BANK",
    },
    {
      name: "The Surat Peoples Co-operative Bank Limited",
      cf_code: "SPCBR",
      eb_code: null,
      enumName: "NB_THE_SURAT_PEOPLES_CO_OPERATIVE_BANK_LIMITED",
    },
    {
      name: "The Sutex Co-op Bank Ltd",
      cf_code: "SUTBR",
      eb_code: null,
      enumName: "NB_THE_SUTEX_CO_OP_BANK_LTD",
    },
    {
      name: "TJSB Bank",
      cf_code: "TJSBR",
      eb_code: null,
      enumName: "NB_TJSB_BANK",
    },
    {
      name: "UCO Bank",
      cf_code: "UCBAR",
      eb_code: "UCOB",
      enumName: "NB_UCO_BANK",
    },
    {
      name: "UCO Bank Corporate",
      cf_code: "UCBAC",
      eb_code: null,
      enumName: "NB_UCO_BANK_CORPORATE",
    },
    {
      name: "Union Bank of India",
      cf_code: "UBINR",
      eb_code: "UBOI",
      enumName: "NB_UNION_BANK_OF_INDIA",
    },
    {
      name: "Union Bank of India - Corporate",
      cf_code: "UBINC",
      eb_code: null,
      enumName: "NB_UNION_BANK_OF_INDIA_CORPORATE",
    },
    {
      name: "Union Bank of India (Erstwhile Andhra Bank)",
      cf_code: null,
      eb_code: "ANB",
      enumName: "NB_UNION_BANK_OF_INDIA_ERSTWHILE_ANDHRA_BANK",
    },
    {
      name: "Utkarsh Small Finance Bank",
      cf_code: "UTKSR",
      eb_code: null,
      enumName: "NB_UTKARSH_SMALL_FINANCE_BANK",
    },
    {
      name: "Varachha Co-operative Bank Limited",
      cf_code: "VARAR",
      eb_code: null,
      enumName: "NB_VARACHHA_CO_OPERATIVE_BANK_LIMITED",
    },
    {
      name: "Vijaya Bank",
      cf_code: null,
      eb_code: "VIJB",
      enumName: "NB_VIJAYA_BANK",
    },
    {
      name: "Yes Bank Corporate",
      cf_code: "YESBC",
      eb_code: null,
      enumName: "NB_YES_BANK_CORPORATE",
    },
    {
      name: "Yes Bank Ltd",
      cf_code: "YESBR",
      eb_code: "YESBL",
      enumName: "NB_YES_BANK_LTD",
    },
    {
      name: "Zoroastrian Co-Operative Bank Ltd",
      cf_code: "ZCBLR",
      eb_code: null,
      enumName: "NB_ZOROASTRIAN_CO_OPERATIVE_BANK_LTD",
    },
  ];