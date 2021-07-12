import { Post, IPost } from '../../models/Post';

class FetchAllPostsService {
  public async execute() {
    // 1st: fetch all
    const posts = await Post.find();

    // 2nd: check if the collection is empty
    if (!posts) {
      throw new Error('There are currently no posts registred');
    }

    return posts;
  }
}

export { FetchAllPostsService };
