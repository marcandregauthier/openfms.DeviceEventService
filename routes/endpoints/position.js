import Repository from '../../repository/position';

const get = async (request, response) => {
    console.log('position.get');

    await Repository.get().then(result => {
        if (result.error) {
            console.log(`position.get failed : ${result.error}`);
            response.status(500);
        }
        else {
            response.json(result);
        }
    });
};

const add = async (request, response) => {
    console.log('position.add: ' + request.body);
    request.body.Source = 'RealtimeService';

    Repository.add(request.body)
        .then(result => {
            if (result.error) {
                console.log(`position.add failed : ${result.error}`);
                response.status(400).send(result.error);
            } else {
                response.status(200).json({ '_id': result._id });
            }
        });
};


const clearAll = async (request, response) => {
    console.log(`position.clearAll`);

    Repository.clearAll()
        .then(result => {
            if (result.error) {
                console.log(`position.clearAll failed : ${result.error}`);
                response.status(500);
            } else {
                response.status(200).send();
            }
        });
};

export default { get, add, clearAll };