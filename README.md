# Solidity-Encode-Gas-Comparison
With Solidity [V0.4.24](https://github.com/ethereum/solidity/releases/tag/v0.4.24) being relased, [new encoders](http://solidity.readthedocs.io/en/v0.4.24/units-and-global-variables.html#abi-encoding-functions) are available: abi.encodePacked, abi.encode, abi.encodeWithSelecto & abi.encodeWithSignature.  Got a bit curious and wanted to see the gas costs associated for each encoding method, for uint, address, bytes, bytes32, bool & int variables.



### Uint Comparison:
![Uint](imgs/uint.png?raw=true)


### String Comparison:
![String](imgs/string.png?raw=true)


### Address Comparison:
![Address](imgs/address.png?raw=true)


### Bytes Comparison:
![Bytes](imgs/bytes.png?raw=true)


### Bytes32 Comparison:
![Bytes32](imgs/bytes32.png?raw=true)


### Bool Comparison:
![Bool](imgs/bool.png?raw=true)


### Int Comparison:
![Int](imgs/int.png?raw=true)