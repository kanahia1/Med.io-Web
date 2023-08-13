const express = require('express');
const {Web3} = require('web3');
const bodyparser = require('body-parser');



const app = express();
app.use(bodyparser.urlencoded({extended:true}));
const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/zCG3MX2Mtu81_Vw3--IM6nu_w5_fTyDx'); // Connect to your Ethereum node

const {abi} = require("./artifacts/contracts/Medio.sol/ElectronicHealthRecordSystem.json");
const contractAddress = '0xFC0AA3B95Dd157D92421187448a6c2be00A3C09A'; // Replace with your deployed contract address
const contract = new web3.eth.Contract(abi, contractAddress);

app.use(express.json());



// Route to register a patient
app.post('/register/patient', async (req, res) => {
    const { name, age, gender } = req.body;
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.registerPatient(name, age, gender).send({ from: accounts[0] });
    res.json(result);
});

// Route to register a doctor (only accessible by the contract owner)
app.post('/register/doctor', async (req, res) => {
    console.log("received request for register");
    const { name, specialization } = req.body;
    console.log("received request for register");
    const accounts = await web3.eth.getAccounts();
    console.log("received request for register");
    const result = await contract.methods.registerDoctor(name, specialization).send({ from: "0x37f6C44c08Dfa28b3372BEDF3bFc92a676Ec971f" });
    console.log("received request for register");
    res.json(result);
});

// Route to update a patient's health record (only accessible by registered doctors)
app.post('/update/health-record', async (req, res) => {
    const { patientAddress, condition, treatment } = req.body;
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.updateHealthRecord(patientAddress, condition, treatment).send({ from: "0xa194E3F074013b334E2d5817D7ce69002b957E15" });
    res.json(result);
});

// Route to get a patient's health record
app.get('/get/health-record', async (req, res) => {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.getPatientHealthRecord().call({ from: "0xa194E3F074013b334E2d5817D7ce69002b957E15" });
    res.json(result);
});

app.listen(3002, () => {
    console.log('API server is running on port 3002');
});
