pragma solidity ^0.4.24;

// ----------- Libraries ----------- //

// ----------- Contracts ----------- //
import './Database.sol';

contract EncodeGasTest{

  Database public database;
  bool private rentrancy_lock = false;

  constructor(address _database)
  public {
    database = Database(_database);
  }


 /* ------------------------------------------
                    UINT
    ------------------------------------------*/
  function storingTheUintEncodePacked(uint _param)
  public
  returns  (bool)
  {
    database.setUint(keccak256(abi.encodePacked('username/identifier-test')), _param);
    return true;
  }

  function storingTheUintEncode(uint _param)
  public
  returns  (bool)
  {
    database.setUint(keccak256(abi.encode('username/identifier-test')), _param);
    return true;
  }

  function storingTheUintEncodeWithSelector(bytes4 _selector, uint _param)
  public
  returns  (bool)
  {
    database.setUint(keccak256(abi.encodeWithSelector(_selector, 'username/identifier-test')), _param);
    return true;
  }

  function storingTheUintEncodeWithSignature(string _signature, uint _param)
  public
  returns  (bool)
  {
    database.setUint(keccak256(abi.encodeWithSignature(_signature, 'username/identifier-test')), _param);
    return true;
  }


  /* ------------------------------------------
                     STRING
     ------------------------------------------*/
  function storingTheStringEncodePacked(string _theString)
  public
  returns (bool)
  {
    database.setString(keccak256(abi.encodePacked('username/identifier-test')), _theString);
    return true;
  }

  function storingTheStringEncode(string _theString)
  public
  returns (bool)
  {
    database.setString(keccak256(abi.encode('username/identifier-test')), _theString);
    return true;
  }

  function storingTheStringEncodeWithSelector(bytes4 _selector, string _theString)
  public
  returns (bool)
  {
    database.setString(keccak256(abi.encodeWithSelector(_selector, 'username/identifier-test')), _theString);
    return true;
  }

  function storingTheStringEncodeWithSignature(string _signature, string _theString)
  public
  returns (bool)
  {
    database.setString(keccak256(abi.encodeWithSignature(_signature, 'username/identifier-test')), _theString);
    return true;
  }


  /* ------------------------------------------
                     ADDRESS
     ------------------------------------------*/
  function storingTheAddressEncodePacked(address _param)
  public
  returns (bool)
  {
    database.setAddress(keccak256(abi.encodePacked('username/identifier-test')), _param);
    return true;
  }

  function storingTheAddressEncode(address _param)
  public
  returns (bool)
  {
    database.setAddress(keccak256(abi.encode('username/identifieuint-test')), _param);
    return true;
  }

  function storingTheAddressEncodeWithSelector(bytes4 _selector, address _param)
  public
  returns (bool)
  {
    database.setAddress(keccak256(abi.encodeWithSelector(_selector, 'username/identifier-test')), _param);
    return true;
  }

  function storingTheAddressEncodeWithSignature(string _signature, address _param)
  public
  returns (bool)
  {
    database.setAddress(keccak256(abi.encodeWithSignature(_signature, 'username/identifier-test')), _param);
    return true;
  }


  /* ------------------------------------------
                     BYTES
     ------------------------------------------*/
  function storingTheBytesEncodePacked(bytes _param)
  public
  returns  (bool)
  {
    database.setBytes(keccak256(abi.encodePacked('username/identifier-test')), _param);
    return true;
  }

  function storingTheBytesEncode(bytes _param)
  public
  returns  (bool)
  {
    database.setBytes(keccak256(abi.encode('username/identifier-test')), _param);
    return true;
  }

  function storingTheBytesEncodeWithSelector(bytes4 _selector, bytes _param)
  public
  returns  (bool)
  {
    database.setBytes(keccak256(abi.encodeWithSelector(_selector, 'username/identifier-test')), _param);
    return true;
  }

  function storingTheBytesEncodeWithSignature(string _signature, bytes _param)
  public
  returns  (bool)
  {
    database.setBytes(keccak256(abi.encodeWithSignature(_signature, 'username/identifier-test')), _param);
    return true;
  }


  /* ------------------------------------------
                     BYTES32
     ------------------------------------------*/
  function storingTheBytes32EncodePacked(bytes32 _param)
  public
  returns  (bool)
  {
    database.setBytes32(keccak256(abi.encodePacked('username/identifier-test')), _param);
    return true;
  }

  function storingTheBytes32Encode(bytes32 _param)
  public
  returns  (bool)
  {
    database.setBytes32(keccak256(abi.encode('username/identifier-test')), _param);
    return true;
  }

  function storingTheBytes32EncodeWithSelector(bytes4 _selector, bytes32 _param)
  public
  returns  (bool)
  {
    database.setBytes32(keccak256(abi.encodeWithSelector(_selector, 'username/identifier-test')), _param);
    return true;
  }

  function storingTheBytes32EncodeWithSignature(string _signature, bytes32 _param)
  public
  returns  (bool)
  {
    database.setBytes32(keccak256(abi.encodeWithSignature(_signature, 'username/identifier-test')), _param);
    return true;
  }

  /* ------------------------------------------
                     BOOL
     ------------------------------------------*/
  function storingTheBoolEncodePacked(bool _param)
  public
  returns  (bool)
  {
    database.setBool(keccak256(abi.encodePacked('username/identifier-test')), _param);
    return true;
  }

  function storingTheBoolEncode(bool _param)
  public
  returns  (bool)
  {
    database.setBool(keccak256(abi.encode('username/identifier-test')), _param);
    return true;
  }

  function storingTheBoolEncodeWithSelector(bytes4 _selector, bool _param)
  public
  returns  (bool)
  {
    database.setBool(keccak256(abi.encodeWithSelector(_selector, 'username/identifier-test')), _param);
    return true;
  }

  function storingTheBoolEncodeWithSignature(string _signature, bool _param)
  public
  returns  (bool)
  {
    database.setBool(keccak256(abi.encodeWithSignature(_signature, 'username/identifier-test')), _param);
    return true;
  }

  /* ------------------------------------------
                     INT
     ------------------------------------------*/
  function storingTheIntEncodePacked(int _param)
  public
  returns  (bool)
  {
    database.setInt(keccak256(abi.encodePacked('username/identifier-test')), _param);
    return true;
  }

  function storingTheIntEncode(int _param)
  public
  returns  (bool)
  {
    database.setInt(keccak256(abi.encode('username/identifier-test')), _param);
    return true;
  }

  function storingTheIntEncodeWithSelector(bytes4 _selector, int _param)
  public
  returns  (bool)
  {
    database.setInt(keccak256(abi.encodeWithSelector(_selector, 'username/identifier-test')), _param);
    return true;
  }

  function storingTheIntEncodeWithSignature(string _signature, int _param)
  public
  returns  (bool)
  {
    database.setInt(keccak256(abi.encodeWithSignature(_signature, 'username/identifier-test')), _param);
    return true;
  }
}
