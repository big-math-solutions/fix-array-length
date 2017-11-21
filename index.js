const fixList = function(len = 0) {
    if (!(this instanceof fixList)) return new fixList(len);
    this._len = len;
    this._array = [];
    this.push = (...items) => {
        if (items.length === 1) return this._pushOne(items[0])

        const length = this._array.length + items.length;
        if (length <= this._len) return this._array.push(...items);

        this._array.push(...items)
        this._array = this._array.slice(-this._len)

        return this
    };

    this._pushOne = (item) => {
        this._array.push(item)

        if (this._array.length > this._len) return this._array.shift()

        return this
    };

    this.pull = this._array.pop;

    this.concat = (...arg) => {
        this._array = this._array.concat(...arg).slice(-this._len);
        return this;
    };

    this.leftConcat = (...arg) => {
        this._array = arg[0]
            .concat(arg[0], ...arg.slice(1).push(this._array))
            .slice(-this._len);
        return this;
    };

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
    this.unshift = (...items) => {
        const length = this._array.length + items.length;

        if (length <= this._len) return this._array.unshift(...items);

        for(let i = 0; i < length - this._len; i++) this._array.pop();

        return this._array.unshift(...items);
    };
    this.get = (i) => this._array[i];
    this.set = (i, item) => {
        if (i < this._len) this._array[i] = item;
        return this;
    };
    this.getList = this._array.valueOf;
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
