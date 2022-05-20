//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract BlockAudio{

  address private _owner;

  constructor() {
    _owner = 0xef3A8D0a15755D024D514b984bec87d59638f1D1;
  }

  modifier onlyOwner() 
  {
    require(isOwner(),
    "Function accessible only by the owner !!");
    _;
  }

  function isOwner() public view returns(bool) 
  {
    return msg.sender == _owner;
  }

  string clip1;
  string clip2;
  string clip3;
  string clip4;
  string clip5;
  string clip6;
  string clip7;
  string clip8;
  string clip9;
  string clip10;
  string clip11;
  string clip12;
  string clip13;
  string clip14;
  string clip15;
  string clip16;
  string clip17;
  string clip18;

  string audioclip1;
  string audioclip2;
  string audioclip3;
  string audioclip4;
  string audioclip5;
  string audioclip6;
  string audioclip7;
  string audioclip8;
  string audioclip9;
  string audioclip10;
  string audioclip11;
  string audioclip12;
  string audioclip13;
  string audioclip14;
  string audioclip15;
  string audioclip16;
  string audioclip17;
  string audioclip18;


  function setFirst1(string memory _audio) onlyOwner external {
    clip1 = string(abi.encodePacked('data:video/mp4;base64,', _audio));
  } 

  function getFirst1() public view returns (string memory) {
        return clip1;
  }

  function setFirst2(string memory _audio) onlyOwner external {
    clip2 = string(_audio);
  }

  function getFirst2() public view returns (string memory) {
        return clip2;
  }

  function setFirst3(string memory _audio) onlyOwner external {
    clip3 = string(_audio);
  }

  function getFirst3() public view returns (string memory) {
        return clip3;
  }

  function setFirst4(string memory _audio) onlyOwner external {
    clip4 = string(_audio);
  }

  function getFirst4() public view returns (string memory) {
        return clip4;
  }

  function setFirst5(string memory _audio) onlyOwner external {
    clip5 = string(_audio);
  }

  function getFirst5() public view returns (string memory) {
        return clip5;
  }

  function setFirst6(string memory _audio) onlyOwner external {
    clip6 = string(_audio);
  }

  function getFirst6() public view returns (string memory) {
        return clip6;
  }

  function setFirst7(string memory _audio) onlyOwner external {
    clip7 = string(_audio);
  }

  function getFirst7() public view returns (string memory) {
        return clip7;
  }

  function setFirst8(string memory _audio) onlyOwner external {
    clip8 = string(_audio);
  }

  function getFirst8() public view returns (string memory) {
        return clip8;
  }

  function setFirst9(string memory _audio) onlyOwner external {
    clip9 = string(_audio);
  }

  function getFirst9() public view returns (string memory) {
        return clip9;
  }

   function setFirst10(string memory _audio) onlyOwner external {
    clip10 = string(_audio);
  }

  function getFirst10() public view returns (string memory) {
        return clip10;
  }

   function setFirst11(string memory _audio) onlyOwner external {
    clip11 = string(_audio);
  }

  function getFirst11() public view returns (string memory) {
        return clip11;
  }

   function setFirst12(string memory _audio) onlyOwner external {
    clip12 = string(_audio);
  }

  function getFirst12() public view returns (string memory) {
        return clip12;
  }

  function setFirst13(string memory _audio) onlyOwner external {
    clip13 = string(_audio);
  }

  function getFirst13() public view returns (string memory) {
        return clip13;
  }

  function setFirst14(string memory _audio) onlyOwner external {
    clip14 = string(_audio);
  }

  function getFirst14() public view returns (string memory) {
        return clip14;
  }

  function setFirst15(string memory _audio) onlyOwner external {
    clip15 = string(_audio);
  }

  function getFirst15() public view returns (string memory) {
        return clip15;
  }

  function setFirst16(string memory _audio) onlyOwner external {
    clip16 = string(_audio);
  }

  function getFirst16() public view returns (string memory) {
        return clip16;
  }

  function setFirst17(string memory _audio) onlyOwner external {
    clip17 = string(_audio);
  }

  function getFirst17() public view returns (string memory) {
        return clip17;
  }

  function setFirst18(string memory _audio) onlyOwner external {
    clip18 = string(_audio);
  }

  function getFirst18() public view returns (string memory) {
        return clip18;
  }

  function setAudioFirst1(string memory _audio) onlyOwner external {
    audioclip1 = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getAudioFirst1() public view returns (string memory) {
        return audioclip1;
  }

  function setAudioFirst2(string memory _audio) onlyOwner external {
    audioclip2 = string(_audio);
  }

  function getAudioFirst2() public view returns (string memory) {
        return audioclip2;
  }

  function setAudioFirst3(string memory _audio) onlyOwner external {
    audioclip3 = string(_audio);
  }

  function getAudioFirst3() public view returns (string memory) {
        return audioclip3;
  }

  function setAudioFirst4(string memory _audio) onlyOwner external {
    audioclip4 = string(_audio);
  }

  function getAudioFirst4() public view returns (string memory) {
        return audioclip4;
  }

  function setAudioFirst5(string memory _audio) onlyOwner external {
    audioclip5 = string(_audio);
  }

  function getAudioFirst5() public view returns (string memory) {
        return audioclip5;
  }

  function setAudioFirst6(string memory _audio) onlyOwner external {
    audioclip6 = string(_audio);
  }

  function getAudioFirst6() public view returns (string memory) {
        return audioclip6;
  }

  function setAudioFirst7(string memory _audio) onlyOwner external {
    audioclip7 = string(_audio);
  }

  function getAudioFirst7() public view returns (string memory) {
        return audioclip7;
  }

  function setAudioFirst8(string memory _audio) onlyOwner external {
    audioclip8 = string(_audio);
  }

  function getAudioFirst8() public view returns (string memory) {
        return audioclip8;
  }

  function setAudioFirst9(string memory _audio) onlyOwner external {
    audioclip9 = string(_audio);
  }

  function getAudioFirst9() public view returns (string memory) {
        return audioclip9;
  }

   function setAudioFirst10(string memory _audio) onlyOwner external {
    audioclip10 = string(_audio);
  }

  function getAudioFirst10() public view returns (string memory) {
        return audioclip10;
  }

   function setAudioFirst11(string memory _audio) onlyOwner external {
    audioclip11 = string(_audio);
  }

  function getAudioFirst11() public view returns (string memory) {
        return audioclip11;
  }

   function setAudioFirst12(string memory _audio) onlyOwner external {
    audioclip12 = string(_audio);
  }

  function getAudioFirst12() public view returns (string memory) {
        return audioclip12;
  }

  function setAudioFirst13(string memory _audio) onlyOwner external {
    audioclip13 = string(_audio);
  }

  function getAudioFirst13() public view returns (string memory) {
        return audioclip13;
  }

  function setAudioFirst14(string memory _audio) onlyOwner external {
    audioclip14 = string(_audio);
  }

  function getAudioFirst14() public view returns (string memory) {
        return audioclip14;
  }

  function setAudioFirst15(string memory _audio) onlyOwner external {
    audioclip15 = string(_audio);
  }

  function getAudioFirst15() public view returns (string memory) {
        return audioclip15;
  }

  function setAudioFirst16(string memory _audio) onlyOwner external {
    audioclip16 = string(_audio);
  }

  function getAudioFirst16() public view returns (string memory) {
        return audioclip16;
  }

  function setAudioFirst17(string memory _audio) onlyOwner external {
    audioclip17 = string(_audio);
  }

  function getAudioFirst17() public view returns (string memory) {
        return audioclip17;
  }

  function setAudioFirst18(string memory _audio) onlyOwner external {
    audioclip18 = string(_audio);
  }

  function getAudioFirst18() public view returns (string memory) {
        return audioclip18;
  }


}

