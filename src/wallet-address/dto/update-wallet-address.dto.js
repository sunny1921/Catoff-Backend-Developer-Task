const { PartialType } = require('@nestjs/swagger');
const { CreateWalletAddressDto } = require('./create-wallet-address.dto');

class UpdateWalletAddressDto extends PartialType(CreateWalletAddressDto) {}

module.exports = { UpdateWalletAddressDto };

