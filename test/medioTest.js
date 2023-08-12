// Import necessary libraries and contract artifacts
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('ElectronicHealthRecordSystem', function () {
  let ehrContract;
  let owner, doctor, patient;

  before(async function () {
    
    const EHRContract = await ethers.getContractFactory('ElectronicHealthRecordSystem');
    ehrContract = await EHRContract.deploy();
    await ehrContract.deployed();

    [owner, doctor, patient] = await ethers.getSigners();
  });

  it('Should register a patient', async function () {
    await ehrContract.connect(patient).registerPatient('Alice', 30, 'Female');
    const patientInfo = await ehrContract.patients(patient.address);

    expect(patientInfo.name).to.equal('Alice');
  });

  it('Should register a doctor', async function () {
    await ehrContract.connect(owner).registerDoctor('Dr. Smith', 'Cardiologist');
    const doctorInfo = await ehrContract.doctors(owner.address);

    expect(doctorInfo.name).to.equal('Dr. Smith');
  });

  it('Should update health record by a doctor', async function () {
    await ehrContract.connect(doctor).updateHealthRecord(patient.address, 'Fever', 'Rest and fluids');
    const patientInfo = await ehrContract.patients(patient.address);

    expect(patientInfo.condition).to.equal('Fever');
    expect(patientInfo.treatment).to.equal('Rest and fluids');
  });

  it('Should retrieve patient health record', async function () {
    const [condition, treatment] = await ehrContract.connect(patient).getPatientHealthRecord();

    expect(condition).to.equal('Fever');
    expect(treatment).to.equal('Rest and fluids');
  });

  it('Should not allow non-owner to register a doctor', async function () {
    await expect(ehrContract.connect(patient).registerDoctor('Dr. Johnson', 'Pediatrician')).to.be.revertedWith(
      'Only the contract owner can perform this action'
    );
  });

  it('Should not allow non-doctor to update health record', async function () {
    await expect(
      ehrContract.connect(owner).updateHealthRecord(patient.address, 'Cough', 'Cough syrup')
    ).to.be.revertedWith('Only registered doctors can perform this action');
  });

});