const {BigInt, randomBytes} = require("ethers");

const numberOfBigNumbersToBeGenerated = 10;

async function generate() {
    for(let i=0; i< numberOfBigNumbersToBeGenerated; i++){
        // Generating uint256 , 256/8 (bytes)
        let n = BigInt(randomBytes(32));
        // let n = ethers.BigNumber.from(ethers.utils.randomBytes(32));
        console.log(n);
    }
}

generate().catch((err) => {console.log(err); process.exit(1);})