async function main(){
    const[deployer] = await ethers.getSigners();

    const ElectronicHealthRecordSystem = await ethers.getContractFactory("ElectronicHealthRecordSystem");
    const medio = await ElectronicHealthRecordSystem.deploy();
    console.log("Medio address:", medio.address);
}

main()
     .then(()=> process.exit(0))
     .catch((error)=> {
        console.error(error);
        process.exit(1);
     });