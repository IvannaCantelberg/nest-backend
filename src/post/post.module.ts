import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';
import { Module } from '@nestjs/common';
import { PostSchema, Post, Post_Types, PostTypeSchema } from './schemas/post.schema';
import { PostTypeController } from './post-type.controller';
import { PostTypeService } from './post-type.service';


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Post.name, schema: PostSchema },
            { name: Post_Types.name, schema: PostTypeSchema }
        ]),
    ],
    controllers: [
        PostsController, PostTypeController],
    providers: [
        PostsService, PostTypeService],
})
export class PostModule { }
