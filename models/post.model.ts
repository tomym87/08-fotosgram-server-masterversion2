
import { Schema, Document, model } from 'mongoose';

const postSchema = new Schema({

    created: {
        type: Date
    },
    mensaje: {
        type: String
    },
    imgs: [{
        type: String
    }],
    coords: {
        type: String   // -13.313123, 12.3123123
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [ true, 'Debe de existir una referencia a un usuario' ]
    },
    area:{
        type: String
    },
    motivo:{
        type: String
    },
    urgencia:{
        type: String
    },
    dato1:{
        type: String
    },
    dato2:{
        type: String
    },
    dato3:{
        type: String
    },
});

postSchema.pre<IPost>('save', function( next ) {
    this.created = new Date();
    next();
});

interface IPost extends Document {
    created: Date;
    mensaje: string;
    img: string[];
    coords: string;
    usuario: string;
    area: string;
    motivo: string;
    urgencia: string;
    dato1: string;
    dato2: string;
    dato3:string;
}

export const Post = model<IPost>('Post', postSchema);
