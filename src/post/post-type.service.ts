/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post_Types } from './schemas/post.schema';

@Injectable()
export class PostTypeService {
    constructor(@InjectModel(Post_Types.name) private readonly postTypeModel: Model<Post_Types>) { }
    async findAll(): Promise<Post_Types[]> {
        return await this.postTypeModel.find().exec()
    }

}
