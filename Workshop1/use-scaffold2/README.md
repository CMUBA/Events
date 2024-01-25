## Workshop 1: Use Scaffold-eth to create a contract and frontend
### Create a new project
1. npx command: 'npx create-eth@latest' (or 'npx create-eth@latest --use-yarn')
2. Choose 'scaffold-eth'
3. Choose 'Create a new project'


### Run your app

yarn chain
yarn start
yarn deploy
Add transfer ownership, then add the isOwner modifier so that only the owner can update it.

function updateOwner(address _newOwner) public isOwner{ owner = _newOwner; }

yarn deploy

### Build the frontend
Get the user address
Add the address const { address: connectedAddress } = useAccount();
Add the card (go to dasiyui and get a frontend card)
Add the address
Build the frontend: Get the contract owner address
Get the contract owner const { data: owner } = useScaffoldContractRead({ contractName: "YourContract", functionName: "owner", });
Display the contract owner
Build the frontend: update the owner
Add AddressInput field to get a new address from the user: New Owner:
Add the constants: const [newAddress, setNewAddress] = React.useState("");
Create onClick function: const { writeAsync: updateOwner } = useScaffoldContractWrite({ contractName: "YourContract", functionName: "updateOwner", args: [newAddress], });
Add onClick Function to the button: onClick={() => updateOwner()
### Deploy to a testnet
Deploy the contract yarn generate yarn account yarn deploy --network sepolia yarn verify --network sepolia