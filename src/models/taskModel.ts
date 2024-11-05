import mongoose, { Document, Schema } from 'mongoose';

// Define the TypeScript interface that extends Mongoose's Document.
export interface ITask extends Document {
  title: string;
  status: 'pending' | 'completed';
  userId: string | mongoose.Types.ObjectId; //  allow string or ObjectId.
  createdAt?: Date;
  updatedAt?: Date;
}

// Create the Mongoose schema with the necessary options.
const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending',
    },
    userId: {
      type: Schema.Types.ObjectId, // Corrected type declaration.
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields.
  }
);

// Export the model with the interface type.
export default mongoose.model<ITask>('Task', taskSchema);
