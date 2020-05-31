import Model from '../model/position';

const get = async () => {
    console.log('repo.position.get');

    return await Model.find((error, items) => {
        if (error) {
            return { error: error };
        } else {
            return items;
        }
    });
};

const add = async (jsonEntity) => {
    console.log(`repo.position.add: ${jsonEntity}`);
    jsonEntity.CreatedDate = new Date();

    let model = new Model(jsonEntity);
    return await model.save()
        .then(entity => {
            return entity;
        })
        .catch(error => {
            return { error: error };
        });
};
    
const clearAll = async () => {
    console.log(`repo.position.clearAll`);

    return await Model.deleteMany({}, error => {
        if (error) {
            console.log(`repo.position.clearAll: ${error}`);
            return { error: error };
        } else {
            return null;
        }

    });
};

export default { get, add, clearAll };