const { SequelizeModule } = require('@nestjs/sequelize');
const { User } = require('../users/entities/user.entity');
const { WalletAddress } = require('../wallet-address/entities/wallet-address.entity');

module.exports = SequelizeModule.forRootAsync({
  useFactory: async (configService) => ({
    dialect: 'postgres',
    host: configService.get('database.host'),
    port: configService.get('database.port'),
    username: configService.get('database.username'),
    password: configService.get('database.password'),
    database: configService.get('database.name'),
    models: [User, WalletAddress],
    autoLoadModels: true,
    synchronize: true,
  }),
  inject: [ConfigService],
});
