const { Table, Column, Model, DataType, ForeignKey, BelongsTo } = require('sequelize-typescript');
const User = require('../users/user.model');

@Table
class WalletAddress extends Model {
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
  address;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId;

  @BelongsTo(() => User)
  user;
}

module.exports = WalletAddress;
