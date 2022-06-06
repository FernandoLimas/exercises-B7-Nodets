import { Schema, model, connection, Model } from "mongoose";

type UserType = {
  email: string,
  age: number,
  interests: [string],
  name: {
    firstName: string,
    lastName: string,
  }
}

const schema = new Schema<UserType>({
  email: { 
    type: String, 
    required: true 
  },
  age: { 
    type: Number, 
    required: true 
  },
  interests: [String],
  name: {
    firstName: { 
      type: String 
    },
    lastName: String
  }
});

const modelName: string = 'User';

// faz uma verificação se tem uma conexão
const userModel = connection && connection.models[modelName] ?
(connection.models[modelName] as Model<UserType>) :
model<UserType>(modelName, schema);

export default userModel;

// erro de tipagem, o problema era que quando você acessa connection.models, ele só sabe que tem objetos do tipo Model lá, mas ele não tem generic nenhum para especificar mais informações, enquanto o model<UserType>(...) gera um objeto do tipo Model<UserType>, e isso leva a uma incompatibilidade dos tipos e faz com que ele não tenha certeza se o find existe ou não e por isso dá erro