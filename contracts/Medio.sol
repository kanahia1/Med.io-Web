// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ElectronicHealthRecordSystem {
    address public owner;

    struct Patient {
        uint256 id;
        string name;
        uint256 age;
        string gender;
        string condition;
        string treatment;
        string time;
    }

    struct Doctor {
        uint256 id;
        string name;
        string specialization;
    }
    address nominee;
    bool isDeceased = false;

    mapping(address => Patient) public patients;
    mapping(address => Doctor) public doctors;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    modifier onlyDoctor() {
        require(bytes(doctors[msg.sender].name).length != 0, "Only registered doctors can perform this action");
        _;
    }
    modifier onlyPatient(){
        require(bytes(doctors[msg.sender].name).length != 0, "Only registered doctors can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerPatient(string memory _name, uint256 _age, string memory _gender) external {
        require(bytes(patients[msg.sender].name).length == 0, "Patient is already registered");
        
        patients[msg.sender] = Patient({
            id: block.timestamp, 
            name: _name,
            age: _age,
            gender: _gender,
            condition: "",
            treatment: ""
        });
    }

    function registerDoctor(string memory _name, string memory _specialization) external onlyOwner {
        require(bytes(doctors[msg.sender].name).length == 0, "Doctor is already registered");
        
        doctors[msg.sender] = Doctor({
            id: block.timestamp, 
            name: _name,
            specialization: _specialization
        });
    }

    function updateHealthRecord(address _patient, string memory _condition, string memory _treatment) external onlyDoctor {
        Patient storage patient = patients[_patient];
        require(bytes(patient.name).length != 0, "Patient does not exist");

        patient.condition = _condition;
        patient.treatment = _treatment;
    }

    function getPatientHealthRecord() external view returns (string memory, string memory) {
        Patient storage patient = patients[msg.sender];
        require(bytes(patient.name).length != 0, "Patient does not exist");

        return (patient.condition, patient.treatment);
    }
   function setPatient(address _nominee) external onlyPatient returns(address){
        nominee = _nominee;
        return nominee;
   }
   function isDeceasedSetup(bool _isDeceased) external onlyDoctor returns(bool){
       isDeceased = _isDeceased;
       return isDeceased;
   }
}
