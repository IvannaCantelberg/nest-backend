import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post_Types {
    @Prop({ default: 'Idea', enum: ['StartUp', 'Idea', 'Business Plan'], })
    name: string;

    @Prop()
    color: string;
}

@Schema()
export class Post {
    @Prop()
    title: string;

    @Prop({ type: Post_Types, default: { name: 'Idea', color: '#f50' } })
    recordType: Post_Types;

    @Prop()
    location: string;

    @Prop()
    description: string;

    @Prop()
    isPublic: boolean;

}

export const PostSchema = SchemaFactory.createForClass(Post);
export const PostTypeSchema = SchemaFactory.createForClass(Post_Types);