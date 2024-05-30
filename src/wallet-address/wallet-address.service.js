const { Injectable, NotFoundException } = require('@nestjs/common');
const { InjectModel } = require('@nestjs/sequelize');
const { WalletAddress } = require('./entities/wallet-address.entity');
const { CreateWalletAddressDto } = require('./dto/create-wallet-address.dto');
const { UpdateWalletAddressDto } = require('./dto/update-wallet-address.dto');

@Injectable()
class WalletAddressService {
  constructor(walletAddressModel) {
    this.walletAddressModel = walletAddressModel;
  }

  async create(createWalletAddressDto) {
    const walletAddress = new this.walletAddressModel(createWalletAddressDto);
    return walletAddress.save();
  }

  async findAll() {
    return this.walletAddressModel.findAll();
  }

  async findOne(id) {
    const walletAddress = await this.walletAddressModel.findByPk(id);
    if (!walletAddress) {
      throw new NotFoundException('Wallet address not found');
    }
    return walletAddress;
  }

  async update(id, updateWalletAddressDto) {
    const walletAddress = await this.findOne(id);
    return walletAddress.update(updateWalletAddressDto);
  }

  async remove(id) {
    const walletAddress = await this.findOne(id);
    await walletAddress.destroy();
  }
}

module.exports = { WalletAddressService };
