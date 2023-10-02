import { PostModule } from './post/post.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

import 'dotenv/config';

@Module({
  imports: [
    PostModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI)
  ],
  controllers: [
    AppController],
  providers: [],
})
export class AppModule { }
