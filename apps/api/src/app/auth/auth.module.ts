import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Global()
@Module({
  imports: [],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
