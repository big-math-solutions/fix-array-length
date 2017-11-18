const fixList = function(len = 0) {
    if (!(this instanceof fixList)) return new fixList(len);
    this._len = len;
    this._array = [];
    this.push = (item) => {
        if (this._array.length < this._len) return this._array.push(item);

        this._array.shift();

        return this._array.push(item);
    };

    this.pull = this._array.pop;

    this.from = (_array) => {
        const array = Array.isArray(_array) ? _array : [ _array ];
        this._array = array.slice(0, len);
        return this;
    };
    this.map = this._array.map;
    this.filter = this._array.filter;
    this.forEach = this._array.forEach;
    this.pop = this._array.pop;
    this.shift = this._array.shift;
    this.unshift = (item) => {
        if (this._array.length < this._len) return this._array.unshift(item);

        this._array.pop();

        return this._array.unshift(item);
    };
    this.get = (i) => this._array[i];
    this.set = (i, item) => {
        if (i < this._len) this._array[i] = item;
        return this;
    };
    this.slice = this._array.slice;
    this.toString = this._array.toString;
    this.sort = this._array.sort;
    this.join = this._array.join;
    this.find = this._array.find;
    this.findIndex = this._array.findIndex;
    this.indexOf = this._array.indexOf;
    this.lastIndexOf = this._array.lastIndexOf;
    this.reduce = this._array.reduce;
    this.reduceRight = this._array.reduceRight;
    this.reverse = this._array.reverse;
    this.valueOf = this._array.valueOf;
};

module.exports = fixList;
