const { Table, Column, Model, DataType, HasMany, BeforeCreate, BeforeUpdate } = require('sequelize-typescript');
const bcrypt = require('bcrypt');
const WalletAddress = require('../wallet-address/wallet-address.model');

@Table
class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password;

  @HasMany(() => WalletAddress)
  walletAddresses;

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(instance) {
    if (instance.changed('password')) {
      instance.password = await bcrypt.hash(instance.password, 10);
    }
  }
}

module.exports = User;
