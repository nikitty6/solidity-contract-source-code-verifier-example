var solc = require("solc");
var fs = require("fs");

//Compile with metadata-json file but throws error

var input = {
  compiler: { version: "0.5.16+commit.9c3226ce" },
  language: "Solidity",
  output: {
    abi: [
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
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
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
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
        constant: true,
        inputs: [],
        name: "_decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "_name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "_symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "burn",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          {
            internalType: "uint256",
            name: "subtractedValue",
            type: "uint256",
          },
        ],
        name: "decreaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getOwner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "addedValue", type: "uint256" },
        ],
        name: "increaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "mint",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    devdoc: {
      methods: {
        "allowance(address,address)": { details: "See {BEP20-allowance}." },
        "approve(address,uint256)": {
          details:
            "See {BEP20-approve}.    * Requirements:    * - `spender` cannot be the zero address.",
        },
        "balanceOf(address)": { details: "See {BEP20-balanceOf}." },
        "burn(uint256)": {
          details: "Burn `amount` tokens and decreasing the total supply.",
        },
        "decimals()": { details: "Returns the token decimals." },
        "decreaseAllowance(address,uint256)": {
          details:
            "Atomically decreases the allowance granted to `spender` by the caller.    * This is an alternative to {approve} that can be used as a mitigation for problems described in {BEP20-approve}.    * Emits an {Approval} event indicating the updated allowance.    * Requirements:    * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.",
        },
        "getOwner()": { details: "Returns the bep token owner." },
        "increaseAllowance(address,uint256)": {
          details:
            "Atomically increases the allowance granted to `spender` by the caller.    * This is an alternative to {approve} that can be used as a mitigation for problems described in {BEP20-approve}.    * Emits an {Approval} event indicating the updated allowance.    * Requirements:    * - `spender` cannot be the zero address.",
        },
        "mint(uint256)": {
          details:
            "Creates `amount` tokens and assigns them to `msg.sender`, increasing the total supply.    * Requirements    * - `msg.sender` must be the token owner",
        },
        "name()": { details: "Returns the token name." },
        "owner()": { details: "Returns the address of the current owner." },
        "renounceOwnership()": {
          details:
            "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.    * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.",
        },
        "symbol()": { details: "Returns the token symbol." },
        "totalSupply()": { details: "See {BEP20-totalSupply}." },
        "transfer(address,uint256)": {
          details:
            "See {BEP20-transfer}.    * Requirements:    * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.",
        },
        "transferFrom(address,address,uint256)": {
          details:
            "See {BEP20-transferFrom}.    * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {BEP20};    * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for `sender`'s tokens of at least `amount`.",
        },
        "transferOwnership(address)": {
          details:
            "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.",
        },
      },
    },
    userdoc: { methods: {} },
  },
  settings: {
    compilationTarget: { "X2.sol": "X2" },
    evmVersion: "istanbul",
    libraries: {},
    metadata: { useLiteralContent: true },
    optimizer: { enabled: false, runs: 200 },
    remappings: [],
  },
  sources: {
    "X2.sol": {
      content:
        '/**\r\n *Submitted for verification at BscScan.com on 2020-09-04\r\n*/\r\n\r\npragma solidity 0.5.16;\r\n\r\ninterface IBEP20 {\r\n  /**\r\n   * @dev Returns the amount of tokens in existence.\r\n   */\r\n  function totalSupply() external view returns (uint256);\r\n\r\n  /**\r\n   * @dev Returns the token decimals.\r\n   */\r\n  function decimals() external view returns (uint8);\r\n\r\n  /**\r\n   * @dev Returns the token symbol.\r\n   */\r\n  function symbol() external view returns (string memory);\r\n\r\n  /**\r\n  * @dev Returns the token name.\r\n  */\r\n  function name() external view returns (string memory);\r\n\r\n  /**\r\n   * @dev Returns the bep token owner.\r\n   */\r\n  function getOwner() external view returns (address);\r\n\r\n  /**\r\n   * @dev Returns the amount of tokens owned by `account`.\r\n   */\r\n  function balanceOf(address account) external view returns (uint256);\r\n\r\n  /**\r\n   * @dev Moves `amount` tokens from the caller\'s account to `recipient`.\r\n   *\r\n   * Returns a boolean value indicating whether the operation succeeded.\r\n   *\r\n   * Emits a {Transfer} event.\r\n   */\r\n  function transfer(address recipient, uint256 amount) external returns (bool);\r\n\r\n  /**\r\n   * @dev Returns the remaining number of tokens that `spender` will be\r\n   * allowed to spend on behalf of `owner` through {transferFrom}. This is\r\n   * zero by default.\r\n   *\r\n   * This value changes when {approve} or {transferFrom} are called.\r\n   */\r\n  function allowance(address _owner, address spender) external view returns (uint256);\r\n\r\n  /**\r\n   * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\r\n   *\r\n   * Returns a boolean value indicating whether the operation succeeded.\r\n   *\r\n   * IMPORTANT: Beware that changing an allowance with this method brings the risk\r\n   * that someone may use both the old and the new allowance by unfortunate\r\n   * transaction ordering. One possible solution to mitigate this race\r\n   * condition is to first reduce the spender\'s allowance to 0 and set the\r\n   * desired value afterwards:\r\n   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\r\n   *\r\n   * Emits an {Approval} event.\r\n   */\r\n  function approve(address spender, uint256 amount) external returns (bool);\r\n\r\n  /**\r\n   * @dev Moves `amount` tokens from `sender` to `recipient` using the\r\n   * allowance mechanism. `amount` is then deducted from the caller\'s\r\n   * allowance.\r\n   *\r\n   * Returns a boolean value indicating whether the operation succeeded.\r\n   *\r\n   * Emits a {Transfer} event.\r\n   */\r\n  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\r\n\r\n  /**\r\n   * @dev Emitted when `value` tokens are moved from one account (`from`) to\r\n   * another (`to`).\r\n   *\r\n   * Note that `value` may be zero.\r\n   */\r\n  event Transfer(address indexed from, address indexed to, uint256 value);\r\n\r\n  /**\r\n   * @dev Emitted when the allowance of a `spender` for an `owner` is set by\r\n   * a call to {approve}. `value` is the new allowance.\r\n   */\r\n  event Approval(address indexed owner, address indexed spender, uint256 value);\r\n}\r\n\r\n/*\r\n * @dev Provides information about the current execution context, including the\r\n * sender of the transaction and its data. While these are generally available\r\n * via msg.sender and msg.data, they should not be accessed in such a direct\r\n * manner, since when dealing with GSN meta-transactions the account sending and\r\n * paying for execution may not be the actual sender (as far as an application\r\n * is concerned).\r\n *\r\n * This contract is only required for intermediate, library-like contracts.\r\n */\r\ncontract Context {\r\n  // Empty internal constructor, to prevent people from mistakenly deploying\r\n  // an instance of this contract, which should be used via inheritance.\r\n  constructor () internal { }\r\n\r\n  function _msgSender() internal view returns (address payable) {\r\n    return msg.sender;\r\n  }\r\n\r\n  function _msgData() internal view returns (bytes memory) {\r\n    this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691\r\n    return msg.data;\r\n  }\r\n}\r\n\r\n/**\r\n * @dev Wrappers over Solidity\'s arithmetic operations with added overflow\r\n * checks.\r\n *\r\n * Arithmetic operations in Solidity wrap on overflow. This can easily result\r\n * in bugs, because programmers usually assume that an overflow raises an\r\n * error, which is the standard behavior in high level programming languages.\r\n * `SafeMath` restores this intuition by reverting the transaction when an\r\n * operation overflows.\r\n *\r\n * Using this library instead of the unchecked operations eliminates an entire\r\n * class of bugs, so it\'s recommended to use it always.\r\n */\r\nlibrary SafeMath {\r\n  /**\r\n   * @dev Returns the addition of two unsigned integers, reverting on\r\n   * overflow.\r\n   *\r\n   * Counterpart to Solidity\'s `+` operator.\r\n   *\r\n   * Requirements:\r\n   * - Addition cannot overflow.\r\n   */\r\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\r\n    uint256 c = a + b;\r\n    require(c >= a, "SafeMath: addition overflow");\r\n\r\n    return c;\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the subtraction of two unsigned integers, reverting on\r\n   * overflow (when the result is negative).\r\n   *\r\n   * Counterpart to Solidity\'s `-` operator.\r\n   *\r\n   * Requirements:\r\n   * - Subtraction cannot overflow.\r\n   */\r\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\r\n    return sub(a, b, "SafeMath: subtraction overflow");\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\r\n   * overflow (when the result is negative).\r\n   *\r\n   * Counterpart to Solidity\'s `-` operator.\r\n   *\r\n   * Requirements:\r\n   * - Subtraction cannot overflow.\r\n   */\r\n  function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\r\n    require(b <= a, errorMessage);\r\n    uint256 c = a - b;\r\n\r\n    return c;\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the multiplication of two unsigned integers, reverting on\r\n   * overflow.\r\n   *\r\n   * Counterpart to Solidity\'s `*` operator.\r\n   *\r\n   * Requirements:\r\n   * - Multiplication cannot overflow.\r\n   */\r\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\r\n    // Gas optimization: this is cheaper than requiring \'a\' not being zero, but the\r\n    // benefit is lost if \'b\' is also tested.\r\n    // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\r\n    if (a == 0) {\r\n      return 0;\r\n    }\r\n\r\n    uint256 c = a * b;\r\n    require(c / a == b, "SafeMath: multiplication overflow");\r\n\r\n    return c;\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the integer division of two unsigned integers. Reverts on\r\n   * division by zero. The result is rounded towards zero.\r\n   *\r\n   * Counterpart to Solidity\'s `/` operator. Note: this function uses a\r\n   * `revert` opcode (which leaves remaining gas untouched) while Solidity\r\n   * uses an invalid opcode to revert (consuming all remaining gas).\r\n   *\r\n   * Requirements:\r\n   * - The divisor cannot be zero.\r\n   */\r\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\r\n    return div(a, b, "SafeMath: division by zero");\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the integer division of two unsigned integers. Reverts with custom message on\r\n   * division by zero. The result is rounded towards zero.\r\n   *\r\n   * Counterpart to Solidity\'s `/` operator. Note: this function uses a\r\n   * `revert` opcode (which leaves remaining gas untouched) while Solidity\r\n   * uses an invalid opcode to revert (consuming all remaining gas).\r\n   *\r\n   * Requirements:\r\n   * - The divisor cannot be zero.\r\n   */\r\n  function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\r\n    // Solidity only automatically asserts when dividing by 0\r\n    require(b > 0, errorMessage);\r\n    uint256 c = a / b;\r\n    // assert(a == b * c + a % b); // There is no case in which this doesn\'t hold\r\n\r\n    return c;\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\r\n   * Reverts when dividing by zero.\r\n   *\r\n   * Counterpart to Solidity\'s `%` operator. This function uses a `revert`\r\n   * opcode (which leaves remaining gas untouched) while Solidity uses an\r\n   * invalid opcode to revert (consuming all remaining gas).\r\n   *\r\n   * Requirements:\r\n   * - The divisor cannot be zero.\r\n   */\r\n  function mod(uint256 a, uint256 b) internal pure returns (uint256) {\r\n    return mod(a, b, "SafeMath: modulo by zero");\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\r\n   * Reverts with custom message when dividing by zero.\r\n   *\r\n   * Counterpart to Solidity\'s `%` operator. This function uses a `revert`\r\n   * opcode (which leaves remaining gas untouched) while Solidity uses an\r\n   * invalid opcode to revert (consuming all remaining gas).\r\n   *\r\n   * Requirements:\r\n   * - The divisor cannot be zero.\r\n   */\r\n  function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\r\n    require(b != 0, errorMessage);\r\n    return a % b;\r\n  }\r\n}\r\n\r\n/**\r\n * @dev Contract module which provides a basic access control mechanism, where\r\n * there is an account (an owner) that can be granted exclusive access to\r\n * specific functions.\r\n *\r\n * By default, the owner account will be the one that deploys the contract. This\r\n * can later be changed with {transferOwnership}.\r\n *\r\n * This module is used through inheritance. It will make available the modifier\r\n * `onlyOwner`, which can be applied to your functions to restrict their use to\r\n * the owner.\r\n */\r\ncontract Ownable is Context {\r\n  address private _owner;\r\n\r\n  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\r\n\r\n  /**\r\n   * @dev Initializes the contract setting the deployer as the initial owner.\r\n   */\r\n  constructor () internal {\r\n    address msgSender = _msgSender();\r\n    _owner = msgSender;\r\n    emit OwnershipTransferred(address(0), msgSender);\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the address of the current owner.\r\n   */\r\n  function owner() public view returns (address) {\r\n    return _owner;\r\n  }\r\n\r\n  /**\r\n   * @dev Throws if called by any account other than the owner.\r\n   */\r\n  modifier onlyOwner() {\r\n    require(_owner == _msgSender(), "Ownable: caller is not the owner");\r\n    _;\r\n  }\r\n\r\n  /**\r\n   * @dev Leaves the contract without owner. It will not be possible to call\r\n   * `onlyOwner` functions anymore. Can only be called by the current owner.\r\n   *\r\n   * NOTE: Renouncing ownership will leave the contract without an owner,\r\n   * thereby removing any functionality that is only available to the owner.\r\n   */\r\n  function renounceOwnership() public onlyOwner {\r\n    emit OwnershipTransferred(_owner, address(0));\r\n    _owner = address(0);\r\n  }\r\n\r\n  /**\r\n   * @dev Transfers ownership of the contract to a new account (`newOwner`).\r\n   * Can only be called by the current owner.\r\n   */\r\n  function transferOwnership(address newOwner) public onlyOwner {\r\n    _transferOwnership(newOwner);\r\n  }\r\n\r\n  /**\r\n   * @dev Transfers ownership of the contract to a new account (`newOwner`).\r\n   */\r\n  function _transferOwnership(address newOwner) internal {\r\n    require(newOwner != address(0), "Ownable: new owner is the zero address");\r\n    emit OwnershipTransferred(_owner, newOwner);\r\n    _owner = newOwner;\r\n  }\r\n}\r\n\r\ncontract X2 is Context, IBEP20, Ownable {\r\n  using SafeMath for uint256;\r\n\r\n  mapping (address => uint256) private _balances;\r\n\r\n  mapping (address => mapping (address => uint256)) private _allowances;\r\n\r\n  uint256 private _totalSupply;\r\n  uint8 public _decimals;\r\n  string public _symbol;\r\n  string public _name;\r\n\r\n  constructor() public {\r\n    _name = "X2";\r\n    _symbol = "X2";\r\n    _decimals = 18;\r\n    _totalSupply = 30000000000000000000000000;\r\n    _balances[msg.sender] = _totalSupply;\r\n\r\n    emit Transfer(address(0), msg.sender, _totalSupply);\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the bep token owner.\r\n   */\r\n  function getOwner() external view returns (address) {\r\n    return owner();\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the token decimals.\r\n   */\r\n  function decimals() external view returns (uint8) {\r\n    return _decimals;\r\n  }\r\n\r\n  /**\r\n   * @dev Returns the token symbol.\r\n   */\r\n  function symbol() external view returns (string memory) {\r\n    return _symbol;\r\n  }\r\n\r\n  /**\r\n  * @dev Returns the token name.\r\n  */\r\n  function name() external view returns (string memory) {\r\n    return _name;\r\n  }\r\n\r\n  /**\r\n   * @dev See {BEP20-totalSupply}.\r\n   */\r\n  function totalSupply() external view returns (uint256) {\r\n    return _totalSupply;\r\n  }\r\n\r\n  /**\r\n   * @dev See {BEP20-balanceOf}.\r\n   */\r\n  function balanceOf(address account) external view returns (uint256) {\r\n    return _balances[account];\r\n  }\r\n\r\n  /**\r\n   * @dev See {BEP20-transfer}.\r\n   *\r\n   * Requirements:\r\n   *\r\n   * - `recipient` cannot be the zero address.\r\n   * - the caller must have a balance of at least `amount`.\r\n   */\r\n  function transfer(address recipient, uint256 amount) external returns (bool) {\r\n    _transfer(_msgSender(), recipient, amount);\r\n    return true;\r\n  }\r\n\r\n  /**\r\n   * @dev See {BEP20-allowance}.\r\n   */\r\n  function allowance(address owner, address spender) external view returns (uint256) {\r\n    return _allowances[owner][spender];\r\n  }\r\n\r\n  /**\r\n   * @dev See {BEP20-approve}.\r\n   *\r\n   * Requirements:\r\n   *\r\n   * - `spender` cannot be the zero address.\r\n   */\r\n  function approve(address spender, uint256 amount) external returns (bool) {\r\n    _approve(_msgSender(), spender, amount);\r\n    return true;\r\n  }\r\n\r\n  /**\r\n   * @dev See {BEP20-transferFrom}.\r\n   *\r\n   * Emits an {Approval} event indicating the updated allowance. This is not\r\n   * required by the EIP. See the note at the beginning of {BEP20};\r\n   *\r\n   * Requirements:\r\n   * - `sender` and `recipient` cannot be the zero address.\r\n   * - `sender` must have a balance of at least `amount`.\r\n   * - the caller must have allowance for `sender`\'s tokens of at least\r\n   * `amount`.\r\n   */\r\n  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) {\r\n    _transfer(sender, recipient, amount);\r\n    _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "BEP20: transfer amount exceeds allowance"));\r\n    return true;\r\n  }\r\n\r\n  /**\r\n   * @dev Atomically increases the allowance granted to `spender` by the caller.\r\n   *\r\n   * This is an alternative to {approve} that can be used as a mitigation for\r\n   * problems described in {BEP20-approve}.\r\n   *\r\n   * Emits an {Approval} event indicating the updated allowance.\r\n   *\r\n   * Requirements:\r\n   *\r\n   * - `spender` cannot be the zero address.\r\n   */\r\n  function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {\r\n    _approve(_msgSender(), spender, _allowances[_msgSender()][spender].add(addedValue));\r\n    return true;\r\n  }\r\n\r\n  /**\r\n   * @dev Atomically decreases the allowance granted to `spender` by the caller.\r\n   *\r\n   * This is an alternative to {approve} that can be used as a mitigation for\r\n   * problems described in {BEP20-approve}.\r\n   *\r\n   * Emits an {Approval} event indicating the updated allowance.\r\n   *\r\n   * Requirements:\r\n   *\r\n   * - `spender` cannot be the zero address.\r\n   * - `spender` must have allowance for the caller of at least\r\n   * `subtractedValue`.\r\n   */\r\n  function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {\r\n    _approve(_msgSender(), spender, _allowances[_msgSender()][spender].sub(subtractedValue, "BEP20: decreased allowance below zero"));\r\n    return true;\r\n  }\r\n\r\n  /**\r\n   * @dev Creates `amount` tokens and assigns them to `msg.sender`, increasing\r\n   * the total supply.\r\n   *\r\n   * Requirements\r\n   *\r\n   * - `msg.sender` must be the token owner\r\n   */\r\n  function mint(uint256 amount) public onlyOwner returns (bool) {\r\n    _mint(_msgSender(), amount);\r\n    return true;\r\n  }\r\n\r\n  /**\r\n   * @dev Burn `amount` tokens and decreasing the total supply.\r\n   */\r\n  function burn(uint256 amount) public returns (bool) {\r\n    _burn(_msgSender(), amount);\r\n    return true;\r\n  }\r\n\r\n  /**\r\n   * @dev Moves tokens `amount` from `sender` to `recipient`.\r\n   *\r\n   * This is internal function is equivalent to {transfer}, and can be used to\r\n   * e.g. implement automatic token fees, slashing mechanisms, etc.\r\n   *\r\n   * Emits a {Transfer} event.\r\n   *\r\n   * Requirements:\r\n   *\r\n   * - `sender` cannot be the zero address.\r\n   * - `recipient` cannot be the zero address.\r\n   * - `sender` must have a balance of at least `amount`.\r\n   */\r\n  function _transfer(address sender, address recipient, uint256 amount) internal {\r\n    require(sender != address(0), "BEP20: transfer from the zero address");\r\n    require(recipient != address(0), "BEP20: transfer to the zero address");\r\n\r\n    _balances[sender] = _balances[sender].sub(amount, "BEP20: transfer amount exceeds balance");\r\n    _balances[recipient] = _balances[recipient].add(amount);\r\n    emit Transfer(sender, recipient, amount);\r\n  }\r\n\r\n  /** @dev Creates `amount` tokens and assigns them to `account`, increasing\r\n   * the total supply.\r\n   *\r\n   * Emits a {Transfer} event with `from` set to the zero address.\r\n   *\r\n   * Requirements\r\n   *\r\n   * - `to` cannot be the zero address.\r\n   */\r\n  function _mint(address account, uint256 amount) internal {\r\n    require(account != address(0), "BEP20: mint to the zero address");\r\n\r\n    _totalSupply = _totalSupply.add(amount);\r\n    _balances[account] = _balances[account].add(amount);\r\n    emit Transfer(address(0), account, amount);\r\n  }\r\n\r\n  /**\r\n   * @dev Destroys `amount` tokens from `account`, reducing the\r\n   * total supply.\r\n   *\r\n   * Emits a {Transfer} event with `to` set to the zero address.\r\n   *\r\n   * Requirements\r\n   *\r\n   * - `account` cannot be the zero address.\r\n   * - `account` must have at least `amount` tokens.\r\n   */\r\n  function _burn(address account, uint256 amount) internal {\r\n    require(account != address(0), "BEP20: burn from the zero address");\r\n\r\n    _balances[account] = _balances[account].sub(amount, "BEP20: burn amount exceeds balance");\r\n    _totalSupply = _totalSupply.sub(amount);\r\n    emit Transfer(account, address(0), amount);\r\n  }\r\n\r\n  /**\r\n   * @dev Sets `amount` as the allowance of `spender` over the `owner`s tokens.\r\n   *\r\n   * This is internal function is equivalent to `approve`, and can be used to\r\n   * e.g. set automatic allowances for certain subsystems, etc.\r\n   *\r\n   * Emits an {Approval} event.\r\n   *\r\n   * Requirements:\r\n   *\r\n   * - `owner` cannot be the zero address.\r\n   * - `spender` cannot be the zero address.\r\n   */\r\n  function _approve(address owner, address spender, uint256 amount) internal {\r\n    require(owner != address(0), "BEP20: approve from the zero address");\r\n    require(spender != address(0), "BEP20: approve to the zero address");\r\n\r\n    _allowances[owner][spender] = amount;\r\n    emit Approval(owner, spender, amount);\r\n  }\r\n\r\n  /**\r\n   * @dev Destroys `amount` tokens from `account`.`amount` is then deducted\r\n   * from the caller\'s allowance.\r\n   *\r\n   * See {_burn} and {_approve}.\r\n   */\r\n  function _burnFrom(address account, uint256 amount) internal {\r\n    _burn(account, amount);\r\n    _approve(account, _msgSender(), _allowances[account][_msgSender()].sub(amount, "BEP20: burn amount exceeds allowance"));\r\n  }\r\n}',
      keccak256:
        "0xce0fdd5edf018d11acf1b78c568bbc900cdec244bd35a41509cd34d20fa8d9c1",
    },
  },
  version: 1,
};

var output = solc.compile(JSON.stringify(input));
console.log(output);
