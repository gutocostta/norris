module.exports = {
  distinctBy: function(array, prop, evaluatorFn) {
    return array.filter(function(obj, pos, arr) {
      return (
        arr
          .map(function(mapObj) {
            return evaluatorFn ? evaluatorFn(mapObj[prop]) : mapObj[prop];
          })
          .indexOf(obj[prop]) === pos
      );
    });
  },
  distinctByProduto: function(array, prop, evaluatorFn) {
    const result = array.filter(function(obj, pos, arr) {
      return (
        arr
          .map(function(mapObj) {
            return evaluatorFn ? evaluatorFn(mapObj[prop].id) : mapObj[prop].id;
          })
          .indexOf(obj[prop].id) === pos
      );
    });

    return result;
  },
  distinct: function(array) {
    return array.filter(function(obj, pos, arr) {
      return arr.indexOf(obj) === pos;
    });
  },
  selectId: function() {
    return function(current, index, arr) {
      return current.id;
    };
  },
  filterBy: function(array, prop, value) {
    return array.filter(function(obj, pos, arr) {
      return obj[prop] === value;
    });
  }
};
