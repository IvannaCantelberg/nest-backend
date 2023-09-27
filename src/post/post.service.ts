import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';


@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private readonly postModel: Model<Post>) { }
    async findAll(): Promise<Post[]> {
        return await this.postModel.find().exec()
    }

    async findOne(id: string): Promise<Post> {
        return await this.postModel.findOne({ _id: id })
    }

    async create(post: Post): Promise<Post> {
        const newPost = new this.postModel(post);
        return await newPost.save();
    }

    async update(id: string, post: Post): Promise<Post> {
        return await this.postModel.findByIdAndUpdate({ _id: id }, post, { new: true })
    }

    async delete(id: string): Promise<Post> {
        return await this.postModel.findByIdAndRemove(id);
    }


}