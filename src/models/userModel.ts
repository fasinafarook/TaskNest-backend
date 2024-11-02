import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document { 
    username: string;
    email: string;
    password: string;
    comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Password comparison method
userSchema.methods.comparePassword = function(password: string) {
    return bcrypt.compare(password, this.password);
};

export default model<IUser>('User', userSchema);
