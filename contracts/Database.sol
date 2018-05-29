pragma solidity ^0.4.19;

// This contract is where all long-term data is stored within the Jynx smart-contract system.
contract Database {

// ---------------Storage Variables----------------

    mapping(bytes32 => uint) public uintStorage;
    mapping(bytes32 => string) public stringStorage;
    mapping(bytes32 => address) public addressStorage;
    mapping(bytes32 => bytes) public bytesStorage;
    mapping(bytes32 => bytes32) public bytes32Storage;
    mapping(bytes32 => bool) public boolStorage;
    mapping(bytes32 => int) public intStorage;



  // This is the first contract to get deployed. Will store all data + references to other contracts
  constructor(address _ownerOne)
  public {
    boolStorage[keccak256(abi.encodePacked("owner", _ownerOne))] = true;
    emit LogInitialized(_ownerOne);
  }


    // --------------------Set Functions------------------------

    function setAddress(bytes32 _key, address _value)
    external {
        addressStorage[_key] = _value;
    }

    function setUint(bytes32 _key, uint _value)
    external {
        uintStorage[_key] = _value;
    }

    function setString(bytes32 _key, string _value)
    external {
        stringStorage[_key] = _value;
    }

    function setBytes(bytes32 _key, bytes _value)
    external {
        bytesStorage[_key] = _value;
    }

    function setBytes32(bytes32 _key, bytes32 _value)
    external {
        bytes32Storage[_key] = _value;
    }

    function setBool(bytes32 _key, bool _value)
    external {
        boolStorage[_key] = _value;
    }

    function setInt(bytes32 _key, int _value)
    external {
        intStorage[_key] = _value;
    }

     // -------------- Deletion Functions ------------------

    function deleteAddress(bytes32 _key)
    external {
        delete addressStorage[_key];
    }

    function deleteUint(bytes32 _key)
    external {
        delete uintStorage[_key];
    }

    function deleteString(bytes32 _key)
    external {
        delete stringStorage[_key];
    }

    function deleteBytes(bytes32 _key)
    external {
        delete bytesStorage[_key];
    }

    function deleteBytes32(bytes32 _key)
    external {
        delete bytes32Storage[_key];
    }

    function deleteBool(bytes32 _key)
    external {
        delete boolStorage[_key];
    }

    function deleteInt(bytes32 _key)
    external {
        delete intStorage[_key];
    }


    event LogInitialized(address indexed _ownerOne);
}
