/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { PostTypeService } from './post-type.service';
import PostTypeDTO from './dto/post-type.dto';

@Controller('postTypes')
export class PostTypeController {
    constructor(private postTypeService: PostTypeService) { }

    @Get()
    getAll(): Promise<PostTypeDTO[]> {
        return this.postTypeService.findAll();
    }
}
