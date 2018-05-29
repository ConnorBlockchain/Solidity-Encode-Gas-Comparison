const Database = artifacts.require('./Database.sol');
const EncodeGasTest = artifacts.require('./EncodeGasTest.sol');

contract('Deploying and storing all contracts + validation', async (accounts) => {

  // ------------- Instances ------------ //
  let databaseInstance;
  let encodeGasTestInstance;

  let bytes4InDecimal = 1111;
  let bytes4InString = 'a'
  let dudAddress = web3.eth.accounts[1];


  it("Deploy", async () => {
     databaseInstance = await Database.new(web3.eth.accounts[0]);
     encodeGasTestInstance = await EncodeGasTest.new(databaseInstance.address);
   });


   it('Encode Comparison', async () => {
     /* --- Uint --- */
     let storingTheUintEncodePacked = await encodeGasTestInstance.storingTheUintEncodePacked(bytes4InDecimal);
     let storingTheUintEncode = await encodeGasTestInstance.storingTheUintEncode(bytes4InDecimal);
     let storingTheUintEncodeWithSelector = await encodeGasTestInstance.storingTheUintEncodeWithSelector(web3.toHex('a'), bytes4InDecimal)
     let storingTheUintEncodeWithSignature = await encodeGasTestInstance.storingTheUintEncodeWithSignature('Signature', bytes4InDecimal)
     let uintMinGasUsed = Math.min(storingTheUintEncodePacked.receipt.gasUsed, storingTheUintEncode.receipt.gasUsed, storingTheUintEncodeWithSelector.receipt.gasUsed, storingTheUintEncodeWithSignature.receipt.gasUsed);
     let uintMaxVal = Math.max(storingTheUintEncodePacked.receipt.gasUsed, storingTheUintEncode.receipt.gasUsed, storingTheUintEncodeWithSelector.receipt.gasUsed, storingTheUintEncodeWithSignature.receipt.gasUsed);
     let uintMeanGasUsed = (storingTheUintEncodePacked.receipt.gasUsed + storingTheUintEncode.receipt.gasUsed + storingTheUintEncodeWithSelector.receipt.gasUsed + storingTheUintEncodeWithSignature.receipt.gasUsed) / 4;
     console.log('storingTheUintEncodePacked ', storingTheUintEncodePacked.receipt.gasUsed, '\n',
                 'storingTheUintEncode ', storingTheUintEncode.receipt.gasUsed, '\n',
                 'storingTheUintEncodeWithSelector', storingTheUintEncodeWithSelector.receipt.gasUsed, '\n',
                 'storingTheUintEncodeWithSignature', storingTheUintEncodeWithSignature.receipt.gasUsed, '\n',
                 'uintMinGasUsed, ', uintMinGasUsed, '\n',
                 'uintMaxVal, ', uintMaxVal, '\n',
                 'uintMeanGasUsed', uintMeanGasUsed, '\n\n'
                );


     /* --- String --- */
     let storingTheStringEncodePacked = await encodeGasTestInstance.storingTheStringEncodePacked('a');
     let storingTheStringEncode = await encodeGasTestInstance.storingTheStringEncode('a');
     let storingTheStringEncodeWithSelector = await encodeGasTestInstance.storingTheStringEncodeWithSelector(web3.toHex('a'), 'a')
     let storingTheStringEncodeWithSignature = await encodeGasTestInstance.storingTheStringEncodeWithSignature('Signature', 'a')
     let stringMinGasUsed = Math.min(storingTheStringEncodePacked.receipt.gasUsed, storingTheStringEncode.receipt.gasUsed, storingTheStringEncodeWithSelector.receipt.gasUsed, storingTheStringEncodeWithSignature.receipt.gasUsed);
     let stringMaxVal = Math.max(storingTheStringEncodePacked.receipt.gasUsed, storingTheStringEncode.receipt.gasUsed, storingTheStringEncodeWithSelector.receipt.gasUsed, storingTheStringEncodeWithSignature.receipt.gasUsed);
     let stringMeanGasUsed = (storingTheStringEncodePacked.receipt.gasUsed + storingTheStringEncode.receipt.gasUsed + storingTheStringEncodeWithSelector.receipt.gasUsed + storingTheStringEncodeWithSignature.receipt.gasUsed) / 4;
     console.log('storingTheStringEncodePacked ', storingTheStringEncodePacked.receipt.gasUsed, '\n',
                 'storingTheStringEncode ', storingTheStringEncode.receipt.gasUsed, '\n',
                 'storingTheStringEncodeWithSelector', storingTheStringEncodeWithSelector.receipt.gasUsed, '\n',
                 'storingTheStringEncodeWithSignature', storingTheStringEncodeWithSignature.receipt.gasUsed, '\n',
                 'stringMinGasUsed, ', stringMinGasUsed, '\n',
                 'stringMaxVal, ', stringMaxVal, '\n',
                 'stringMeanGasUsed', stringMeanGasUsed, '\n\n'
               );


     /* --- Address --- */
     let storingTheAddressEncodePacked = await encodeGasTestInstance.storingTheAddressEncodePacked(dudAddress);
     let storingTheAddressEncode = await encodeGasTestInstance.storingTheAddressEncodePacked(dudAddress);
     let storingTheAddressEncodeWithSelector = await encodeGasTestInstance.storingTheUintEncodeWithSelector(web3.toHex('a'), dudAddress)
     let storingTheAddressEncodeWithSignature = await encodeGasTestInstance.storingTheAddressEncodeWithSignature('Signature', dudAddress)
     let addressMinGasUsed = Math.min(storingTheAddressEncodePacked.receipt.gasUsed, storingTheAddressEncode.receipt.gasUsed, storingTheAddressEncodeWithSelector.receipt.gasUsed, storingTheAddressEncodeWithSignature.receipt.gasUsed);
     let addressMaxVal = Math.max(storingTheAddressEncodePacked.receipt.gasUsed, storingTheAddressEncode.receipt.gasUsed, storingTheAddressEncodeWithSelector.receipt.gasUsed, storingTheAddressEncodeWithSignature.receipt.gasUsed);
     let addressMeanGasUsed = (storingTheAddressEncodePacked.receipt.gasUsed + storingTheAddressEncode.receipt.gasUsed + storingTheAddressEncodeWithSelector.receipt.gasUsed + storingTheAddressEncodeWithSignature.receipt.gasUsed) / 4;
     console.log('storingTheAddressEncodePacked ', storingTheAddressEncodePacked.receipt.gasUsed, '\n',
                 'storingTheAddressEncode ', storingTheAddressEncode.receipt.gasUsed, '\n',
                 'storingTheAddressEncodeWithSelector', storingTheAddressEncodeWithSelector.receipt.gasUsed, '\n',
                 'storingTheAddressEncodeWithSignature', storingTheAddressEncodeWithSignature.receipt.gasUsed, '\n',
                 'addressMinGasUsed, ', addressMinGasUsed, '\n',
                 'addressMaxVal, ', addressMaxVal, '\n',
                 'addressMeanGasUsed', addressMeanGasUsed, '\n\n'
               );


     /* --- Bytes --- */
     let storingTheBytesEncodePacked = await encodeGasTestInstance.storingTheBytesEncodePacked(web3.toHex('a'));
     let storingTheBytesEncode = await encodeGasTestInstance.storingTheBytesEncode(web3.toHex('a'));
     let storingTheBytesEncodeWithSelector = await encodeGasTestInstance.storingTheBytesEncodeWithSelector(web3.toHex('a'), web3.toHex('a'));
     let storingTheBytesEncodeWithSignature = await encodeGasTestInstance.storingTheBytesEncodeWithSignature('Signature', web3.toHex('a'));
     let bytesMinGasUsed = Math.min(storingTheBytesEncodePacked.receipt.gasUsed, storingTheBytesEncode.receipt.gasUsed, storingTheBytesEncodeWithSelector.receipt.gasUsed, storingTheBytesEncodeWithSignature.receipt.gasUsed);
     let bytesMaxVal = Math.max(storingTheBytesEncodePacked.receipt.gasUsed, storingTheBytesEncode.receipt.gasUsed, storingTheBytesEncodeWithSelector.receipt.gasUsed, storingTheBytesEncodeWithSignature.receipt.gasUsed);
     let bytesMeanGasUsed = (storingTheBytesEncodePacked.receipt.gasUsed + storingTheBytesEncode.receipt.gasUsed + storingTheBytesEncodeWithSelector.receipt.gasUsed + storingTheBytesEncodeWithSignature.receipt.gasUsed) / 4;
     console.log('storingTheBytesEncodePacked ', storingTheBytesEncodePacked.receipt.gasUsed, '\n',
                 'storingTheBytesEncode ', storingTheBytesEncode.receipt.gasUsed, '\n',
                 'storingTheBytesEncodeWithSelector', storingTheBytesEncodeWithSelector.receipt.gasUsed, '\n',
                 'storingTheBytesEncodeWithSignature', storingTheBytesEncodeWithSignature.receipt.gasUsed, '\n',
                 'bytesMinGasUsed, ', bytesMinGasUsed, '\n',
                 'bytesMaxVal, ', bytesMaxVal, '\n',
                 'bytesMeanGasUsed', bytesMeanGasUsed, '\n\n'
               );


     /* --- Bytes32 --- */
     let storingTheBytes32EncodePacked = await encodeGasTestInstance.storingTheBytes32EncodePacked(web3.toHex('a'));
     let storingTheBytes32Encode = await encodeGasTestInstance.storingTheBytes32Encode(web3.toHex('a'));
     let storingTheBytes32EncodeWithSelector = await encodeGasTestInstance.storingTheBytes32EncodeWithSelector(web3.toHex('a'), web3.toHex('a'));
     let storingTheBytes32EncodeWithSignature = await encodeGasTestInstance.storingTheBytes32EncodeWithSignature('Signature', web3.toHex('a'));
     let bytes32MinGasUsed = Math.min(storingTheBytes32EncodePacked.receipt.gasUsed, storingTheBytes32Encode.receipt.gasUsed, storingTheBytes32EncodeWithSelector.receipt.gasUsed, storingTheBytes32EncodeWithSignature.receipt.gasUsed);
     let bytes32MaxVal = Math.max(storingTheBytes32EncodePacked.receipt.gasUsed, storingTheBytes32Encode.receipt.gasUsed, storingTheBytes32EncodeWithSelector.receipt.gasUsed, storingTheBytes32EncodeWithSignature.receipt.gasUsed);
     let bytes32MeanGasUsed = (storingTheBytes32EncodePacked.receipt.gasUsed + storingTheBytes32Encode.receipt.gasUsed + storingTheBytes32EncodeWithSelector.receipt.gasUsed + storingTheBytes32EncodeWithSignature.receipt.gasUsed) / 4;
     console.log('storingTheBytes32EncodePacked ', storingTheBytes32EncodePacked.receipt.gasUsed, '\n',
                 'storingTheBytes32Encode ', storingTheBytes32Encode.receipt.gasUsed, '\n',
                 'storingTheBytes32EncodeWithSelector', storingTheBytes32EncodeWithSelector.receipt.gasUsed, '\n',
                 'storingTheBytes32EncodeWithSignature', storingTheBytes32EncodeWithSignature.receipt.gasUsed, '\n',
                 'bytes32MinGasUsed, ', bytes32MinGasUsed, '\n',
                 'bytes32MaxVal, ', bytes32MaxVal, '\n',
                 'bytes32MeanGasUsed', bytes32MeanGasUsed, '\n\n'
               );


     /* --- Bool --- */
     let storingTheBoolEncodePacked = await encodeGasTestInstance.storingTheBoolEncodePacked(true);
     let storingTheBoolEncode = await encodeGasTestInstance.storingTheBoolEncode(true);
     let storingTheBoolEncodeWithSelector = await encodeGasTestInstance.storingTheBoolEncodeWithSelector(web3.toHex('a'), true);
     let storingTheBoolEncodeWithSignature = await encodeGasTestInstance.storingTheBoolEncodeWithSignature('Signature', true);
     let boolMinGasUsed = Math.min(storingTheBoolEncodePacked.receipt.gasUsed, storingTheBoolEncode.receipt.gasUsed, storingTheBoolEncodeWithSelector.receipt.gasUsed, storingTheBoolEncodeWithSignature.receipt.gasUsed);
     let boolMaxVal = Math.max(storingTheBoolEncodePacked.receipt.gasUsed, storingTheBoolEncode.receipt.gasUsed, storingTheBoolEncodeWithSelector.receipt.gasUsed, storingTheBoolEncodeWithSignature.receipt.gasUsed);
     let boolMeanGasUsed = (storingTheBoolEncodePacked.receipt.gasUsed + storingTheBoolEncode.receipt.gasUsed + storingTheBoolEncodeWithSelector.receipt.gasUsed + storingTheBoolEncodeWithSignature.receipt.gasUsed) / 4;
     console.log('storingTheBoolEncodePacked ', storingTheBoolEncodePacked.receipt.gasUsed, '\n',
                 'storingTheBoolEncode ', storingTheBoolEncode.receipt.gasUsed, '\n',
                 'storingTheBoolEncodeWithSelector', storingTheBoolEncodeWithSelector.receipt.gasUsed, '\n',
                 'storingTheBoolEncodeWithSignature', storingTheBoolEncodeWithSignature.receipt.gasUsed, '\n',
                 'boolMinGasUsed, ', boolMinGasUsed, '\n',
                 'boolMaxVal, ', boolMaxVal, '\n',
                 'boolMeanGasUsed', boolMeanGasUsed, '\n\n'
               );


     /* --- Int --- */
     let storingTheIntEncodePacked = await encodeGasTestInstance.storingTheIntEncodePacked(bytes4InDecimal);
     let storingTheIntEncode = await encodeGasTestInstance.storingTheIntEncode(bytes4InDecimal);
     let storingTheIntEncodeWithSelector = await encodeGasTestInstance.storingTheIntEncodeWithSelector(web3.toHex('a'), bytes4InDecimal)
     let storingTheIntEncodeWithSignature = await encodeGasTestInstance.storingTheIntEncodeWithSignature('Signature', bytes4InDecimal);
     let intMinGasUsed = Math.min(storingTheIntEncodePacked.receipt.gasUsed, storingTheIntEncode.receipt.gasUsed, storingTheIntEncodeWithSelector.receipt.gasUsed, storingTheIntEncodeWithSignature.receipt.gasUsed);
     let intMaxVal = Math.max(storingTheIntEncodePacked.receipt.gasUsed, storingTheIntEncode.receipt.gasUsed, storingTheIntEncodeWithSelector.receipt.gasUsed, storingTheIntEncodeWithSignature.receipt.gasUsed);
     let intMeanGasUsed = (storingTheIntEncodePacked.receipt.gasUsed + storingTheIntEncode.receipt.gasUsed + storingTheIntEncodeWithSelector.receipt.gasUsed + storingTheIntEncodeWithSignature.receipt.gasUsed) / 4;
     console.log('storingTheIntEncodePacked ', storingTheIntEncodePacked.receipt.gasUsed, '\n',
                 'storingTheIntEncode ', storingTheIntEncode.receipt.gasUsed, '\n',
                 'storingTheIntEncodeWithSelector', storingTheIntEncodeWithSelector.receipt.gasUsed, '\n',
                 'storingTheIntEncodeWithSignature', storingTheIntEncodeWithSignature.receipt.gasUsed, '\n',
                 'intMinGasUsed, ', intMinGasUsed, '\n',
                 'intMaxGasUsed, ', intMaxVal, '\n',
                 'intMeanGasUsed', intMeanGasUsed, '\n\n'
               );
   });
});
