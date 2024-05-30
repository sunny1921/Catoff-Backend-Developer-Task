const { Module } = require('@nestjs/common');
const { ConfigModule, ConfigService } = require('@nestjs/config');
const { UsersModule } = require('./users/users.module');
const { WalletAddressModule } = require('./wallet-address/wallet-address.module');
const { AuthModule } = require('./auth/auth.module');
const databaseConfig = require('./config/database');
const configuration = require('./config/configuration');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    databaseConfig,
    UsersModule,
    WalletAddressModule,
    AuthModule,
  ],
})
class AppModule {}

module.exports = { AppModule };
