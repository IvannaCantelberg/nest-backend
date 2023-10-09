
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AuthModule } from '@/auth/auth.module';
import { PostModule } from '@/post/post.module';
import { UserModule } from '@/user/user.module';

require('dotenv').config();
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    UserModule,
    AuthModule,

    PostModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI)
  ],
  controllers: [
    AppController,],
  providers: [AuthService],
})
export class AppModule { }
