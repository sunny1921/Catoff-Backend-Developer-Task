const { Table, Column, Model, ForeignKey, BelongsTo } = require('sequelize-typescript');
const { User } = require('../../users/entities/user.entity');

@Table
class WalletAddress extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id;

  @Column
  address;

  @ForeignKey(() => User)
  @Column
  userId;

  @BelongsTo(() => User)
  user;
}

module.exports = { WalletAddress };


