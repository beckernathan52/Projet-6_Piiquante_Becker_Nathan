// Importation des dépendances
import mongoose from 'mongoose';
import mongooseErrors from 'mongoose-errors';

// Création du modèle sauceSchema
const sauceSchema =  new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true, default: 0 },
    dislikes: { type: Number, required: true, default: 0 },
    usersLiked: { type: [String], required: true, default: [] },
    usersDisliked: { type: [String], required: true, default: [] },
})

sauceSchema.plugin(mongooseErrors)

const Sauce = mongoose.model('Sauce', sauceSchema)


export {Sauce}