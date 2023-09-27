import { Controller, Get, Param, Put, Body, Post, Delete } from '@nestjs/common';
import { PostsService } from './post.service';
import PostDTO from './dto/post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()
    getAll(): Promise<PostDTO[]> {
        return this.postsService.findAll();
    }

    @Get(':id')
    getPostById(@Param('id') id: string): Promise<PostDTO> {
        return this.postsService.findOne(id);
    }

    @Post()
    createPost(@Body() dto: PostDTO): Promise<PostDTO> {
        return this.postsService.create(dto);
    }

    @Put(':id')
    updatePost(
        @Param('id') id: string,
        @Body() dto: PostDTO,
    ) {
        return this.postsService.update(id, dto);
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string,): Promise<PostDTO> {
        return this.postsService.delete(id);
    }
}
