'use strict';


function controller(view, model) {
    return  {
        setData(dataToSave, dbKey) {
            if(!dataToSave) throw new Error('No data in controller');
            
            model.saveData(dataToSave, dbKey)
        },

        getData(dbKey) {
            if(!dbKey) throw new Error('No dbKey');

            return model.getData(dbKey);
        },

        changeCompleted(itemId, dbKey, status) {
            if(!itemId) throw new Error('itemId is not defined');

            model.changeCompleted(itemId, dbKey, status);
        },

        removeItem(dbKey, itemId) {
            if(!itemId) throw new Error('No id provided');

            model.removeItem(dbKey, itemId)
        },

        removeAll(dbKey) {
            model.clearStorage(dbKey);
        }
    }
}
