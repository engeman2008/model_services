import { IAssociation } from '../mongoose/association';
import { IAttribute } from '../mongoose/attribute';
import { IEntity } from '../mongoose/entity';
import { IModel } from '../mongoose/model';
export interface ICreateModelInput {
    email: IModel['name'];
    entities: [
        {
            name: IEntity['name'];
            attributes: [
                {
                    name: IAttribute['name'];
                    type: IAttribute['type'];
                }
            ];
        }
    ];
    associations: [
        {
            name: IAssociation['name'];
            source: IAssociation['source'];
            target: IAssociation['target'];
        }
    ];
}
