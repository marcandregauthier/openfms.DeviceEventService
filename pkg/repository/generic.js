const get = async (Model) => {
    console.log('repository.get');

    return await Model.find((error, items) => {
        if (error) {
            return { error: error };
        } else {
            return items;
        }
    });
};

const add = async (Model, jsonEntity) => {
    console.log(`repository.add: ${jsonEntity}`);
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
    
const clearAll = async (Model) => {
    console.log(`repository.clearAll`);

    return await Model.deleteMany({}, error => {
        if (error) {
            console.log(`repository.clearAll: ${error}`);
            return { error: error };
        } else {
            return null;
        }

    });
};

export default { get, add, clearAll };