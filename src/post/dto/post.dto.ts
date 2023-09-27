import PostTypeDTO from "./post-type.dto";

export default class PostDTO {
    readonly title: string;
    readonly recordType: PostTypeDTO
    readonly location: string;
    readonly description: string;
    readonly isPublic: boolean;
}
