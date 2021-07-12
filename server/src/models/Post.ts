import { Schema, model } from 'mongoose';

// Create an interface representing a document:
export interface IPost {
  post_type: string;
}

// Create an Schema associating with it the user interface (IPost)
const PostSchema = new Schema<IPost>({
  post_type: {
    type: String,
    required: true,
  },
});

// Create a model from the schema, using the interface IPost:
const Post = model<IPost>('Post', PostSchema);

export { Post };
