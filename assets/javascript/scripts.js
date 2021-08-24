const contract_abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountBNB",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountBOG",
        type: "uint256",
      },
    ],
    name: "AutoLiquify",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "Owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_maxTxAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_maxWalletToken",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address[]", name: "addresses", type: "address[]" },
      { internalType: "uint256[]", name: "tokens", type: "uint256[]" },
    ],
    name: "airdrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "holder", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "spender", type: "address" }],
    name: "approveMax",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "adr", type: "address" }],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "autoLiquidityReceiver",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyCooldownEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountPercentage", type: "uint256" },
    ],
    name: "clearStuckBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bool", name: "_status", type: "bool" },
      { internalType: "uint8", name: "_interval", type: "uint8" },
    ],
    name: "cooldownEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cooldownTimerInterval",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getCirculatingSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "accuracy", type: "uint256" }],
    name: "getLiquidityBacking",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "adr", type: "address" }],
    name: "isAuthorized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "target", type: "uint256" },
      { internalType: "uint256", name: "accuracy", type: "uint256" },
    ],
    name: "isOverLiquified",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "isOwner",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "launchedAt",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketingFeeReceiver",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "pair",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      { internalType: "contract IDEXRouter", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_minPeriod", type: "uint256" },
      { internalType: "uint256", name: "_minDistribution", type: "uint256" },
    ],
    name: "setDistributionCriteria",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "gas", type: "uint256" }],
    name: "setDistributorSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_autoLiquidityReceiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketingFeeReceiver",
        type: "address",
      },
    ],
    name: "setFeeReceivers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_liquidityFee", type: "uint256" },
      { internalType: "uint256", name: "_reflectionFee", type: "uint256" },
      { internalType: "uint256", name: "_marketingFee", type: "uint256" },
      { internalType: "uint256", name: "_feeDenominator", type: "uint256" },
    ],
    name: "setFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "holder", type: "address" },
      { internalType: "bool", name: "exempt", type: "bool" },
    ],
    name: "setIsDividendExempt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "holder", type: "address" },
      { internalType: "bool", name: "exempt", type: "bool" },
    ],
    name: "setIsFeeExempt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "holder", type: "address" },
      { internalType: "bool", name: "exempt", type: "bool" },
    ],
    name: "setIsTimelockExempt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "holder", type: "address" },
      { internalType: "bool", name: "exempt", type: "bool" },
    ],
    name: "setIsTxLimitExempt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "maxWallPercent", type: "uint256" },
    ],
    name: "setMaxWalletPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bool", name: "_enabled", type: "bool" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "setSwapBackSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_target", type: "uint256" },
      { internalType: "uint256", name: "_denominator", type: "uint256" },
    ],
    name: "setTargetLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "setTxLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapThreshold",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tradingOpen",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_status", type: "bool" }],
    name: "tradingStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address payable", name: "adr", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "adr", type: "address" }],
    name: "unauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
const contract_address = "0x94ba29d58D419BD798B282476db3Dd9d97BA8C23";

const distributor_abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "claimDividend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "dividendsPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dividendsPerShareAccuracyFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "shareholder",
        type: "address",
      },
    ],
    name: "getUnpaidEarnings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minDistribution",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "process",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minDistribution",
        type: "uint256",
      },
    ],
    name: "setDistributionCriteria",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "shareholder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "shares",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalExcluded",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalRealised",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDistributed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDividends",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const distributor_address = "0x75ae7C8feF8b8E1FD8648b87249557af47623389";

const Web3 = window.Web3;
const Web3Modal = window.Web3Modal.default;
const providerOptions = {
  /* See Provider Options Section */
};
let c_supply,
  provider,
  account,
  contract,
  distributor,
  frostedPrice,
  cakePrice,
  web3,
  burned;

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

function getCSupply() {
  fetch(
    "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x94ba29d58D419BD798B282476db3Dd9d97BA8C23&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=XQMB5B1GBNEKGKVTBD7JJ7RV1F3F6ETJHR"
  )
    .then((response) => response.json())
    .then((data) => {
      burned = data.result / 10 ** 18;
      c_supply = 100000000000000000000000000000 - Number(data.result);
      $("#c_supply").html(Math.round(c_supply / 10 ** 18));
    });
}

async function connect() {
  try {
    provider = await web3Modal.connect();
    web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    console.log("chainId", chainId);
    if (chainId !== 56) {
      alert("You must be select Binance Mainnet to continue.");
    }

    update();
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    console.log("accountsChanged");
    update();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    console.log("chainChanged");
    console.log(chainId);
  });

  // Subscribe to provider connection
  provider.on("connect", (info) => {
    console.log(info);
  });

  // Subscribe to provider disconnection
  provider.on("disconnect", (error) => {
    $("#connect").prop("disabled", false);
    $("#connect").html("Connect");
  });
}

async function claim() {
  if (distributor) {
    await distributor.methods.claimDividend().send({
      from: account,
    });
  }
}

async function update() {
  if (web3) {
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];

    contract = new web3.eth.Contract(contract_abi, contract_address);
    distributor = new web3.eth.Contract(distributor_abi, distributor_address);

    const balance = await contract.methods.balanceOf(account).call();
    const unpaidEarnings = await distributor.methods
      .getUnpaidEarnings(account)
      .call();
    const shares = await distributor.methods.shares(account).call();
    const totalDistributed = await distributor.methods
      .totalDistributed()
      .call();
    const totalBurned = await contract.methods
      .balanceOf("0x000000000000000000000000000000000000dead")
      .call();
    const totalShares = await distributor.methods.totalShares().call();

    $("#connect").prop("disabled", true);
    $("#connect").html("Connected");

    $("#account").html(account);
    $("#balance").html((balance / 10 ** 18).toFixed(2));
    $("#unpaid_earning").html((unpaidEarnings / 10 ** 18).toPrecision(2));
    $("#total_paid").html((shares.totalRealised / 10 ** 18).toPrecision(2));
    $("#total_distributed").html(Math.round(totalDistributed / 10 ** 18));
    $("#total_burned").html(Math.round(burned));
    $("#total_rewarded").html(Math.round(totalShares / 10 ** 18));

    $("#connected_section").show();
    getCakePrice();
  }
}

function getCakePrice() {
  const cake = $("#total_distributed").html();
  fetch(
    "https://api.pancakeswap.info/api/v2/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
  )
    .then((response) => response.json())
    .then((data) => {
      cakePrice = data.data.price;
      $("#cake_price").html("$" + (cake * cakePrice).toFixed(2));
    });
}

function getFrostedPrice() {
  fetch(
    "https://api.pancakeswap.info/api/v2/tokens/0x94ba29d58d419bd798b282476db3dd9d97ba8c23"
  )
    .then((response) => response.json())
    .then((data) => {
      cakePrice = data.data.price;
    });
}

function getMSupply() {
  fetch(
    "https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0x94ba29d58D419BD798B282476db3Dd9d97BA8C23&apikey=XQMB5B1GBNEKGKVTBD7JJ7RV1F3F6ETJHR"
  )
    .then((response) => response.json())
    .then((data) => {
      $("#m_supply").html(Math.round(data.result / 10 ** 18));
    });
}

$(document).ready(function () {
  $("#connect").on("click", connect);
  $("#claim").on("click", claim);

  $("#connected_section").hide();

  getMSupply();
  getCSupply();
  getCakePrice();
  getFrostedPrice();
});
