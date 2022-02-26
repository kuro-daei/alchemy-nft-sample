//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract MyNFT is ERC721PresetMinterPauserAutoId {
  constructor()
    ERC721PresetMinterPauserAutoId(
      "MyNFT",
      "MYT",
      "https://storage.googleapis.com/rinkeby-nft/"
    )
  {}
}
