import { Post, IPost } from '../../models/Post';

class CreatePostService {
  public async execute({ post_type }: IPost) {
    // 1st step: create post and return id
    const post = new Post({ post_type });
    await post.save();
    return post;
  }
}

export { CreatePostService };
