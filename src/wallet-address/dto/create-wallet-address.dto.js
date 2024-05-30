const { IsNotEmpty, IsString, IsInt } = require('class-validator');

class CreateWalletAddressDto {
  @IsNotEmpty()
  @IsString()
  address;

  @IsNotEmpty()
  @IsInt()
  userId;
}

module.exports = { CreateWalletAddressDto };
