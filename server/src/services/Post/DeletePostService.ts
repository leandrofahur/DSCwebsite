import { Post, IPost } from '../../models/Post';

class DeletePostService {
  public async execute(id: string) {
    const post = await Post.findById(id);

    if (!post) {
      return 'Post does not exists!';
    }

    await Post.deleteOne({ _id: id });
    return 'Post deleted!';
  }
}

export { DeletePostService };
